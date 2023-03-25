import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { sidebar } from '@/data/AccountInforData'

const AccountSidebar = () => {
    const [customerName, setCustomerName] = useState('')
    const customerInfo = useSelector((state) => state.customer.customerInfo)
    const router = useRouter()
    const urlParts = router.pathname;

    const sidebarItemFocus = {
        backgroundColor: "#000",
        color: "#fff",
    }

    useEffect(() => {
        customerInfo != null ? setCustomerName(customerInfo.customer_name) : setCustomerName('')
    }, [customerInfo])

    return (
        <div className="account-sidebar">
            <div className="title-div">
                <h3 className="title">
                    {customerName}
                </h3>
            </div>
            <div className="sidebar-div">
                <ul className="sidebar">
                    {sidebar &&
                        sidebar.map((item, index) => {
                            if (item.href === urlParts) {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => item.onClick()}
                                        className="w-100"
                                    >
                                        <Link
                                            style={sidebarItemFocus}
                                            className="d-block border-radius"
                                            href={item.href}
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                );
                            } else if (urlParts.includes("[id]") && item.href.includes('orders')) {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => item.onClick()}
                                        className="w-100"
                                    >
                                        <Link
                                            style={sidebarItemFocus}
                                            className="d-block border-radius"
                                            href={item.href}
                                        >
                                            {item.text}
                                        </Link>
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => item.onClick()}
                                        className="w-100"
                                    >
                                        <Link className="d-block border-radius" href={item.href}>
                                            {item.text}
                                        </Link>
                                    </li>
                                );
                            }
                        })}
                </ul>
            </div>
        </div>
    )
}

export default AccountSidebar