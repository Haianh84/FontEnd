import React from "react";
import ProductDetailsCompoent from "../../components/ProductDetailsCompoent/ProductDetailsCompoent";
import { useNavigate, useParams } from "react-router";

const ProductDetailsPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    return (
        <div style={{ width: '100%', padding: '0 120px', background: '#efefef', height: '1000px' }}>
            <div style={{ width: '1270px', height: '100%', margin: '0 auto' }} >
                <h5><span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span> - Chi tiết sản phẩm</h5>
                <ProductDetailsCompoent idProduct={id} />
            </div>
        </div>
    )
}

export default ProductDetailsPage