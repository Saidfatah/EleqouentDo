import Base from './components/layout/Base'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import _ from 'lodash';

const tasks =[
  {title: "make a coffee", role: "employee"},
  {title: "react the sales target", role: "salesman"},
  {title: "clean the room", role: "employee"},
  {title: "call the client", role: "boss"},
  ]
const TaskCard = ({task,index} )=>{
    return <div>{task}</div>
}

const App=()=> {
  return (
    <DndProvider backend={HTML5Backend}>
      <Base />
    </DndProvider>
  );

}

export default App;
