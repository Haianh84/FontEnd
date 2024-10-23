import React, { useEffect, useState } from "react";
import { WrapperContent, WrapperLableText, WrapperTextValue } from "./style";
import * as ProductService from '../../services/ProductService'
import TypeProduct from "../TypeProduct/TypeProduct";
import FooterCompoent from "../../components/Footer Compoent/FooterCompoent";

const NavBarCompoent = () => {
    const onChange = () => { }
    const [typeProducts, setTypeProducts] = useState([])
    // const renderContent = (type, options) => {
    //     switch (type) {
    //         case 'text':
    //             return options.map((option) => {
    //                 return <WrapperTextValue>{option}</WrapperTextValue>
    //             })
    //         case 'checkbox':
    //             return (
    //                 <Checkbox.Group style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px' }} onChange={onChange}>
    //                     {options.map((option) => {
    //                         return (
    //                             <Checkbox style={{ marginLeft: 0 }} value={option.value}>{option.label}</Checkbox>
    //                         )
    //                     })}

    //                 </Checkbox.Group>
    //             )
    //         case 'star':
    //             return options.map((option) => {
    //                 return (
    //                     <div style={{ display: 'flex' }}>
    //                         <Rate style={{ fontSize: '12px' }} disabled defaultValue={option} />
    //                         <span>
    //                             {`tu ${option} sao`}
    //                         </span>
    //                     </div>
    //                 )
    //             })
    //         case 'price':
    //             return options.map((option) => {
    //                 return (
    //                     <div style={{ pading: '4px', coler: 'rgb(56, 56, 61)', borderRadius: '10px', backgroundColor: '#ccc', width: 'fit-content' }}>{option}</div>
    //                 )
    //             })
    //         default:
    //             return {}
    //     }
    // }

    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }

    useEffect(() => {
        fetchAllTypeProduct()
    }, [])
    return (
        <div>
            <WrapperLableText>Lable</WrapperLableText>
            <WrapperContent>
                <div>
                    <div>
                        {typeProducts.map((item) => {
                            return (
                                <TypeProduct name={item} key={item} />
                            )
                        })}
                    </div>
                </div>
            </WrapperContent>
        </div>
    )
}

export default NavBarCompoent