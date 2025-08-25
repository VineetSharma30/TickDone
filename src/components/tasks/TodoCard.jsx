import React , {useEffect, useRef, useState} from 'react'
import { useTodo } from '../../contexts/TodoContext'

function TodoCard({todo}) {

  const {updateTodo, removeTodo, toggleStatus} = useTodo()
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  // const [todoTitle, setTodoTitle] = useState(todo.title)
  // const [todoDate, setTodoDate] = useState(todo.dueDate)
  // const [todoDesc, setTodoDesc] = useState(todo.description)
  // const [todoStatus, settodoStatus] = useState(-1)
  // const [todoPriority, setTodoPriority] = useState(0)
  // const [todoImage, settodoImage] = useState(null)
  
  const editTodo = ()=>{
    updateTodo(todo.id,{...todo, } )
    setIsTodoEditable(false)
  }

  const handleTodoStatus = ()=>{
    const newStatus = todo.todoStatus === -1 ? 0 : -1
    toggleStatus(todo.id, newStatus)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  
  return (
    <div className="todo w-lg border-1 border-red-500 h-36 mx-5 mt-1.5 rounded-2xl bg-white flex gap-1" >
            <div className='ml-1 mt-1.5 text-center font-semibold text-gray-800  w-[32px]'>O</div>
            <div className='space-y-2 w-[60%] flex flex-col mt-1'>
                <p className='font-bold text-xl h-[24px]'>{todo.title}</p>
                <p className='font text-gray-500 h-[74px] overflow-clip '>{todo.description} </p>
                <div className="todoFooter flex text-xs gap-4 text-gray-500">
                    <span>Priority: {todo.priority}</span>
                    <span>Status: {todo.todoStatus === -1 ? 'Not Started' : 'In Progress'}</span>
                </div>
            </div>
            <div className="pholderCon flex flex-col gap-1 text-xs mr-2 mt-1  w-[30%]">
                <span className='self-end relative flex justify-center items-center  rounded-full active:bg-slate-100 cursor-pointer'
                
                onClick={()=> setIsMenuOpen((prev)=> !prev)}
                >
                    <img  src="./src/assets/3dots.svg"/>
                    <div className={`absolute top-0 right-0 ${isMenuOpen ? "":"hidden"}`} >
                        <ul className=' bg-slate-100 rounded-xl '>
                            <li className="hover:bg-slate-200 p-2 rounded-xl cursor-pointer"
                            onClick={handleTodoStatus}
                            >Status</li>
                            <li className='hover:bg-slate-200 p-2 rounded-xl'
                            onClick={editTodo}
                            >Edit</li>
                            <li className='hover:bg-slate-200 p-2 rounded-xl'
                            onClick={()=>{removeTodo(todo.id)}}
                            >Delete</li>
                        </ul>
                    </div>
                </span>
                <div className="placeholder h-22 w-22  bg-slate-300 rounded-2xl self-center mb-0.5"></div>
                <p className='text-gray-500 text-center'>Due Date: {todo.dueDate || "N/A"}</p>
            </div>
        </div>
  )
}

export default TodoCard
