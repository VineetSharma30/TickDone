import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import { TodoProvider } from './contexts/TodoContext'

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='/' element={<Dashboard/>}/>
    </Route>
  ))

  return (
    <TodoProvider value={{
      todos,
      addTodo,
      editTodo,
      removeTodo,
      toggleStatus
    }}>
      <RouterProvider router={router} />
    </TodoProvider>
  )
}

export default App
