import React, { useState } from 'react'
import AccountSidebar from '@/components/AccountSidebar'

const orders = () => {
    const [orders, setOrders] = useState([])

    return (
        <div className='account-orders row'>
            <div className="col-4">
                <AccountSidebar />
            </div>
            <div className="col-8">
                <div className="orders-tab">
                    <div className="title-div">
                        <h3 className="title">
                            Đơn hàng của bạn
                        </h3>
                    </div>
                    <div className="orders-body">
                        {orders.length === 0 ?
                            <p className='text-center'>Bạn chưa có đơn hàng nào!</p>
                            :
                            orders.map((item, index) => {
                                return (
                                    <>orderComponent</>
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