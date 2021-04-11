import {useQuery} from  "react-query" 


const useFecthProjectById = (id) => {
    const getProjectById = async(args)=> {
        try {
            let projectReturn = null
            const projects_from_cache=localStorage.getItem('projects')
            
            if(projects_from_cache != undefined) 
                 projectReturn =JSON.parse(projects_from_cache).filter(p=> p.id.toString() == id.toString())[0]

            return  projectReturn 
        } catch (error) {
            console.log(error)
        }
    };
    return  useQuery(id,getProjectById,{keepPreviousData:true,refetchOnWindowFocus:true})
}

export default useFecthProjectById