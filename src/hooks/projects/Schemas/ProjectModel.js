export const ProjectModel=(title,id)=>({
    title,
    id,
    created_at:new Date(),
    finished_at:null,
    status:"WORKING",
    progress:0,
    todosCount:0,
    todoListsCount:0
})
