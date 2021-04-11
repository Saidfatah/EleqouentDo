import React from 'react'
import useFecthProjectById from '../../hooks/projects/useFecthProjectById'
import useFetchTodosListsByProjectId from '../../hooks/todos/useFetchTodosListsByProjectId'
import { PieChart } from 'react-minimal-pie-chart';
import diff_minutes from '../../utils/diff_minutes'

//calculate accuracy of estimated time
//time it took to finish project 
//done todos count
//undone todos count
//interval of checking todos 
//speed of checking todos 
//frequency 
//graph of commits 
//graph for todolists


const ProjectStatics = ({projectId,project}) => {
    const {data:todoLists,status,error}=  useFetchTodosListsByProjectId(projectId)
    
    if(!todoLists || !project )return null
    if(project.status != "done")return null

    const LISTS_COUNT=todoLists.length
    const DONE_LISTS_COUNT=todoLists.filter(tds=>tds.done).length
    const UNDONE_LISTS_COUNT=todoLists.filter(tds=>!tds.done).length

    const TODOS = todoLists.map(tds=>tds.todos).reduce((a,c)=>[...a,...c],[])
    const DONE_TODOS_COUNT =TODOS.filter(td=>td.done).length
    const UNDONE_TODOS_COUNT =TODOS.filter(td=>!td.done).length
    
    
    const PROJECT_START_DATE=project.created_at
    const finished_at=project.finished_at
    let   project_duration_in_minutes = 0
    if(finished_at){
        const date1 = new Date(PROJECT_START_DATE);
        const date2 = new Date(finished_at);
        project_duration_in_minutes =diff_minutes( date2 ,date1 ).toString();
    }
    const estimated_time  = project.estimated_time
    const accuracy        = project.estimation_accuracy *100
    let   accurayc_status ="Great"

    if( (accuracy >= 100 && accuracy <= 110) || (accuracy <= 100 && accuracy >= 90))accurayc_status ="Great guess"
    if((accuracy >  110 && accuracy <=  120  ) || (accuracy < 90 && accuracy >= 80 ))accurayc_status ="okkay guess"
    if(accuracy >120   || accuracy < 80 ){
        const  off= Math.abs(accuracy-100)
        accurayc_status =<span className='text-gray-400'  >off by <span className='text-green-500' >{off}%</span></span>
    }
 

    const todosData=[
        { title: 'Done ('+DONE_TODOS_COUNT+')', value: DONE_TODOS_COUNT, color:'#6EE7B7'},
        { title: 'Undone ('+UNDONE_TODOS_COUNT+')', value: UNDONE_TODOS_COUNT, color:'#E4E4E4'},
     ]
    const todoListsData=[
        { title: 'Done ('+DONE_LISTS_COUNT+')', value: DONE_LISTS_COUNT, color:'#6EE7B7'},
        { title: 'Undone ('+UNDONE_LISTS_COUNT+')', value: UNDONE_LISTS_COUNT, color:'#E4E4E4'},
     ]

    const Chart=({title,totalValue,data})=>{
        return <div>
            <p className="text-sm text-gray-400 " >{title}</p>
            <PieChart
             style={{ width:200,height:200}}
             radius={40}
             x={0} 
             y={60}
             center={[40,40]}
             totalValue={totalValue}
             animate={true}
             animationEasing="cubic-bezier(0.4, 0, 0.2, 1)"
             animationDuration={500}
             data={data}
             label={(props) => { return props.dataEntry.title;}}
             labelStyle={{  
                 fontSize: '6px',
                 fontWeight:"bold",
                 fontFamily: 'sans-serif',
                 color:"#fff",
            }}
            
           /> 
        </div>
    }
    return (
        <div className="flex-1  h-screen sm:h-screen w-auto  whitespace-nowrap p-2 flex flex-col items-start relative" >
            <h1  className="text-gray-500 text-lg  font-bold  " >Project Statstics</h1>
            <p className="text-sm text-gray-400" >production time: <span className='text-green-500' >{project_duration_in_minutes}</span></p>
            <p className="text-sm text-gray-400" >estimated time: <span className='text-green-500' >{estimated_time}</span></p>
            <p className="text-sm text-gray-400" >estimation accuracy : <span className='text-green-500' >{accuracy}% {accurayc_status}</span></p>
            <div className="flex flex-row justify-start items-center " >
                <Chart data={todoListsData} title="Todo Lists :" totalValue={LISTS_COUNT}  />
                <Chart data={todosData} title="todos :" totalValue={TODOS.length}  />
            </div>
              
        </div>
    )
}

export default ProjectStatics
