import { createContext, useContext } from "react";


export const  TodoContext = createContext({
    todos:[{
        id: 1,
        title: "Complete this website",
        description: " Complete TickDone-v2 website",
        todoStatus: -1,
        priority: 1,
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