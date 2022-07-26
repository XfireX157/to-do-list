import  Form  from '../../Components/Form';
import List from '../../Components/List';
import { Stopwatch } from '../../Components/stopwatch';

import * as C from './style'

function Home() {
  return (
   <C.AppStyle>
    <Form/>
    <List/>
    <Stopwatch/>
   </C.AppStyle>
  );
}

export default Home;
