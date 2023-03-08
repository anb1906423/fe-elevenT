import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import CarouselFade from '@/components/Carousel'
import { Rate } from 'antd';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons'
import axios from 'axios'

import { backendAPI } from '@/config'
import { policyList } from '@/data/PolicyData'
import PolicyItem from '@/components/PolicyItem'
import OptionButton from '@/components/OptionButton'

const fakeColourList = [ { colour_id: 1, colour_name: 'Trắng' }, { colour_id: 2, colour_name: 'Đen' } ];
const fakeSizeList = [ { size_id: 1, size_name: 'S' }, { size_id: 2, size_name: 'M' }, { size_id: 3, size_name: 'L' } ];
const fake_product_image = [
  'https://media.coolmate.me/cdn-cgi/image/quality=80/image/September2022/untitled-5_32.jpg',
  'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/November2021/1426x2100_(3).jpg',
  'https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/September2022/DSC04797-copy-1.jpg',
];

const ProductDetail = () => {

  const countProduct = useSelector(state => state.counterProduct);
  const dispatch = useDispatch()
  const router = useRouter()
  const [productIdFromParams, setProductIdFromParams] = useState('1');
  const [colourIdFromParams, setColourIdFromParams] = useState('1');

  const [productId, setProductId] = useState('')
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [feedbackQuantity, setFeedbackQuantity] = useState('')
  const [rating, setRating] = useState('')
  const [sold, setSold] = useState('')

  const [colorList, setColorList] = useState([]);
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [sizeList, setSizeList] = useState([]);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);

  const [price, setPrice] = useState('189.000')
  const [product_image, setProduct_Image] = useState([]);


  // const colourButtonRef = useRef(null);
  // const sizeButtonRef = useRef(null);

  // useEffect(() => {
  //   if (colourButtonRef.current) {
  //     colourButtonRef.current.querySelector('.option-button').focus();
  //   }
  //   if (sizeButtonRef.current) {
  //     sizeButtonRef.current.querySelector('.option-button').focus();
  //   }
  // }, [sizeList, colorList]);

  useEffect(() => {
    const handleGetProduct = async () => {
      try {
        let respond = await axios.get(backendAPI + `/api/product/customer/detail/${productIdFromParams}`);
        setProductId(respond.data.product_id);
        setProductName(respond.data.product_name);
        setProductDescription(respond.data.description);
        setFeedbackQuantity(respond.data.feedback_quantity);
        setRating(respond.data.rating);
        setSold(respond.data.sold);

        respond = await axios.get(backendAPI + `/api/product/customer/list-colour/${productIdFromParams}`);
        setColorList(respond.data);
        setSelectedColorIndex(0);
      } catch (error) {
        console.log(error);
        setColorList(fakeColourList);
        setSelectedColorIndex(0);
      }
    }
    handleGetProduct();
  }, [])

  useEffect(() => {
    const handleGetListColour = async () => {
      try {
        let respond = await axios.get(backendAPI + '/api/product/customer/list-size'
          + '/' + productIdFromParams
          + '/' + colorList[selectedColorIndex].colour_id
        );
        setSizeList(respond.data);
        setSelectedSizeIndex(0);
      } catch (error) {
        console.log(error);
        setSizeList(fakeSizeList);
        setSelectedSizeIndex(0);
      }
    }
    if(selectedColorIndex !== null) {
      handleGetListColour();
    }
  }, [selectedColorIndex]);

  useEffect(() => {
    const handleGetProductVariant = async () => {
      try {
        let respond = await axios.get(backendAPI + '/api/product-variant/customer/detail'
          + '/' + productIdFromParams
          + '/' + colorList[selectedColorIndex].colour_id
          + '/' + sizeList[selectedSizeIndex].size_id
        );
        setProduct_Image(respond.data.product_images);
      } catch (error) {
        console.log(error);
        setProduct_Image(fake_product_image);
      }
    }
    if(selectedColorIndex !== null && selectedSizeIndex !== null) {
      handleGetProductVariant();
    }
  }, [selectedColorIndex ,selectedSizeIndex]);

  // useEffect(() => {
  //   console.log(router.query.product_id);
  //   console.log(selectedColor);
  // }, [productId, productName, selectedColor])

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
          <div className="price-box">
            <strong>{price}đ</strong>
          </div>
          <div className="colour-option-box">
            <span>Màu: 
              <strong>
                {colorList[selectedColorIndex] ? colorList[selectedColorIndex].colour_name: ''}
              </strong>
            </span>
            <div>
              {colorList &&
                colorList.map((colour, index) => {
                  return (
                    <OptionButton
                      getContent={() => setSelectedColorIndex(index)}
                      content={colour.colour_name}
                      key={index}
                      isSelected={selectedColorIndex === index}
                    />
                  );
                })}
            </div>
          </div>
          <div className="size-option-box">
            <span>Kích cỡ: 
              <strong>
                {sizeList[selectedSizeIndex] ? sizeList[selectedSizeIndex].size_name : ''}
              </strong>
            </span>
            <div>
              {sizeList &&
                sizeList.map((size, index) => {
                  return (
                    <OptionButton
                      getContent={() => setSelectedSizeIndex(index)}
                      content={size.size_name}
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
              <span>{countProduct != undefined ? countProduct : 0}</span>
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