import React,{useState,useEffect} from 'react'

import Base from './components/layout/Base'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import { QueryClientProvider } from 'react-query'
import {queryClient} from './hooks/QueryClients/MainClient'
import { ReactQueryDevtools } from 'react-query/devtools'

const App=()=> {

   return (
     <DndProvider backend={HTML5Backend}>
       <QueryClientProvider client={queryClient}>
          <Base />
          <ReactQueryDevtools initialIsOpen={false} />
       </QueryClientProvider>
     </DndProvider>
   );

}

export default App;
