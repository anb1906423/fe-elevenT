import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import axios from 'axios'

import AccountSidebar from '@/components/AccountSidebar'
import OrderDetailTable from '@/components/order/OrderDetailTable'
import { formatTime } from '@/helpers/format';
import { backendAPI } from '@/config'

const OrderDetail = () => {
    const router = useRouter()
    const { order_id } = router.query

    const [customerId, setCustomerId] = useState('')
    const [stateId, setStateId] = useState('')
    const [stateName, setStateName] = useState('')
    const [orderItems, setOrderItems] = useState([])
    const [totalProductValue, setTotalProductValue] = useState(0)
    const [deliveryCharges, setDeliveryCharges] = useState(0)
    const [totalOrderValue, setTotalOrderValue] = useState(0)
    const [createdAt, setCreatedAt] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    const isLoggedIn = useSelector(state => state.customer.isLoggedIn)
    const customerInfo = useSelector((state) => state.customer.customerInfo)

    useEffect(() => {
        if (isLoggedIn)
            customerInfo != null ? setCustomerId(customerInfo.customer_id) : setCustomerId('')
    }, [isLoggedIn]);

    useEffect(() => {
        const getOrderDetail = async () => {
            try {
                let respond = await axios.get(backendAPI + `/api/order/detail/${customerId}/${order_id}`);
                setStateName(respond.data.state_name)
                setStateId(respond.data.state_id)
                setCreatedAt(respond.data.created_at)
                setOrderItems(respond.data.order_items)
                setTotalProductValue(respond.data.total_product_value)
                setDeliveryCharges(respond.data.delivery_charges)
                setTotalOrderValue(respond.data.total_order_value)
                setCustomerName(respond.data.customer_name)
                setEmail(respond.data.email)
                setPhoneNumber(respond.data.phone_number)
                setAddress(respond.data.address)
            } catch (error) {
                console.log(error);
            }
        }
        if (order_id && customerId) {
            getOrderDetail();
        }
    }, [order_id, customerId])

    return (
        <div className='order-detail'>
            <div className="row">
                <div className="col-4">
                    <AccountSidebar />
                </div>
                <div className="col-8">
                    <div className="title-div">
                        <h3 className="title text-uppercase text-center">
                            Thông tin đơn hàng của bạn
                        </h3>
                    </div>
                    <div className="d-flex row align-items-center justify-content-between">
                        <div className="col-3"></div>
                        <div className="col-6 order-id-box fw-bold d-flex border-radius justify-content-center align-items-center">
                            <p className='text-uppercase order-id'>Đơn hàng #{order_id}</p>
                            <div className='confirmed-box d-flex align-items-center'>
                                <p className='confirmed-text'>{stateName}</p>
                            </div>
                        </div>
                        <div className="order-date col-3 d-flex row align-items-center justify-content-end">
                            <p>Ngày đặt: {formatTime(createdAt)}</p>
                        </div>
                    </div>
                    <div>
                        <OrderDetailTable
                            orderItems={orderItems}
                            totalProductValue={totalProductValue}
                            deliveryCharges={deliveryCharges}
                            totalOrderValue={totalOrderValue}
                        />
                    </div>
                    <div className="receive-wp">
                        <div className="title-div">
                            <h4 className="title text-center">
                                Thông tin nhận hàng
                            </h4>
                        </div>
                        <div className="receive-info border-radius">
                            <p>
                                Tên người nhận:
                                <strong>{customerName}</strong>
                            </p>
                            <p>
                                Địa chỉ email:
                                <strong>{email}</strong>
                            </p>
                            <p>
                                Số điện thoại:
                                <strong>{phoneNumber}</strong>
                            </p>
                            <p>
                                Hình thức thanh toán
                                <strong>COD</strong>
                            </p>
                            <p>
                                Địa chỉ giao hàng
                                <strong>{address}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail