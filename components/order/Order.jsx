import React from 'react'
import OrderItem from './OrderItem'
import { addPointToPrice } from '@/Func';
import Router from 'next/router';

const linkToOrder = "/account/orders"

// Order
const Order = (props) => {
    const { id, items, totalPrice, status, date } = props;
    // const router = Router()

    return (
        <div className='order-component border-radius' onClick={() => Router.push(linkToOrder + `/${id}`)}>
            <div className="order-component-header border-radius d-flex align-items-center justify-content-between">
                <div>
                    <p className='fw-bold'>{id}</p>
                    <p>{date}</p>
                </div>
                <div className='order-status'>
                    <p className='fw-bold'>{status}</p>
                </div>
            </div>
            <div className="order-component-body">
                {items.map((item, index) => (
                    <OrderItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        total={item.total}
                        img={item.img}
                        colour={item.colour}
                        size={item.size}
                    />
                ))}
            </div>
            <div className="order-component-footer d-flex align-items-center justify-content-end">

                <p>Tổng đơn hàng: <strong>{addPointToPrice(totalPrice)}đ</strong></p>

            </div>
        </div>
    )
}

export default Order