import React, { useState, useEffect } from 'react'
import AccountSidebar from '@/components/AccountSidebar'
import { useRouter } from 'next/router'
import { ordersData } from './index'
import OrderDetailTable from '@/components/order/OrderDetailTable'

const OrderDetail = () => {
    const router = useRouter()
    const urlParts = router.pathname;

    const [orderId, setOrderId] = useState(router.query.id)
    const [order, setOrder] = useState('')

    useEffect(() => {
        ordersData.map((item, index) => {
            if (item.order_id === orderId) {
                setOrder(item)
            }
        })
        console.log(order);
    }, [])


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
                            <p className='text-uppercase order-id'>Đơn hàng #{order.order_id}</p>
                            <div className='confirmed-box d-flex align-items-center'>
                                <p className='confirmed-text'>Đã xác nhận</p>
                            </div>
                        </div>
                        <div className="order-date col-3 d-flex row align-items-center justify-content-end">
                            <p>Ngày đặt: {order.date}</p>
                        </div>
                    </div>
                    <div>
                        <OrderDetailTable
                            items={order.items}
                            total={order.total}
                            delivery_charges={0}
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
                                <strong>

                                </strong>
                            </p>
                            <p>
                                Địa chỉ email:
                                <strong>

                                </strong>
                            </p>
                            <p>
                                Số điện thoại:
                                <strong>

                                </strong>
                            </p>
                            <p>
                                Hình thức thanh toán
                                <strong>

                                </strong>
                            </p>
                            <p>
                                Địa chỉ giao hàng
                                <strong>

                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderDetail