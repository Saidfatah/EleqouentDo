import {useQuery} from  "react-query" 


const getProjectById = async(args)=> {
    try {
        const {queryKey}=args
        const id=queryKey[0]
        console.log({id})

        let projectReturn = null
        const projects_from_cache=localStorage.getItem('projects')
        
        if(projects_from_cache != undefined) 
            projectReturn =JSON.parse(projects_from_cache).filter(p=>p.id.toString() === id.toString())[0]
        
        await new Promise(r => setTimeout(r, 1000)) // wait a second
        return  projectReturn 
    } catch (error) {
        console.log(error)
    }
};
const useFecthProjectById = (id) => {
    return  useQuery(id,getProjectById,{keepPreviousData:true})
}

export default useFecthProjectById