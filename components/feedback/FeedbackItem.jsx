import React from 'react'
import { Rate } from 'antd'

const FeedbackItem = (props) => {
    return (
        <div className="feedback-item col-6">
            <div className="d-inline-block line-feedback">
                <div className="row">
                    <div className="col-3">
                        <Rate
                            allowHalf
                            disabled={true}
                            defaultValue={props.rate}
                        />
                    </div>
                    <div className="col-9" style={{ paddingTop: "8px" }}>
                        <div className='d-flex align-items-start flex-column'>
                            <p className="fw-bold feedback-user-name">
                                {props.userName}
                            </p>
                            <p className='feedback-colour'>
                                {`${props.productColour} / ${props.productSize}`}
                            </p>
                            <p className='mt-auto feedback-content align-self-end'>
                                {props.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackItem