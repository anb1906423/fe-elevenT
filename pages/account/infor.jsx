import React from 'react'
import Head from 'next/head'
import AccountSidebar from '@/components/AccountSidebar'
import Input from '@/components/Input'

const AccountInfor = () => {
    return (
        <div className="account-infor row">
            <Head>
                <title>Tài khoản của bạn</title>
            </Head>
            <div className="col-4">
                <AccountSidebar />
            </div>
            <div className="col-8">
                <div className="infor-tab">
                    <div className="title-div">
                        <h3 className="title">
                            Thông tin tài khoản
                        </h3>
                    </div>
                    <div className="infor-tab-item col-12 row d-flex align-items-center">
                        <div className="col-3">Họ tên</div>
                        <div className="col-7">
                            <Input
                                type="text"
                                placeholder='Họ và tên của bạn'
                            />
                        </div>
                    </div>
                    <div className="infor-tab-item col-12 row d-flex align-items-center">
                        <div className="col-3">Email</div>
                        <div className="col-7">
                            <Input
                                type="email"
                                placeholder='Địa chỉ email'
                            />
                        </div>
                    </div>
                    <div className="infor-tab-item col-12 row d-flex align-items-center">
                        <div className="col-3">Số điện thoại</div>
                        <div className="col-7">
                            <Input
                                type="text"
                                placeholder='Số điện thoại'
                            />
                        </div>
                    </div>
                    <div className="infor-tab-item col-12 row d-flex align-items-center">
                        <div className="col-3">Địa chỉ</div>
                        <div className="col-7">
                            <Input
                                type="text"
                                placeholder='Địa chỉ (Ví dụ: 112/12 3/2 Hưng Lợi, Ninh Kiều)'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountInfor