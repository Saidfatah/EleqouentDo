import Base from './components/layout/Base'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'


const App=()=> {
  return (
    <DndProvider backend={HTML5Backend}>
      <Base  />
    </DndProvider>
  );
}

export default App;
