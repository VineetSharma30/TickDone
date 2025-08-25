import React from 'react'
import TodoCard from './TodoCard'
import { useTodo } from '../../contexts/TodoContext'

function TodoList({setFormOpen}) {

    const {todos} = useTodo()

  return (
    <div className='rounded-xl bg-[#dee9ff] h-[70vh] p-6 m-6 space-y-4'>
        <div className='flex justify-between '>
            <span className='px-2 text-xl font-semibold text-gray-800 rounded-lg  transition'>To-Do</span>
            <button className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" 
            onClick={()=>setFormOpen((prev)=>!prev)}>+Add</button>
        </div>
        <div className='overflow-y-scroll scrollbar-task w-[580px] h-[60vh]'>
            {todos.map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
            ))}
            <TodoCard key={todos.id} todo={todos} />
            <TodoCard key={todos.id} todo={todos} />
            <TodoCard key={todos.id} todo={todos} />
            
        </div>
    </div>
  )
}

export default TodoList
