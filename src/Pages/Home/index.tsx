import { useState } from 'react';
import  Form  from '../../Components/Form';
import List from '../../Components/List';
import { Stopwatch } from '../../Components/stopwatch';
import { ITasks } from '../../Shared/Types/Tasks';

import * as C from './style'

function Home() {

  const [tasks, setTasks] = useState<ITasks[]>([])
  const [isActive, setIsActive] = useState<any>(null)

  const newList = (list: any) => {
      setTasks([...tasks, list])
  }


  return (
   <C.AppStyle>
    <Form setTasks={(list: any) => newList(list)} />
      <List
        isActive={isActive} setIsActive={setIsActive}
        tasks={tasks}
      />
    <Stopwatch/>
   </C.AppStyle>
  );
}

export default Home;
