import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { backendAPI } from '@/config'
import CarouselFade from '@/components/Carousel'
import { Rate } from 'antd';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import OptionButton from '@/components/OptionButton'
import { useDispatch, useSelector } from 'react-redux'
import PolicyItem from '@/components/PolicyItem'
import { policyList } from '@/data/PolicyData'

const colourList = ['Trắng', 'Đen', 'Xám', 'Đỏ dịu dàng']
const sizeList = ['L', 'M', 'XL']
const product_image = [
  'https://media.coolmate.me/cdn-cgi/image/quality=80/image/September2022/untitled-5_32.jpg',
  'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2021/1426x2100_(3).jpg',
  'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/DSC04797-copy-1.jpg',
]

const ProductDetail = () => {

  const countProduct = useSelector(state => state.counterProduct);
  const dispatch = useDispatch()
  const router = useRouter()
  const [productIdFromParams, setProductIdFromParams] = useState('')
  const [colourIdFromParams, setColourIdFromParams] = useState('')

  const [productId, setProductId] = useState('')
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [feedbackQuantity, setFeedbackQuantity] = useState('')
  const [rating, setRating] = useState('')
  const [sold, setSold] = useState('')

  const [price, setPrice] = useState('189.000')
  const [colorList, setColorList] = useState(colourList)
  const [selectedColor, setSelectedColor] = useState('Trắng')
  const [selectedSize, setSelectedSize] = useState('L')
  const [listImg, setListImg] = useState([])

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const colourButtonRef = useRef(null);
  const sizeButtonRef = useRef(null);

  useEffect(() => {
    if (colourButtonRef.current) {
      colourButtonRef.current.querySelector('.option-button').focus();
    }
    if (sizeButtonRef.current) {
      sizeButtonRef.current.querySelector('.option-button').focus();
    }
  }, [sizeList, colorList]);

  useEffect(() => {
    const handleGetProduct = async () => {
      try {
        const result = await axios.get(backendAPI + `/api/product/customer/detail/1`)

        setProductId(result.data.product_id)
        setProductName(result.data.product_name)
        setProductDescription(result.data.description)
        setFeedbackQuantity(result.data.feedback_quantity)
        setRating(result.data.rating)
        setSold(result.data.sold)

        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    }

    handleGetProduct()

  }, [])

  useEffect(() => {
    // console.log(productId);
    // console.log(productName);
    // console.log(productDescription);
    // console.log(feedbackQuantity);
    // console.log(sold, rating);
    console.log(router.query.product_id);
    console.log(selectedColor);
  }, [productId, productName, selectedColor])

  return (
    <div className='product-detail-page'>
      <div className="row main-infor-product">
        <div className="col-6">
          <CarouselFade product_image={product_image} />
        </div>
        <div className="col-6">
          <h6 className="product-name">{productName}</h6>
          <div className="rating d-flex align-items-end">
            <span>
              <Rate disabled allowHalf defaultValue={rating} />
              <h6 className='d-inline-block'>({feedbackQuantity})</h6>
            </span>
            <span>Đã bán (web): {sold}</span>
          </div>
          <div className="colour-option-box">
            <span>Màu: <strong>{colorList[selectedColorIndex]}</strong></span>
            <div ref={colourButtonRef}>
              {colorList &&
                colorList.map((item, index) => {
                  return (
                    <OptionButton
                      getContent={() => setSelectedColorIndex(index)}
                      content={item}
                      key={index}
                      isSelected={selectedColorIndex === index}
                    />
                  );
                })}
            </div>
          </div>
          <div className="size-option-box">
            <span>Kích cỡ: <strong>{sizeList[selectedSizeIndex]}</strong></span>
            <div ref={sizeButtonRef}>
              {sizeList &&
                sizeList.map((item, index) => {
                  return (
                    <OptionButton
                      getContent={() => setSelectedSizeIndex(index)}
                      content={item}
                      key={index}
                      isSelected={selectedSizeIndex === index}
                    />
                  );
                })}
            </div>
          </div>
          <div className="action-box row">
            <div className="fw-bold quantity-button col-3 d-flex justify-content-around align-items-center">
              <PlusOutlined />
              <span>1</span>
              <MinusOutlined />
            </div>
            <div className="add-product-to-cart-button col-7 d-flex justify-content-around align-items-center">
              Thêm vào giỏ hàng
            </div>
          </div>
          <div className="policy-box d-flex flex-wrap justify-content-around position-relative">
            {
              policyList && policyList.map((item, index) => {
                return (
                  <PolicyItem key={index} icon={item.icon} des={item.des}/>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="row product-detail">
        <div className="col-12">
          <h5 className='text-center'>Chi tiết sản phẩm</h5>
        </div>
      </div>
      <div className="review-box position-relative d-flex align-items-center">
        <div className="">
          <h5 className='feedback_quantify-detail d-inline-block'>{feedbackQuantity} Đánh giá</h5>
          <h5 className='rating-detail d-inline-block'>{rating} / 5 ⭐</h5>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail