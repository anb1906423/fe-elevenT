import React, { useState, useEffect } from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackData = [
    {
        rate: 5,
        userName: "abcdfgh",
        productColour: "Xanh nhạt",
        productSize: "L",
        content: "Đúng với mô tả:đúng Hàng đẹp dùng được. Chất mát, đúng size. Ủng hộ chục cái vậy. Ảnh video minh hoạ.",
    },
    {
        rate: 5,
        userName: "abcdfgh",
        productColour: "Xanh nhạt",
        productSize: "L",
        content: "Đúng với mô tả:đúng Hàng đẹp dùng được. Chất mát, đúng size. Ủng hộ chục cái vậy. Ảnh video minh hoạ.",
    },
    {
        rate: 5,
        userName: "abcdfgh",
        productColour: "Xanh nhạt",
        productSize: "L",
        content: "Đúng với mô tả:đúng Hàng đẹp dùng được. Chất mát, đúng size. Ủng hộ chục cái vậy. Ảnh video minh hoạ.",
    },
    {
        rate: 5,
        userName: "abcdfgh",
        productColour: "Xanh nhạt",
        productSize: "L",
        content: "Đúng với mô tả:đúng Hàng đẹp dùng được. Chất mát, đúng size. Ủng hộ chục cái vậy. Ảnh video minh hoạ.",
    },
    {
        rate: 5,
        userName: "abcdfgh",
        productColour: "Xanh nhạt",
        productSize: "L",
        content: "Đúng với mô tả:đúng Hàng đẹp dùng được. Chất mát, đúng size. Ủng hộ chục cái vậy. Ảnh video minh hoạ.",
    },
]

const FeedbackBox = (props) => {
    const [feedbackList, setFeedbackList] = useState([])

    useEffect(() => {
        setFeedbackList(FeedbackData)
    }, [FeedbackData])

    // id sản phẩm trong api được truyên từ props

    return (
        <div className="feedback-box row">
            {
                feedbackList && feedbackList.map((item, index) => {
                    return (
                        <FeedbackItem
                            key={index}
                            rate={item.rate}
                            userName={item.userName}
                            productColour={item.productColour}
                            productSize={item.productSize}
                            content={item.content}
                        />
                    )
                })
            }
        </div>
    )
}

export default FeedbackBox