import React from "react";
import {Button} from 'antd'
const ButtonCompoent = ({ size, styleButton, styleTextButton, textButton, disabled, ...rests}) => {
    return (
        <Button
                style={{
                    ...styleButton,
                    background: disabled ? '#ccc' : styleButton.background
                }}
                size={size}
                {...rests}
                // icon={<SearchOutlined color= {colorButton} style={{color: '#fff'}} />}
            >
                <span style={styleTextButton}>{textButton}</span>
        </Button>
    )
}

export default ButtonCompoent