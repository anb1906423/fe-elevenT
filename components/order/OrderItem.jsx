import React from 'react'
import { addPointToPrice } from '@/Func'
// Each product in order
const OrderItem = (props) => {
    return (
        <div className='order-item'>
            <div className="row">
                <div className="col-2 d-flex border-radius justify-content-center align-items-center">
                    <div className="box-img border-radius">
                        <img className="border-radius" src={props.img} alt="" />
                    </div>
                </div>
                <div className="col-10 border-radius d-flex justify-content-between">
                    <div className="cart-item-info position-relative">
                        <div className="product-name">
                            <p className="fw-bold">
                                {props.name}
                            </p>
                        </div>
                        <div className="other-info">
                            <div className=" product-quantity">
                                ×{props.quantity}
                            </div>
                            <p>{`${props.colour} / ${props.size}`}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="price-box fw-bold">
                                {addPointToPrice(props.price)}đ
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="rating-product-btn border-radius">
                            <p>Đánh giá sản phẩm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem