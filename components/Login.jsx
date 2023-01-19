import React, { useState, useEffect, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'

const Login = (props) => {
  const userRef = useRef()
  const pwdRef = useRef()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    userRef.current.focus()
  })

  return (
    <div className='user login w-100 position-absolute' onClick={props.toClose}>
      <div className="user-box position-relative login-box text-center border-radius" onClick={(e) => e.stopPropagation()}>
        <div className="header-form position-absolute" onClick={props.toClose}>
          <FaTimes />
        </div>
        <form action="" className="form-user form-login">
          <h3 className="heading">Đăng nhập</h3>
          <input
            type="text"
            className='w-100 border-radius'
            placeholder='Email / Số điện thoại'
            ref={userRef}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className='w-100 border-radius'
            placeholder='Mật khẩu'
            ref={pwdRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='w-100 border-radius' type='submit'>Đăng nhập</button>
        </form>
        <div className="footer-form d-flex justify-content-between">
          <a className='footer-form-item' href="#" onClick={props.toRegister}>Đăng ký tài khoản mới</a>
          <a className='footer-form-item' href="#" onClick={props.toForgotPassword}>Quên mật khẩu</a>
        </div>
      </div>
    </div>
  )
}

export default Login