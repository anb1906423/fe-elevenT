import React, { useState, useEffect, useRef } from 'react'
import Input from '@/components/Input'

const Cart = () => {
    const [customerName, setCustomerName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const [error, setError] = useState('')

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
                </div>
            </div>
        </div>
    )
}

export default Cart