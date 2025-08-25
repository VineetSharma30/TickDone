import React, {useState} from 'react'
import { TodoForm, TodoList } from '../components/tasks/index'
import { useTodo } from '../contexts/TodoContext'


export default function  Dashboard(){

    const {todos} = useTodo()
    const [formOpen, setFormOpen] = useState(false)

    return (
   <>
        <div className='headbar rounded-xl bg-[#dee9ff] h-[15vh] p-4 m-5'>
            {/* <p>Workplace / Hikoko Design / Dashboard</p> */}
            <div className='ml-5 space-y-4'>
                <p className='text-4xl font-bold '>Hello Vineet!</p>
                <p className='font-semibold text-gray-600'> Lets! make today productive</p>
            </div>
        </div>
        <TodoList setFormOpen={setFormOpen}/>
        <TodoForm formOpen={formOpen} setFormOpen={setFormOpen} />
   </>
  )
}

