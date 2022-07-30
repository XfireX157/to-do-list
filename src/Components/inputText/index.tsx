import React from "react"
import * as C from './styled'
import { IProps } from "./types/propsInput"


export const InputText: React.FC <IProps> = ({
    backgroundColor, 
    textColor, 
    placeHolderColor, 
    onChange, 
    value, ...rest}) => {
    return(
            <C.Input
                textColor={textColor} 
                backgroundColor={backgroundColor} 
                placeHolderColor={placeHolderColor}
                onChange={onChange}
                value={value}
                {...rest}
            />
    )
}