import React, { useEffect, useState } from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { CardWrapper, WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from "./style";
import SliderCompoent from "../../components/SliderCompoent/SliderCompoent";
import slider1 from "../../assets/images/slider1.webp"
import slider2 from "../../assets/images/slider2.webp"
import slider3 from "../../assets/images/slider3.webp"
import CardCompoent from "../../components/CardCompoent/CardCompoent";
//import NavBarCompoent from "../../components/NavBarCompoent/NavBarCompoent";
//import ButtonCompoent from "../../components/ButtonCompoent/ButtonCompoent";
import * as ProductService from '../../services/ProductService'
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import Loading from "../../components/LoadingCompoent/Loading";
import { useDebounce } from "../../hooks/useDebounce";
import FooterCompoent from "../../components/Footer Compoent/FooterCompoent";

const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 1000)
    const [pending, setPending] = useState(false)
    const [limit, setLimit] = useState(6)
    const [typeProducts, setTypeProducts] = useState([])
    const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1]
        const search = context?.queryKey && context?.queryKey[2]
        const res = await ProductService.getAllProduct(search, limit)
        return res
    }


    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }
    const { isPending, data: products, isPreviousData } = useQuery({ queryKey: ['products', limit, searchDebounce], queryFn: fetchProductAll, restry: 3, restryDelay: 1000, keepPreviousData: true })

    useEffect(() => {
        fetchAllTypeProduct()
    }, [])
    return (
        <Loading isPending={isPending || pending}>
            <div style={{ padding: '0 120px' }}>
                <WrapperTypeProduct>
                    {typeProducts.map((item) => {
                        return (
                            <TypeProduct name={item} key={item} />
                        )
                    })}
                </WrapperTypeProduct>
            </div>
            <div id="container" style={{ backgroundColor: '#efefef', padding: '0 120px', height: '1000px' }}>
                <SliderCompoent arrImages={[slider1, slider2, slider3]} />
                <WrapperProducts>
                    {products?.data?.map((product) => {
                        return (
                            <CardWrapper key={product._id}>
                                <CardCompoent
                                    key={product._id}
                                    countInStock={product.countInStock}
                                    description={product.description}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    rating={product.rating}
                                    type={product.type}
                                    selled={product.selled}
                                    discount={product.discount}
                                    id={product._id}
                                />
                            </CardWrapper>
                        )
                    })}
                </WrapperProducts>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    <WrapperButtonMore
                        textButton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                            border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : 'rgb(13, 92, 182)'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : 'rgb(13, 92, 182)'}`,
                            width: '240px', height: '38px', borderRadius: '4px'
                        }}
                        disabled={products?.total === products?.data?.length || products?.totalPage === 1}
                        styleTextButton={{ fontWeigh: 500, color: products?.total === products?.data?.length && '#fff' }}
                        onClick={() => setLimit((prev) => prev + 6)}
                    />
                </div>
            </div>
            <div>
                <FooterCompoent />
            </div>
        </Loading>
    )
}

export default HomePage