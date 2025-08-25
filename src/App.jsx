import { useState, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import { TodoProvider } from './contexts/TodoContext'

function App() {

  const [todos, setTodos] = useState([])  

  const addTodo = (todo)=>{
    setTodos((prev)=> [{ id: Date.now(), ...todo,  }, ...prev])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)= prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, ...todo} : prevTodo ))
  }

  const removeTodo = (id)=>{
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggleStatus = (id, currStatus)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ?  { ...prevTodo, todoStatus: currStatus } : prevTodo))
  }

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos))
    }}, [todos])

    
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
        setTodos(todos);
    }
    }, []);


  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='/' element={<Dashboard/>}/>
    </Route>
  ))

  return (
    <TodoProvider value={{
      todos,
      addTodo,
      updateTodo,
      removeTodo,
      toggleStatus
    }}>
      <RouterProvider router={router} />
    </TodoProvider>
  )
}

export default App
