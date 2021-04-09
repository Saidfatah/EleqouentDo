import {useQuery} from  "react-query" 


const getProjectById = async(args)=> {
    try {
        const {queryKey}=args
        const id=queryKey[0]
        
        let projectReturn = null
        const projects_from_cache=localStorage.getItem('projects')
        
       
        if(projects_from_cache != undefined) 
            projectReturn =JSON.parse(projects_from_cache).filter(p=> p.id.toString() === id)[0]
      
         console.log(id)
         console.log( JSON.parse(projects_from_cache)[0].id.toString())
        await new Promise(r => setTimeout(r, 1000)) // wait a second
        return  projectReturn 
    } catch (error) {
        console.log(error)
    }
};
const useFecthProjectById = (id) => {
    return  useQuery(id,getProjectById,{keepPreviousData:true,refetchOnWindowFocus:true})
}

export default useFecthProjectById