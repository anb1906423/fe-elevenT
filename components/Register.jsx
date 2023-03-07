import React, { useState, useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';
import { swalert, swtoast } from '@/mixins/swal.mixin'
import { backendAPI } from '@/config'

const Register = (props) => {
    const fullNameRef = useRef()
    const phoneNumberRef = useRef()
    const emailRef = useRef()
    const pwdRef = useRef()
    const pwdAgainRef = useRef()

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [err, setErr] = useState('')

    useEffect(() => {
        fullNameRef.current.focus()
    }, [])

    const handleRegister = async () => {
        if (email == '') {
            setErr("Email không được để trống!!");
            emailRef.current.focus()
            return
        }
        if (password == '') {
            setErr("Password không được để trống!!");
            pwdRef.current.focus()
            return
        }
        if (passwordAgain == '') {
            setErr("Vui lòng nhập lại mật khẩu!!");
            pwdAgainRef.current.focus()
            return
        }
        try {
            const result = await axios.post(`${backendAPI}/api/customer/register`, {
                email: email,
                password: password
            })
            swtoast.success({
                text: "Đăng ký tài khoản thành công!"
            })
        } catch (error) {
            swtoast.error({
                text: error.response.data
            })
        }
    }
    return (
        <div className='user register w-100 position-absolute' onClick={props.toClose}>
            <div className="user-box position-relative register-box border-radius" onClick={(e) => e.stopPropagation()}>
                <div className="header-form position-absolute" onClick={props.toClose}>
                    <FaTimes />
                </div>
                <form action="" onSubmit={handleRegister} className="form-user form-register">
                    <h3 className="heading text-center">Đăng ký tài khoản</h3>
                    <input
                        type="text"
                        className='w-100 border-radius'
                        placeholder='Họ và tên'
                        ref={fullNameRef}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <input
                        type="text"
                        className='w-100 border-radius'
                        placeholder='Số điện thoại'
                        ref={phoneNumberRef}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type="email"
                        className='w-100 border-radius'
                        placeholder='Email'
                        ref={emailRef}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className='w-100 border-radius'
                        placeholder='Mật khẩu'
                        ref={pwdRef}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        className='w-100 border-radius'
                        placeholder='Nhập lại mật khẩu'
                        ref={pwdAgainRef}
                        value={passwordAgain}
                        onChange={(e) => setPasswordAgain(e.target.value)}
                    />
                    <div className="box-err text-danger text-left">
                        {err}
                    </div>
                    <button className='w-100 border-radius' type='submit'>Đăng ký</button>
                </form>
                <div className="footer-form d-flex justify-content-center">
                    <a className='footer-form-item' href="#" onClick={props.toLogin}>Đăng nhập</a>
                </div>
            </div>
        </div>
    )
}

export default Register