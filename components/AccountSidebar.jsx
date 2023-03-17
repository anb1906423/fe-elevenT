import React from 'react'
import { sidebar } from '@/data/AccountInforData'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AccountSidebar = () => {
    const router = useRouter()
    const urlParts = router.pathname;

    const sidebarItemFocus = {
        backgroundColor: "#000",
        color: "#fff",
    }

    return (
        <div className="account-sidebar">
            <div className="title-div">
                <h3 className="title">
                    Fullname {/* Lấy tên user từ store */}
                </h3>
            </div>
            <div className="sidebar-div">
                <ul className="sidebar">
                    {
                        sidebar && sidebar.map((item, index) => {
                            if (item.href == urlParts) {
                                return (
                                    <li key={index} onClick={() => item.onClick()} className='w-100'><Link style={sidebarItemFocus} className='d-block border-radius' href={item.href}>{item.text}</Link></li>
                                )
                            } else return (
                                <li key={index} onClick={() => item.onClick()} className='w-100'><Link className='d-block border-radius' href={item.href}>{item.text}</Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default AccountSidebar