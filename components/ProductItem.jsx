import React from 'react'
import { StarFilled } from '@ant-design/icons'

const ProductItem = (props) => {
    return (
        <div className='product-item'>
            <a href={props.id}>
                <div className="position-relative img-box">
                    <img className='img' src={props.img} alt="" />
                    <div className="position-absolute rate-box">
                        <span className='d-flex justify-content-start align-items-center'>
                            <span>
                                {
                                    props.rating
                                }
                            </span>
                                <StarFilled />
                            <span className='feedback_quantity text-primary'>
                                ({
                                    props.feedback_quantity
                                })
                            </span>
                        </span>
                    </div>
                    <div className="size-box position-absolute">
                        {
                            props.sizes.map((item, index) => {
                                return (
                                    <span className="size-item d-inline-block text-center" key={index}>{item}</span>
                                )
                            })
                        }
                    </div>
                </div>
            </a>
            <div className="infor-product">
                <a href={props.id}>
                    <h6>{props.name}</h6>
                </a>
                <div className='d-flex justify-content-start'>
                    <p className='price-after text-danger fw-bold'>{props.priceAfter}đ</p>
                    {/* <s className='real-price fw-bold'>{props.realPrice}đ</s> */}
                    {/* <p className='discount text-danger fw-bold'>{props.discount}%</p> */}
                </div>
            </div>
        </div>
    )
}

export default ProductItem