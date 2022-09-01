import { ITasks } from '../../Shared/Types/Tasks'
import * as C from './style'

interface Props {
    tasks: ITasks[]
}

const List = ({tasks}: Props) => {
    return(
        <C.ListTasks>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                 <li 
                 className="item"
                 key={index}>
                     <h3>{item.task}</h3>
                     <span>{item.time}</span>
                 </li>
                ))}
            </ul>
        </C.ListTasks>
    )
}

export default List