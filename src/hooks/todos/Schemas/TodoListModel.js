export const TodoListModel=(projectId,title,todos,orderInProject)=>({
    id:new Date().getTime(),
    projectId,
    title,
    progress:0,
    todos,
    orderInProject,
    done:false
})
