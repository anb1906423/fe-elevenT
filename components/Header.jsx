import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import Swal from "sweetalert2";
import { FaUserAlt, FaShoppingCart, FaShoppingBag } from 'react-icons/fa'

import Login from "./Login"
import Register from './Register';
import { customerLogOut } from '../store/actions/customerActions'
import { menu } from 'data/data'

const Header = () => {
	const isLoggedIn = useSelector(state => state.customer.isLoggedIn);
	const [isClose, setIsClose] = useState(true)
	const [isLogInOpen, setIsLogInOpen] = useState(false);
	const [isRegisterOpen, setIsRegisterOpen] = useState(false)
	const dispatch = useDispatch()

	const toClose = () => {
		setIsLogInOpen(false)
		setIsRegisterOpen(false)
	}
	// const taiKhoan = [
	// 	{
	// 		title: <FaUserAlt />,
	// 		function: () => {
	// 			setIsLogInOpen(true)
	// 		},
	// 		href: '#',
	// 	},
	// 	{
	// 		title: <FaShoppingBag />,
	// 		function: () => {
	// 			console.log("Cart Page");
	// 		},
	// 		href: '#',
	// 	},
	// ]

	return (
		<div className="header-wrapper position-relation">
			{
				!isLoggedIn &&
				<>
					<div className={!isLogInOpen ? `${'d-none'}` : ''}>
						<Login
							toRegister={() => {
								setIsLogInOpen(false)
								setIsRegisterOpen(true)
							}}
							toClose={toClose}
						/>
					</div>
					<div className={!isRegisterOpen ? `${'d-none'}` : ''}>
						<Register
							toLogin={() => {
								setIsRegisterOpen(false)
								setIsLogInOpen(true)
							}}
							toClose={toClose}
						/>
					</div>
				</>
			}
			<div className="header w-100 d-flex align-items-center">
				<div className="logo-box p-2">
					<Link href="/">
						<img className='logo' src="../img/logo.png" alt="" />
					</Link>
				</div>
				<ul className="menu p-2">
					{
						menu.map((item, index) => {
							return (
								<li
									className="menu-item fw-bold text-uppercase position-relative"
									key={index}>
									<a
										className="d-flex align-items-center"
										href={item.href}
									>
										{item.title}
										<div>{item.icon}</div>
									</a>
									<ul className='sub-menu position-absolute'>
										{
											item.list && item.list.map((listItem, i) => {
												return (
													<li key={i} className='w-100'>
														<a
															href={listItem.href}>
															{listItem.title}
														</a>
													</li>
												)
											})
										}
									</ul>
								</li>
							)
						})
					}
				</ul>

				<ul className="header-inner p-2 ms-auto">
					{/* {
						taiKhoan.map((item, index) => {
							return (
								<li onClick={item.function} className="inner-item menu-item fw-bold text-uppercase" key={index}>
									<a href={item.href}>
										{item.title}
									</a>
								</li>
							)
						})
					} */}
					{
						!isLoggedIn ?
							<li onClick={() => setIsLogInOpen(true)} className="inner-item menu-item fw-bold text-uppercase">
								<a href='#'>Đăng Nhập</a>
							</li>
							:
							<>
								<li className="inner-item menu-item fw-bold text-uppercase">
									<a href='#'>Account</a>
								</li>
								<li onClick={() => dispatch(customerLogOut())} className="inner-item menu-item fw-bold text-uppercase">
									<a href='#'>Log Out</a>
								</li>
							</>
					}
					<li className="inner-item menu-item fw-bold text-uppercase">
						<a href='#'><FaShoppingBag /></a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header