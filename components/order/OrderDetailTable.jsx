import React from 'react'
import { addPointToPrice } from '@/Func'

const OrderDetailTable = (props) => {

    // Hiện tại kêt quả chưa đúng
    const finalTotal = (price, delivery_charges) => {
        return price + delivery_charges
    }

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
                        props.items && props.items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{addPointToPrice(item.price)}</td>
                                    <td>{`${item.colour} / ${item.size}`}</td>
                                    <td>{addPointToPrice(item.price)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5">Mã giảm giá</td>
                    </tr>
                    <tr className=''>
                        <td colSpan="4" className=''>Tổng giá trị sản phẩm</td>
                        <td colSpan="1" className=''>{props.total}</td>
                    </tr>
                    <tr className=''>
                        <td colSpan="4" className=''>Phí giao hàng</td>
                        <td colSpan="1" className=''>
                            {
                                props.delivery_charges == "0" ? "Miễn phí" : `${addPointToPrice(props.delivery_charges)}đ`
                            }
                        </td>
                    </tr>
                    <tr className='fw-bold'>
                        <td colSpan="4" className=''>Tổng thanh toán</td>
                        <td colSpan="1" className=''>{`${addPointToPrice(finalTotal(props.total, props.delivery_charges))}đ`}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default OrderDetailTable