import React, { useState } from 'react'
import AccountSidebar from '@/components/AccountSidebar'
import Order from '@/components/order/Order'

export const ordersData = [
    {
        "order_id": "001",
        "customer_name": "John Smith",
        "date": "2022-03-20",
        "total": "689000",
        "status": "Đã xác nhận",
        "items": [
            {
                "name": "T-shirt audio special analytics coolPro",
                "quantity": 2,
                "price": "250000",
                "colour": "Xanh Dịu Dàng",
                "size": "L",
                "img": "https://levents.asia/wp-content/uploads/2022/07/z3539120036798_16a66eec2eb73f01e1bc272fb6bfb574_70169d9bb6b341debf1934136d60b7ff.jpg",
            },
            {
                "name": "Jeans",
                "quantity": 1,
                "price": "139000",
                "colour": "Xanh Dịu Dàng",
                "size": "L",
                "img": "https://levents.asia/wp-content/uploads/2022/07/z3539120036798_16a66eec2eb73f01e1bc272fb6bfb574_70169d9bb6b341debf1934136d60b7ff.jpg",
            }
        ]
    },
    {
        "order_id": "002",
        "customer_name": "Jane Doe",
        "date": "2022-03-21",
        "total": "568000",
        "status": "Đã xác nhận",
        "items": [
            {
                "name": "Shoes",
                "quantity": 1,
                "price": "419000",
                "colour": "Xanh Dịu Dàng",
                "size": "L",
                "img": "https://levents.asia/wp-content/uploads/2022/07/z3539120036798_16a66eec2eb73f01e1bc272fb6bfb574_70169d9bb6b341debf1934136d60b7ff.jpg",
            },
            {
                "name": "Socks",
                "quantity": 3,
                "price": "119000",
                "colour": "Xanh Dịu Dàng",
                "size": "L",
                "img": "https://levents.asia/wp-content/uploads/2022/07/z3539120036798_16a66eec2eb73f01e1bc272fb6bfb574_70169d9bb6b341debf1934136d60b7ff.jpg",
            }
        ]
    }
]

// Order page
const orders = () => {
    const [orders, setOrders] = useState(ordersData)

    console.log(orders);

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
                                orders.length == 0 ? "Đơn hàng của bạn" : `Đơn hàng của bạn: ${orders.length} đơn hàng`
                            }
                            
                        </h3>
                    </div>
                    <div className="orders-body">
                        {orders && orders.length === 0 ?
                            <p className='text-center'>Bạn chưa có đơn hàng nào!</p>
                            :
                            orders.map((order, index) => {
                                return (
                                    <div key={index}>
                                        <Order
                                            key={index}
                                            items={order.items}
                                            total={order.total}
                                            status={order.status}
                                            id={order.order_id}
                                            date={order.date}
                                            totalPrice={order.total}
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