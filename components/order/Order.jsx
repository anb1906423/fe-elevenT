import React from 'react'
import Router from 'next/router';

import OrderItem from './OrderItem'
import { formatPrice, formatDate } from '@/helpers/format';
const linkToOrder = "/account/orders"

const Order = (props) => {
    const { id, orderItems, totalOrderValue, stateId, stateName, createdAt } = props;

    return (
        <div className='order-component border-radius'>
            <div className="order-component-header border-radius d-flex align-items-center justify-content-between">
                <div>
                    <p className='fw-bold'>#{id}</p>
                    <p>{formatDate(createdAt)}</p>
                </div>
                <div className='order-status'>
                    <p className='fw-bold'>{stateName}</p>
                </div>
            </div>
            <div className="order-component-body">
                {orderItems && orderItems.map((orderItem, index) => (
                    <OrderItem
                        key={index}
                        productVariantId={orderItem.product_variant_id}
                        name={orderItem.name}
                        image={orderItem.image}
                        quantity={orderItem.quantity}
                        colour={orderItem.colour}
                        size={orderItem.size}
                        price={orderItem.price}
                    />
                ))}
            </div>
            <div className="order-component-footer d-flex align-items-center justify-content-end">

                <p>Tổng đơn hàng: <strong>{formatPrice(totalOrderValue)}đ</strong></p>

            </div>
        </div>
    )
}

export default Order