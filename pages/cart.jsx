import React, { useState, useEffect, useRef } from 'react'
import Input from '@/components/Input'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '@/components/CartItem'
import { FaShippingFast } from 'react-icons/fa'
import { Radio } from 'antd';

const Cart = () => {
    const [productList, setProductList] = useState([])
    const customerInfo = useSelector((state) => state.customer.customerInfo)
    const cart = useSelector((state) => state.cart.productList)
    const [customerName, setCustomerName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const [discount, setDiscount] = useState(0)

    const [error, setError] = useState('')

    const [feeShip, setFeeShip] = useState(cart.length > 0 ? 20000 : 0)

    const totalPrice = cart.reduce((accumulator, product) => accumulator + product.price, 0)

    const addPointToPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const finalDiscount = (price, discount) => {
        return price * discount / 100
    }

    const finalTotal = (price, discount) => {
        return (price * (100 - discount) / 100) + feeShip
    }

    useEffect(() => {
        setEmail(customerInfo.email)
        setCustomerName(customerInfo.customer_name)
        setPhoneNumber(customerInfo.phone_number)
        console.log(cart);
    }, [customerInfo])

    return (
        <div className="cart">
            <div className="row">
                <div className="col-7 cart-left-section">
                    <div className="title-div">
                        <h3 className="title">
                            Thông tin vận chuyển
                        </h3>
                    </div>
                    <div className="sidebar-div">
                        <div className="row">
                            <div className="col-6">
                                <Input
                                    type="text"
                                    value={customerName}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    error={error}
                                    placeholder="Họ tên"
                                />
                            </div>
                            <div className="col-6">
                                <Input
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    error={error}
                                    placeholder="Số điện thoại"
                                />
                            </div>
                        </div>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={error}
                            placeholder="Địa chỉ email"
                            disabled={true}
                        />
                        <Input
                            type="t"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            error={error}
                            placeholder="Địa chỉ (Ví dụ: 112/12 Hưng Lợi, Ninh Kiều)"
                        />
                    </div>
                    <div className="payment">
                        <div className="title-div">
                            <h3 className="title">
                                Hình thức thanh toán
                            </h3>
                        </div>
                        <div>
                            <label htmlFor="" className="payment-item w-100 border-radius d-flex align-items-center justify-content-start">
                                <div className='payment-item-radio'>
                                    <Radio checked></Radio>
                                </div>
                                <div className='payment-item-icon'>
                                    <FaShippingFast />
                                </div>
                                <div className="payment-item-name">
                                    <p>
                                        <p className="text-uppercase">cod</p>
                                        <p className="">Thanh toán khi nhận hàng</p>
                                    </p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-5 cart-right-section">
                    <div className="title-div">
                        <h3 className="title">
                            Giỏ hàng
                        </h3>
                    </div>
                    <div className="cart-section">
                        {
                            cart.length > 0 ?
                                cart && cart.map((item, index) => {
                                    return (
                                        <CartItem
                                            key={index}
                                            image={item.image}
                                            quantity={item.quantity}
                                            name={item.name}
                                            colour={item.colour}
                                            size={item.size}
                                            productVariantId={item.productVariantId}
                                            price={addPointToPrice(item.price)}
                                        />

                                    )
                                }) : <p className="text-center">Chưa có sản phẩm nào trong giỏ hàng</p>
                        }
                    </div>
                    <div className="row pricing-info">
                        <div className="pricing-info-item position-relative d-flex justify-content-between">
                            <p>
                                Tạm tính
                            </p>
                            <p>
                                {addPointToPrice(totalPrice)}đ
                            </p>
                        </div>
                        <div className="pricing-info-item d-flex justify-content-between">
                            <p>Giảm giá</p>
                            <p>{finalDiscount(totalPrice, discount)}đ</p>
                        </div>
                        <div className="pricing-info-item d-flex justify-content-between">
                            <p>Phí giao hàng</p>
                            <p>{feeShip == 0 ? "Miễn phí" : `${addPointToPrice(feeShip)}đ`}</p>
                        </div>
                        <div className="pricing-info-item final-total-box position-relative d-flex justify-content-between">
                            <p className='fw-bold'>Tổng</p>
                            <p className='fw-bold'>
                                {addPointToPrice(finalTotal(totalPrice, discount))}đ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart