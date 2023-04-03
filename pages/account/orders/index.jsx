import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import axios from 'axios';
import FeedbackModal from '@/components/order/FeedbackModal';

import AccountSidebar from '@/components/AccountSidebar'
import Order from '@/components/order/Order'
import { backendAPI } from '@/config'

export const fakeOrderList = [
    {
        "order_id": "71852912157786",
        "state_id": 1,
        "state_name": "Chờ Xác Nhận",
        "order_items": [
            {
                "product_variant_id": 3,
                "name": "Áo thun thể thao nam Active ProMax",
                "image": "http://localhost:8080\\static\\images\\b61668db-eea8-43d6-aa33-7582f0bb0c7e.jpg",
                "quantity": 2,
                "colour": "Trắng",
                "size": "L",
                "price": 179000
            },
            {
                "product_variant_id": 19,
                "name": "Quần Jeans Clean Denim dáng Regular S3",
                "image": "http://localhost:8080\\static\\images\\81a212a5-f49b-4ee8-a43b-b9e30f10f1c8.jpg",
                "quantity": 1,
                "colour": "Xanh Đậm",
                "size": "29",
                "price": 599000
            }
        ],
        "total_order_value": 977000,
        "created_at": "2023-03-16T03:22:48.000Z"
    }
]

const orders = () => {
    const [customerId, setCustomerId] = useState('')
    const [orderList, setOrderList] = useState([])
    const customerInfo = useSelector((state) => state.customer.customerInfo)
    const isLoggedIn = useSelector(state => state.customer.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn)
            customerInfo != null ? setCustomerId(customerInfo.customer_id) : setCustomerId('')
    }, [isLoggedIn]);

    useEffect(() => {
        const getOrderList = async () => {
            try {
                const result = await axios.get(`${backendAPI}/api/order/customer/list/${customerId}`)
                setOrderList(result.data)
            } catch (err) {
                console.log(err)
                setOrderList(fakeOrderList)
            }
        }
        if (customerId) getOrderList()
    }, [customerId]);

    // Modal
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [productVariantIdForFeedBack, setProductVariantIdForFeedBack] = useState(null);

    return (
        <div className='account-orders row'>
            <div className="col-4">
                <AccountSidebar />
            </div>
            <div className="col-8">
                <div className="orders-tab">
                    <div className="title-div">
                        <h3 className="title">
                            {
                                orderList.length == 0 ? "Đơn hàng của bạn" : `Đơn hàng của bạn: ${orderList.length} đơn hàng`
                            }

                        </h3>
                    </div>
                    <div className="orders-body">
                        {orderList && orderList.length === 0 ?
                            <p className='text-center'>Bạn chưa có đơn hàng nào!</p>
                            :
                            orderList.map((order, index) => {
                                return (
                                    <div key={index}>
                                        <Link href={`/get-order/${order.order_id}`}>
                                            <Order
                                                key={index}
                                                id={order.order_id}
                                                stateId={order.state_id}
                                                stateName={order.state_name}
                                                orderItems={order.order_items}
                                                totalOrderValue={order.total_order_value}
                                                createdAt={order.created_at}
                                                setIsFeedbackModalOpen={setIsFeedbackModalOpen}
                                                setProductVariantIdForFeedBack={setProductVariantIdForFeedBack}
                                            />
                                        </Link>
                                        <FeedbackModal
                                            isOpen={isFeedbackModalOpen}
                                            setIsOpen={setIsFeedbackModalOpen}
                                            productVariantId={productVariantIdForFeedBack}
                                            setProductVariantId={setProductVariantIdForFeedBack}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default orders