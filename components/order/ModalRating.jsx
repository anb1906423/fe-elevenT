import React, { useState } from 'react'
import { Modal, Rate, Input } from 'antd'
const { TextArea } = Input

const ModalRating = (props) => {
    const [rate, setRate] = useState(0)
    const [content, setContent] = useState('')

    return (
        <Modal
            className='modal-rating'
            open={props.isModalOpen}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
        >
            <div className="modal-head">
                <h5 className="text-center">Đánh giá của bạn</h5>
            </div>
            <div className="modal-body">
                <div className="d-flex align-items-center">
                    <label>Đánh giá: </label>
                    <div className='rating-box'>
                        <Rate
                            allowHalf
                            defaultValue={rate}
                            onChange={(e) => setRate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="content">Bình luận: </label>
                    <div className="content-box">
                        <TextArea
                            value={content}
                            id="content"
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Bình luận"
                            autoSize={{
                                minRows: 3,
                                maxRows: 5,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="modal-foot">
                <div className="rate-btn border-radius bg-dark text-light text-center">
                    Đánh giá
                </div>
            </div>
        </Modal>
    )
}

export default ModalRating