import React from "react"
import * as C from './style'
import { IPropsButton } from "./Types/props"

export const Button: React.FC <IPropsButton> = ({backgroundColor, children, txtColor, ...rest}) => {
    return(
        <C.Btn  backgroundColor={backgroundColor} txtColor={txtColor} {...rest}>
           {children}
        </C.Btn>
    )
}