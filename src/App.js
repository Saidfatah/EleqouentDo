import Base from './components/layout/Base'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import { QueryClientProvider } from 'react-query'
import {queryClient} from './hooks/QueryClients/MainClient'


const App=()=> {
  return (
    <DndProvider backend={HTML5Backend}>
      <QueryClientProvider client={queryClient}>
         <Base />
      </QueryClientProvider>
    </DndProvider>
  );

}

export default App;
