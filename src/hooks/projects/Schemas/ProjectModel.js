export const ProjectModel=(title,id,estimated_time)=>({
    title,
    id,
    created_at:new Date(),
    finished_at:null,
    estimated_time,
    estimation_accuracy:null,
    status:"WORKING",
    progress:0,
    todosCount:0,
    todoListsCount:0
})
