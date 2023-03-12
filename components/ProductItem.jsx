import React from 'react'
import { StarFilled } from '@ant-design/icons'
import { frontendAPI } from '@/config'
import Link from "next/link";

const ProductItem = (props) => {
    // const mergeId = (product_id, colour_id) = {
    //     return product_id + colour_id
    // }
    return (
        <div className='product-item'>
            <Link href={{ pathname: `${frontendAPI}/san-pham/${props.product_id}`, query: { colour: props.colour_id } }}>
                <div className="position-relative img-box">
                    <img className='img' src={props.img} alt="" />
                    <div className="position-absolute rate-box">
                        <span className='d-flex justify-content-start align-items-center'>
                            <span className='rating d-flex justify-content-start align-items-center'>
                                {
                                    props.rating
                                }
                            </span>
                            <StarFilled className='d-flex justify-content-start align-items-center' />
                            <span className='feedback_quantity text-primary d-flex justify-content-start align-items-center'>
                                ⟮
                                {
                                    props.feedback_quantity
                                }
                                ⟯
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
            </Link>
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