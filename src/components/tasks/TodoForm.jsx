import React, { useContext } from 'react'
import useTodo from '../../contexts/TodoContext'

function TodoForm() {
    
    const [todo, setTodo] = useState("")
    const {addTodo, progress} = useTodo()

    const add = (e)=>{
        e.preventDefault()
        if (!todo) return 
        addTodo({todo})
        progress(0)
        setTodo("")
    }

  return (
    <div>
      
    </div>
  )
}

export default TodoForm

