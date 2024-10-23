import React from "react";
import HeaderCompoent from "../HeaderCompoent/HeaderCompoent";


const DefaultCompoent = ({children}) => {
    return (
        <div>
            <HeaderCompoent />
            {children}
        </div>
    )
}

export default DefaultCompoent