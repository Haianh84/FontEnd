import React from "react";
// import {Input} from 'antd'
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
    // const [valueInput] = useState('')
    const handleOnchangeInput = (e) => {
        props.onChange(e.target.value)
    }
    const { placeholder ='Nhập text', ...rests} = props
    return (
            <WrapperInputStyle placeholder={placeholder} value=  {props.value}  {...rests} onChange={handleOnchangeInput}/>   
    )
}

export default InputForm