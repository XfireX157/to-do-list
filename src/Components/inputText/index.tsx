import React from "react"
import * as C from './styled'
import { IProps } from "./types/propsInput"


export const InputText: React.FC <IProps> = ({textColor, backgroundColor, placeholder, id}) => {
    return(
            <C.Input
                type="text"
                id={id}
                placeholder={placeholder}
                textColor={textColor} 
                backgroundColor={backgroundColor} 
                required
            />
    )
}