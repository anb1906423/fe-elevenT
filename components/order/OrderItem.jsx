import React from 'react'

import { formatPrice } from '@/helpers/format';
// Each product in order
const OrderItem = (props) => {
    const { productVariantId, name, image, quantity, colour, size, price, setIsFeedbackModalOpen, setProductVariantIdForFeedBack } = props;

    const showFeedbackModal = (e) => {
        e.preventDefault();
        setProductVariantIdForFeedBack(productVariantId)
        setIsFeedbackModalOpen(true);
    };

    return (
        <div className='order-item'>
            <div className="row">
                <div className="col-2 d-flex border-radius justify-content-center align-items-center">
                    <div className="box-img border-radius">
                        <img className="border-radius" src={image} alt="" />
                    </div>
                </div>
                <div className="col-10 border-radius d-flex justify-content-between">
                    <div className="cart-item-info position-relative">
                        <div className="product-name">
                            <p className="fw-bold">
                                {name}
                            </p>
                        </div>
                        <div className="other-info">
                            <div className=" product-quantity">
                                ×{quantity}
                            </div>
                            <p className="text-blue">{`${colour} / ${size}`}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="price-box fw-bold">
                                {formatPrice(price)}đ
                            </div>
                        </div>
                    </div>
                    <div>
                        <div onClick={showFeedbackModal} className="rating-product-btn border-radius">
                            <p>Đánh giá sản phẩm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem