import React, { useEffect, useState } from 'react'
import ProductItem from '@/components/ProductItem'
import axios from 'axios'
const Products = [
    {
        img: 'https://media.coolmate.me/cdn-cgi/image/width=270,height=306,quality=80,format=auto/uploads/January2023/_MG_2822_3.jpg',
        name: 'Áo thun ElevenT based 2023 đẹp nhất thế giới',
        realPrice: '189.000',
        priceAfter: '154.000',
        discount: '-20',
        id: '1'
    },
    {
        img: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/April2022/1white_copy.jpg',
        name: 'Áo thun ElevenT',
        realPrice: '189.000',
        priceAfter: '154.000',
        discount: '-20',
        id: '2'
    },
    {
        img: 'https://media.coolmate.me/cdn-cgi/image/width=672,height=990,quality=85,format=auto/uploads/December2022/200gsm6.jpg',
        name: 'Áo thun ElevenT',
        realPrice: '189.000',
        priceAfter: '154.000',
        discount: '-20',
        id: '1'
    },
    {
        img: 'https://media.coolmate.me/cdn-cgi/image/width=270,height=306,quality=80,format=auto/uploads/January2023/_MG_2822_3.jpg',
        name: 'Áo thun ElevenT',
        realPrice: '189.000',
        priceAfter: '154.000',
        discount: '-20',
        id: '2'
    },
    {
        img: 'https://media.coolmate.me/cdn-cgi/image/width=270,height=306,quality=80,format=auto/uploads/January2023/_MG_2822_3.jpg',
        name: 'Áo thun ElevenT',
        realPrice: '189.000',
        priceAfter: '154.000',
        discount: '-20',
        id: '1'
    },
    {
        img: 'https://media.coolmate.me/cdn-cgi/image/width=270,height=306,quality=80,format=auto/uploads/January2023/_MG_2822_3.jpg',
        name: 'Áo thun ElevenT',
        realPrice: '189.000',
        priceAfter: '154.000',
        discount: '-20',
        id: '2'
    },
]
const Product = () => {
    const [listProductVariant, setListProductVariant] = useState([])
    const sizes = ['I', 'J', 'K', 'L', 'S', 'D', 'E', 'F']
    useEffect(() => {
        const getListProductVariant = async () => {
            const result = await axios.get('http://localhost:8080/api/product/customer/list')
            console.log(result.data)
            setListProductVariant(result.data)
        }
        getListProductVariant()
    }, [])

    return (
        <div className="product-page">
            <div className="product-box d-flex flex-row flex-wrap justify-content-start">
                {
                    listProductVariant && listProductVariant.map((product, index) => {
                        return (
                            <ProductItem
                                key={index}
                                product_id={product.product_id}
                                img={product.product_image}
                                name={product.product_name}
                                realPrice={product.realPrice}
                                priceAfter={product.price}
                                discount={product.discount}
                                sizes={product.sizes}
                                rating={product.rating}
                                colour_id={product.colour_id}
                                feedback_quantity={product.feedback_quantity}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product