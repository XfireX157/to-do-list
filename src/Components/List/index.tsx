import { ITasks } from '../../Shared/Types/Tasks'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import * as C from './style'

interface Props {
    tasks: ITasks[],
    isActive?: boolean | undefined
    setIsActive?:  any
    onClick?: React.MouseEventHandler<HTMLDivElement>
    remove: (tasksName: any) => void
    edit: (id: any) => void
}

const List = ({tasks, isActive, setIsActive, remove, edit}: Props) => {

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
                        key={item.id}
                        isActive={isActive === item.task ? true : false}
                        className="item"
                        onClick={() => {
                        selectFiltered(item)
                        }}>
                            <h3>{item.task}</h3>
                                 <span>{item.time}</span>
                            <div>
                                <span onClick={() => remove(item.task)}><BsFillTrashFill/></span>
                                <span onClick={() => edit(item.task)}><AiFillEdit/></span>
                            </div>
                 </C.ListLi>
                ))}
               

            </ul>
        </C.ListTasks>
    )
}

export default List