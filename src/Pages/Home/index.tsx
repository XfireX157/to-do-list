import { useState } from 'react';
import  Form  from '../../Components/Form';
import List from '../../Components/List';
import { Stopwatch } from '../../Components/stopwatch';
import { ITasks } from '../../Shared/Types/Tasks';  
import * as C from './style'

function Home() {
 
 
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [task, setTask] = useState<string | any>('')
  const [time, setTime] = useState('00:00')
  const [editTask, setEditTask] = useState<any>({index: -1, task: '', time: '00:00'})
  const [isActive, setIsActive] = useState<any>(null)

  const newList = (list: any) => {
      if(editTask.index >= 0 ){
        setTasks(tasks.map((item: any, index: any) => editTask.index === index ? list : item))
      }else{
        const idRandom = (num: number) => Math.floor(Math.random()* num)
        setTasks([...tasks,  {id: idRandom(9999999), task , time}])
      }
    
      setEditTask({index: -1, task: '', time: ''})
  }

  console.log(tasks)

  return (
   <C.AppStyle>
    <Form
      time={time}
      setTime={setTime}  
      task={task} 
      setTask={setTask} 
      editTask={editTask}
      setEditTask={setEditTask}
      setTasks={(list: any) => newList(list)} />
      <List 
        setTasks={setTasks}
        tasks={tasks}
        isActive={isActive} setIsActive={setIsActive}
        setEditTask={setEditTask}
      />   
    <Stopwatch/>
   </C.AppStyle>
  );
}

export default Home;
