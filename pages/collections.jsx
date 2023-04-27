import React, { useEffect, useState } from 'react'
import ProductItem from '@/components/ProductItem'
import axios from 'axios'

import { backendAPI } from '@/config'

const CollectionPage = () => {
    const [productList, setProductList] = useState([])
    useEffect(() => {
        const getProductList = async () => {
            const result = await axios.get(`${backendAPI}/api/product/customer/list`)
            setProductList(result.data)
        }
        getProductList()
    }, [])

    return (
        <div className="product-page">
            <div className="product-box d-flex flex-row flex-wrap justify-content-start">
                {
                    productList && productList.map((product, index) => {
                        return (
                            <ProductItem
                                key={index}
                                product_id={product.product_id}
                                name={product.product_name}
                                img={product.product_image}
                                price={product.price}
                                colour_id={product.colour_id}
                                sizes={product.sizes}
                                rating={product.rating}
                                feedback_quantity={product.feedback_quantity}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionPage