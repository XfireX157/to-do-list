import { useState } from 'react';
import  Form  from '../../Components/Form';
import List from '../../Components/List';
import { Stopwatch } from '../../Components/stopwatch';
import { ITasks } from '../../Shared/Types/Tasks';
import {IFormProps} from '../../Components/Form'

import * as C from './style'

function Home() {
 
 
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [task, setTask] = useState('')
  const [time, setTime] = useState('00:00')
  const [editTask, setEditTask] = useState(null)
  const [isActive, setIsActive] = useState<any>(null)

  const newList = (list: any) => {
      setTasks([...tasks, list])
  }

  const remove = (tasksName: string) => {
    setTasks(tasks.filter(item => item.task !== tasksName))
  }

   const Edit = (id: any) => { 
      const findTask: any = tasks.find((item) => item.task === id)
      setEditTask(findTask)
    }

  return (
   <C.AppStyle>
    <Form
      time={time}
      setTime={setTime}  
      task={task} 
      setTask={setTask}   
      setTasks={(list: any) => newList(list)} />
      <List 
        tasks={tasks}
        isActive={isActive} setIsActive={setIsActive}
        remove={remove}
        edit={Edit}
      />   
    <Stopwatch/>
   </C.AppStyle>
  );
}

export default Home;
