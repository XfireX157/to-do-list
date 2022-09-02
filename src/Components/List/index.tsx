import { ITasks } from '../../Shared/Types/Tasks'
import React, {useState} from 'react'
import * as C from './style'

interface Props {
    tasks: ITasks[]
    isActive?: boolean | undefined
    setIsActive?:  any
}

const List = ({tasks, isActive, setIsActive}: Props) => {

    function selectFiltered(item: ITasks) {
        if(isActive !== item.task){
            setIsActive(item.task)
        }else{
            setIsActive(null)
        }
    }
  
    return(
        <C.ListTasks>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                <C.ListLi
                    isActive={isActive === item.task ? true : false}
                    className="item"
                    onClick={() => {
                    selectFiltered(item)
                 }}>
                     <h3>{item.task}</h3>
                     <span>{item.time}</span>
                 </C.ListLi>
                ))}
            </ul>
        </C.ListTasks>
    )
}

export default List