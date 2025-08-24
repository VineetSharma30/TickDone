import React from 'react'
import { useTodo } from '../../contexts/TodoContext'

function TodoCard({todo}) {

  const {updateTodo, toggleStaus} = useTodo()
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const [todoDate, setTodoDate] = useState(todo.dueDate)
  const [todoDesc, setTodoDesc] = useState(todo.description)
  const [todoImage, settodoImage] = useState(null)
  const [todoPriority, setTodoPriority] = useState(0)
  
  const editTodo = ()=>{
    updateTodo(todo.id,{...todo, } )
    setIsTodoEditable(false)
  }

  const toggleStatus = ()=>{
    toggleStatus(todo.id, currStatus)
  }


  return (
    <div>
      
    </div>
  )
}

export default TodoCard
