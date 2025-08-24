import { createContext } from "react";


export default TodoContext = createContext({
    todos:[{
        id: 1,
        todo: "Complete this website",
        description: " Complete TickDone-v2 website",
        progress: (num)=>{},
        priority: (num)=>{},
        dueDate: (new Date()).toLocaleDateString(),
        image:null

    }],

    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    removeTodo: (id)=>{},
    toggleStatus: (id,currStatus)=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider