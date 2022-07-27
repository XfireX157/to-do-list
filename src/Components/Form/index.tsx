import React, { useState } from "react";
import { Button } from "../Button";
import { InputText } from "../inputText/index";
import { InputTime } from "../inputTime";

import * as C from './style'

const Form = () => {

    const [tasks, setTasks] = useState('')
    const [time, setTime] = useState('00:00')

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log('state: ', tasks, time)
    }

    return(
        <C.NewTask onSubmit={handleChange}>
            <C.InputContainer>
                <label htmlFor="assignment">
                    Adicione um novo estudo
                </label>
                
                <InputText
                type="text"
                id="assignment"
                name="assignment"
                placeholder="Campo"
                textColor='#fff' 
                backgroundColor="#5D677C"
                placeHolderColor="#ccc"
                value={tasks}   
                onChange={e => setTasks(e.target.value)}
                />
            </C.InputContainer>
            <C.InputContainer>
                <label htmlFor="time">
                    Tempo 
                </label>
                <InputTime   
                    type="time"         
                    id="time"
                    name="time"
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    backgroundColor="#5D677C"
                    textColor="#fff"
                    placeHolderColor="#ccc"
                />
            </C.InputContainer>
            <Button type="submit" backgroundColor="#88bcd1" txtColor="#272626"> Criar card</Button>
        </C.NewTask>
    )
}

export default Form