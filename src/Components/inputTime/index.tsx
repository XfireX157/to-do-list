import React from "react"
import * as C from './style'
import { IProps } from "./Types/IProps"

export const InputTime: React.FC <IProps> = ({id, name, min, max, step, backgroundColor, placeHolderColor, textColor}) => {
    return(
        <C.Input 
            type="time"
            step={step}
            id={id}
            name={name}
            min={min}
            max={max}
            backgroundColor={backgroundColor}
            placeHolderColor={placeHolderColor}
            textColor={textColor}
            required
        />        
    )
}