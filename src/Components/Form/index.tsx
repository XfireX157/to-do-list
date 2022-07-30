import React, { useState } from "react";
import { Button } from "../Button";
import { InputText } from "../inputText/index";
import { InputTime } from "../inputTime";
import { v4 as uuidv4} from 'uuid'

import * as C from './style'

interface IFormProps {
    setTasks: Function
}

const Form = ({setTasks}: IFormProps) => {

    const [task, setTask] = useState('')
    const [time, setTime] = useState('00:00')
    const [error, setError] = useState(false)

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(task.length < 4 || time === '00:00'){
            setError(true)
        }else{
            setError(false)
            setTasks((preve: any) => [...preve, 
                {
                    task, 
                    time, 
                    selection: false, 
                    complet: false,
                    id: uuidv4()
                }
            ])

            setTask('')
            setTime('00:00')
        }
           
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
                value={task}   
                onChange={e => setTask(e.target.value)}
                />
                {error ? (
                    <p>Campo invalido</p>
                ): (
                    <></>
                )
                }
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
                {error ? (
                    <p>Campo invalido</p>
                ): (<></>)}
            </C.InputContainer>
            <Button type="submit" backgroundColor="#88bcd1" txtColor="#272626"> Criar card</Button>
        </C.NewTask>
    )
}

export default Form