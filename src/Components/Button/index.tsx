import React from "react"
import * as C from './style'
import {IProps} from './Types/props'

export const Button: React.FC <IProps> = ({backgroundColor, children, txtColor}) => {
    return(
        <C.Btn backgroundColor={backgroundColor} txtColor={txtColor}>
            {children}
        </C.Btn>
    )
}