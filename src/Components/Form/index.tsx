import React, { useState } from "react";

import { Button } from "../Button";
import { InputText } from "../inputText/index";
import { InputTime } from "../inputTime";

import * as C from './style'

export interface IFormProps {
    setTasks: Function
    task: any
    setTask:  React.Dispatch<React.SetStateAction<string>>
    time: any
    setTime: React.Dispatch<React.SetStateAction<string>>
    editTask: null
    setEditTask: React.Dispatch<React.SetStateAction<null>>
}

const Form = ({setTasks, task, setTask, time, setTime}: IFormProps) => {

    const [error, setError] = useState(false)

    const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(task.length <= 4 || task.length >= 14 || time === '00:00'){
            setError(true)
        }else{
            setError(false)
            setTasks( 
               {
                task,
                time
               })

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