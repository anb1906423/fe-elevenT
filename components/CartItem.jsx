import React, { useEffect, useState, useRef } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { handleRemoveItem } from '@/store/actions/cartActions'
import ProductQuantityInput from './ProductQuantityInput'
import { decrementQuantity, incrementQuantity } from '@/store/actions/cartActions'
import { useDispatch } from 'react-redux'
import { removeItem } from '@/store/actions/cartActions'
import { FaAngleDown } from 'react-icons/fa'
import { PlusOutlined, MinusOutlined, DownOutlined } from '@ant-design/icons'

const CartItem = (props) => {

    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <div className="row">
                <div className="col-4">
                    <div className="box-img position-relative border-radius">
                        <img className="border-radius" src={props.image} alt="" />
                        <div className="position-absolute product-quantity">
                            {props.quantity}
                        </div>
                    </div>
                </div>
                <div className="col-8 d-flex flex-column justify-content-between">
                    <div className="cart-item-info position-relative">
                        <div className="product-name">
                            <p className="fw-bold">
                                {props.name}
                            </p>
                        </div>
                        <CloseOutlined
                            className="cart-item-remove position-absolute"
                            onClick={() => dispatch(removeItem(props.productVariantId))}
                        />
                        <div className="orther-info">
                            <p>{`${props.colour} / ${props.size}`}</p>
                        </div>
                    </div>
                    <div className="cart-item-action">
                        <div className="d-flex">
                            <div className="colour-wp d-flex justify-content-around align-items-center">
                                {props.colour} <FaAngleDown />
                            </div>
                            <div className="size-wp d-flex justify-content-around align-items-center">
                                {props.size} <FaAngleDown />
                            </div>
                        </div>
                        <div className="d-flex align-self-end justify-content-between">
                            <div
                                className="fw-bold quantity-button col-3 d-flex justify-content-between align-items-center"
                                style={{ border: '1px solid #000 ', borderRadius: '8px' }}
                            >
                                <PlusOutlined onClick={() => {
                                    dispatch(incrementQuantity(props.productVariantId))
                                }}
                                />
                                <span>{props.quantity}</span>
                                <MinusOutlined onClick={() => dispatch(incrementQuantity(props.productVariantId))} />
                            </div>
                            <div className="price-boxx">
                                {props.price}đ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem