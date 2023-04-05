import React from 'react'
import { formatPrice } from '@/helpers/format';

const OrderDetailTable = (props) => {

    const { orderItems, totalProductValue, deliveryCharges, totalOrderValue } = props;

    return (
        <div className="order-detail-table">
            <table className='table w-100 table-striped'>
                <thead className="text-center">
                    <tr className="">
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Giá niêm yết</th>
                        <th>Biến thể</th>
                        <th>Thành tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderItems && orderItems.map((orderItem, index) => {
                            return (
                                <tr key={index}>
                                    <td>{orderItem.name}</td>
                                    <td className='text-center'>{orderItem.quantity}</td>
                                    <td className='text-center'>{formatPrice(orderItem.price)}</td>
                                    <td className='text-center'>{`${orderItem.colour} / ${orderItem.size}`}</td>
                                    <td className='text-center'>{formatPrice(orderItem.total_value)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot className=''>
                    <tr>
                        <td colSpan="5">Mã giảm giá</td>
                    </tr>
                    <tr className=''>
                        <td colSpan="4" className=''>Tổng giá trị sản phẩm</td>
                        <td colSpan="1" className='text-center'>{formatPrice(totalProductValue)}</td>
                    </tr>
                    <tr className=''>
                        <td colSpan="4" className=''>Phí giao hàng</td>
                        <td colSpan="1" className='text-center'>{formatPrice(deliveryCharges)}</td>
                    </tr>
                    <tr className='fw-bold'>
                        <td colSpan="4" className=''>Tổng thanh toán</td>
                        <td colSpan="1" className='text-center'>{formatPrice(totalOrderValue)}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default OrderDetailTable