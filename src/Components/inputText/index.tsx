import React from "react"
import * as C from './styled'
import { IProps } from "./types/propsInput"


export const InputText: React.FC <IProps> = ({id, backgroundColor, textColor, placeholder, placeHolderColor, Change}) => {
    return(
            <C.Input
                type="text"
                id={id}
                placeholder={placeholder}
                textColor={textColor} 
                backgroundColor={backgroundColor} 
                placeHolderColor={placeHolderColor}
                onChange={Change}
                required
            />
    )
}