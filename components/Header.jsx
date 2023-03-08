import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Swal from "sweetalert2";
import Login from "./Login"
import Register from './Register';
import { FaUserAlt, FaShoppingCart, FaShoppingBag } from 'react-icons/fa'
import { menu } from 'data/data'

const Header = () => {
	const [isClose, setIsClose] = useState(true)
	const [isLogIn, setIsLogIn] = useState(false)
	const [isRegister, setIsRegister] = useState(false)

	const toClose = () => {
		setIsLogIn(false)
		setIsRegister(false)
	}
	const taiKhoan = [
		{
			title: <FaUserAlt />,
			function: () => {
				setIsLogIn(true)
			},
			href: '#',
		},
		{
			title: <FaShoppingBag />,
			function: () => {
				console.log("Cart Page");
			},
			href: '#',
		},
	]

	return (
		<div className="header-wrapper position-relation">
			<div className={!isLogIn ? `${'d-none'}` : ''}>
				<Login
					toRegister={() => {
						setIsLogIn(false)
						setIsRegister(true)
					}}
					toClose={toClose}
				/>
			</div>
			<div className={!isRegister ? `${'d-none'}` : ''}>
				<Register
					toLogin={() => {
						setIsRegister(false)
						setIsLogIn(true)
					}}
					toClose={toClose}
				/>
			</div>
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
					{
						taiKhoan.map((item, index) => {
							return (
								<li onClick={item.function} className="inner-item menu-item fw-bold text-uppercase" key={index}>
									<a href={item.href}>
										{item.title}
									</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
}

export default Header