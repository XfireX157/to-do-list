import React from "react"
import * as C from './style'
import { IProps } from "./Types/IProps"

export const InputTime: React.FC <IProps> = ({ backgroundColor, placeHolderColor, textColor, ...rest}) => {
    return(
        <C.Input 
            backgroundColor={backgroundColor}
            placeHolderColor={placeHolderColor}
            textColor={textColor}
            required
            {...rest}
        />        
    )
}