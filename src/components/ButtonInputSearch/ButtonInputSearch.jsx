import React from "react";
// import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import InputCompoent from "../InputCompoent/InputCompoent";
import ButtonCompoent from "../ButtonCompoent/ButtonCompoent";


const ButtonInputSearch = (props) => {
    const { size, placeholder, textButton, bordered, backgroundColorInput = '#fff', backgroundColorButton = 'rgb(13, 92, 182)', colorButton = '#ff' } = props
    return (
        <div style={{ display: 'flex' }}>
            <InputCompoent
                size={size}
                placeholder={placeholder}
                style={{ backgroundColor: backgroundColorInput }}
                {...props}
            />
            <ButtonCompoent
                size={size}
                styleButton={{ background: backgroundColorButton, border: !bordered && 'none' }}
                icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}
            />
        </div>
    )
}

export default ButtonInputSearch