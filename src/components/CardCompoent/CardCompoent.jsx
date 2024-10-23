import React from "react";
//import  Meta from "antd/lib/card/Meta";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from "./style";
import { StarFilled } from '@ant-design/icons'
import logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router";
import { convertPrice } from "../../utils";


const CardCompoent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '100px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
            onClick={() => handleDetailsProduct(id)}
        >
            <img src={logo} alt="Logo" style={{ width: '68px', height: '14px', position: 'absolute', top: -1, left: -1, borderTopLeftRadius: '3px' }} />
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReporText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating}</span><StarFilled style={{ fontSize: '10px', color: 'yellow' }} />
                </span>
                <WrapperStyleTextSell>| Đã bán {selled || 1000}+</WrapperStyleTextSell>
            </WrapperReporText>
            <WrapperPriceText>
                {convertPrice(price)}
                <WrapperDiscountText>- {discount || 5} %</WrapperDiscountText></WrapperPriceText>
        </WrapperCardStyle>
    )
}

export default CardCompoent