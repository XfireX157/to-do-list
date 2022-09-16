import { ITasks } from '../../Shared/Types/Tasks'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import * as C from './style'

interface Props {
    tasks: ITasks[],
    setTasks:  React.Dispatch<React.SetStateAction<ITasks[]>>
    isActive?: boolean | undefined
    setIsActive?:  any
    setEditTask: React.Dispatch<React.SetStateAction<null>>
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const List = ({tasks, setTasks, isActive, setIsActive, setEditTask}: Props) => {

    function selectFiltered(item: ITasks) {
        if(isActive !== item.task){
            setIsActive(item.task)
        }else{
            setIsActive(null)
        }
    }

    const HandleRemove = (id: number) => {
        const setHandle = tasks.filter((item) => item.id !== id)
        setTasks(setHandle)
    }
  
    return(
        <C.ListTasks>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item: any, index: any) => (
                     <C.ListLi
                        key={index + item.id}
                        isActive={isActive === item.task ? true : false}
                        className="item"
                        onClick={() => {
                        selectFiltered(item)
                        }}>
                            <h3>{item.task}</h3>
                            <span>{item.time}</span>
                            <div>
                                <span onClick={() => HandleRemove(item.id)}><BsFillTrashFill/></span>
                                <span onClick={() => setEditTask({...item, index})}><AiFillEdit/></span>
                            </div>
                 </C.ListLi>
                ))}
               

            </ul>
        </C.ListTasks>
    )
}

export default List