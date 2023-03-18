import React, { useState, useEffect, useRef } from 'react'
import Input from '@/components/Input'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from '@/components/CartItem'

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

    const totalPrice = cart.reduce((accumulator, product) => accumulator + product.price, 0)
    
    const addPointToPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    const finalDiscount = (price, discount) => {
        return price * discount / 100
    }

    const finalTotal = (price, discount) => {
        return price * (100 - discount) / 100
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
                <div className="col-6 cart-left-section">
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
                </div>
                <div className="col-6 cart-right-section">
                    <div className="title-div">
                        <h3 className="title">
                            Giỏ hàng
                        </h3>
                    </div>
                    <div className="cart-section">
                        {
                            cart && cart.map((item, index) => {
                                return (
                                    <CartItem
                                        key={index}
                                        image={item.image}
                                        quantity={item.quantity}
                                        name={item.name}
                                        colour={item.colour}
                                        size={item.size}
                                    />

                                )
                            })
                        }
                    </div>
                    <div className="row pricing-info position-relative">
                        <div className="pricing-info-item d-flex justify-content-between">
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
                            <p>Miễn phí</p>
                        </div>
                        <div className="pricing-info-item final-total-box position-relative d-flex justify-content-between">
                            <p className='fw-bold'>Tổng</p>
                            <p className='fw-bold'>
                                {finalTotal(totalPrice, discount)}đ
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart