import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import OptionButton from './OptionButton'
import { CloseOutlined } from '@ant-design/icons'
import { handleRemoveItem } from '@/store/actions/cartActions'

const CartItem = (props) => {

    const router = useRouter()
    const { product_id, colour } = router.query
    const dispatch = useDispatch()
    const isErrorInCart = useSelector((state) => state.cart.isError)
    const messageErrorInCart = useSelector((state) => state.cart.messageError)

    const [productName, setProductName] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [feedbackQuantity, setFeedbackQuantity] = useState('')
    const [rating, setRating] = useState('')
    const [sold, setSold] = useState('')

    const [colorList, setColorList] = useState([]);
    const [selectedColorIndex, setSelectedColorIndex] = useState(null);
    const [sizeList, setSizeList] = useState([]);
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);

    const [productVariantId, setProductVariantId] = useState('')
    const [inventory, setInventory] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState('0')
    const [product_image, setProduct_Image] = useState([]);

    useEffect(() => {
        const handleGetProduct = async () => {
            try {
                let respond = await axios.get(backendAPI + `/api/product/customer/detail/${product_id}`);
                setProductName(respond.data.product_name);
                setProductDescription(respond.data.description);
                setFeedbackQuantity(respond.data.feedback_quantity);
                setRating(respond.data.rating);
                setSold(respond.data.sold);

                respond = await axios.get(backendAPI + `/api/product/customer/list-colour/${product_id}`);
                setColorList(respond.data);
                setSelectedColorIndex(0);
                for (let index in respond.data) {
                    if (respond.data[index].colour_id == colour)
                        setSelectedColorIndex(parseInt(index));
                }
            } catch (error) {
                console.log(error);
                setColorList(fakeColourList);
                setSelectedColorIndex(0);
            }
        }
        if (product_id !== undefined) {
            handleGetProduct();
        }
    }, [product_id])

    useEffect(() => {
        const handleGetListColour = async () => {
            try {
                let respond = await axios.get(backendAPI + '/api/product/customer/list-size'
                    + '/' + product_id
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
        if (selectedColorIndex !== null) {
            handleGetListColour();
        }
    }, [selectedColorIndex]);
    return (
        <div className="cart-item">
            <div className="row">

                <div className="col-4">
                    <div className="box-img position-relative border-radius">
                        <img className="border-radius" src={props.image} alt="" />
                        <div className="position-absolute product-quantity">
                            {props.quantity}
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="cart-item-info position-relative">
                        <div className="product-name">
                            <p className="fw-bold">
                                {props.name}
                            </p>
                        </div>
                        <CloseOutlined
                            className="cart-item-remove position-absolute"
                        // onClick={() => dispatch(handleRemoveItem())}
                        />
                        <div className="orther-info">
                            <p>{`${props.colour} / ${props.size}`}</p>
                        </div>
                    </div>
                    <div className="cart-item-action">
                        <div className="colour-option-box">
                            <strong>
                                {colorList[selectedColorIndex] ? colorList[selectedColorIndex].colour_name : ''}
                            </strong>
                            <div>
                                {colorList &&
                                    colorList.map((colour, index) => {
                                        return (
                                            <OptionButton
                                                getContent={() => {
                                                    setSelectedColorIndex(index)
                                                    router.push(`http://localhost:3000/san-pham/${product_id}?colour=${colour.colour_id}`)
                                                }}
                                                content={colour.colour_name}
                                                key={index}
                                                isSelected={selectedColorIndex === index}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                        <div className="size-option-box">
                            <strong>
                                {sizeList[selectedSizeIndex] ? sizeList[selectedSizeIndex].size_name : ''}
                            </strong>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem