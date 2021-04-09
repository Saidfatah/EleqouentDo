export const TodoItemModel=(title,id,done,done_at,created_at)=>({
    id:id||new Date(),
    title,
    done:done||false,
    done_at:done_at||null,
    created_at:created_at||new Date()
})
