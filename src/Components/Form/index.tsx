import { useState } from "react";
import { Button } from "../Button";
import { InputText } from "../inputText/index";
import { InputTime } from "../inputTime";

import * as C from './style'

const [textInput, setTextInput] = useState()

const Form = () => {
    return(
        <C.NewTask onSubmit={(e) => e.preventDefault()}>
            <C.InputContainer>
                <label htmlFor="assignment">
                    Adicione um novo estudo
                </label>
                <InputText
                id="assignment"
                placeholder="campo"
                textColor='#fff' 
                backgroundColor="#5D677C"
                placeHolderColor="#ccc"
                value={textInput}
                />
            </C.InputContainer>
            <C.InputContainer>
                <label htmlFor="time">
                    Tempo 
                </label>
                <InputTime            
                    id="time"
                    name="time"
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                    backgroundColor="#5D677C"
                    textColor="#fff"
                    placeHolderColor="#ccc"
                />
            </C.InputContainer>
            <Button backgroundColor="#88bcd1" txtColor="#272626"> Criar card</Button>
        </C.NewTask>
    )
}

export default Form