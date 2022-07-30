import { ITasks } from '../../Shared/Types/Tasks'
import * as C from './style'

interface Props {
    tasks: ITasks[]
    selectedTasks: (tasksSelect: ITasks) => void
}

const List = ({tasks, selectedTasks}: Props, { task, time, selection, complet, id}: ITasks) => {

    return(
        <C.ListTasks>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                 <li 
                 className={`item ${selection ? "itemSelecionado" : ""}`}
                 key={item.id} 
                 onClick={() => selectedTasks(
                    {
                        task, 
                        time, 
                        selection, 
                        complet, 
                        id
                 })}
                 >
                     <h3>{item.task}</h3>
                     <span>{item.time}</span>
                 </li>
                ))}
            </ul>
        </C.ListTasks>
    )
}

export default List