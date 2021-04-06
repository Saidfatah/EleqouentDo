export const TodoItemModel=(title)=>({
    id:new Date(),
    title,
    done:false,
    done_at:null,
    created_at:new Date()
})
