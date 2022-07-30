import { useState } from 'react';
import  Form  from '../../Components/Form';
import List from '../../Components/List';
import { Stopwatch } from '../../Components/stopwatch';
import { ITasks } from '../../Shared/Types/Tasks';

import * as C from './style'

function Home() {

  const [tasks, setTasks] = useState<ITasks[]>([])

  const [selected, setSelected] = useState<ITasks>()

  function selectedTasks(tasksSelected: ITasks) {
    setSelected(tasksSelected)
    setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selection: tarefa.id === tasksSelected.id ? true : false
    })))
  }

  return (
   <C.AppStyle>
    <Form  setTasks={setTasks} />
    <List 
      tasks={tasks} 
      selectedTasks={selectedTasks}
    />
    <Stopwatch/>
   </C.AppStyle>
  );
}

export default Home;
