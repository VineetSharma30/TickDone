import React, {useState} from 'react'
import {useTodo} from '../../contexts/TodoContext'

function TodoForm({formOpen,setFormOpen}) {
  const {addTodo } = useTodo()
  const [todo, setTodo] = useState({
  title: "",
  description: "",
  dueDate: "",
  priority: 0,
  todoStatus: -1,
  image: null,
  });


  const add = (e)=>{
    e.preventDefault()
    if (!todo) return 
    addTodo(todo)
    setTodo({
      title: "",
      description: "",
      dueDate: "",
      priority: 0,
      todoStatus: -1,
      image: null,
    });

    setFormOpen((prev)=>!prev)
  }

  const handleChange = (e) => {
  const { name, value } = e.target;
  setTodo((prev) => ({ ...prev, [name]: value }));
  };



  return (
     <form onSubmit={add}  className={`fixed inset-0  bg-transparent bg-opacity-20 backdrop-brightness-25 flex justify-center items-center ${ formOpen ? '': 'hidden'}  `} >
        <div className='bg-white w-4/9 h-5/7 rounded-xl'>
          <div className="p-6">
            <div className="flex justify-between pb-4">
              <button
                onClick={(e)=>{
                  e.preventDefault()
                  setFormOpen(false) 
                }}
                className="hover:bg-red-400 p-2 rounded-full cursor-pointer"
              >
					    Go Back
				      </button>
              <button
                type='submit'
                className="hover:bg-red-400 p-2 rounded-full cursor-pointer "
              >
					    Add New Task
				      </button>
			      </div>
            <div className="flex flex-col m-2 space-y-2">
              <span>Title</span>
                <input
                  type="text"
                  name="title"
                  value={todo.title}
                  onChange={handleChange}
                  className="bg-slate-50 rounded-sm p-1 px-4 outline-1 outline-gray-400"
                />

              <span>Date</span>
                <input
                  type="date"
                  name='dueDate'
                  value={todo.dueDate }
                  onChange={handleChange}
                  className="bg-slate-50 rounded-sm p-1 px-4 outline-1 outline-gray-400"
                />

              <span>Priority</span>
                <input
                  type="text"
                  name="priority"
                  value={todo.priority}
                  onChange={handleChange}
                  className="bg-slate-50 rounded-sm p-1 px-4 outline-1 outline-gray-400"
                />

              <span>Task Description</span>
              <div className="flex  justify-between ">
                <textarea
                  name="description"
                  value={todo.description}
                  onChange={handleChange}
                  cols="2"
                  rows="5"
                  className="bg-slate-50 resize-none rounded-sm w-2/3 outline-1 outline-gray-400 overflow-hidden"
                ></textarea>

                {/* <div className="placeholder h-42 w-42 pb-4 bg-slate-300 rounded-2xl place-self-center flex justify-center items-center">
                  <h3>{(selectedName && "Image Uploaded") || "Select Image"}</h3>
                  <input
                    type="file"
                    // onChange={handleFileChange}
                    className="absolute h-42 w-42 bg-red-200  rounded-2xl place-self-center flex justify-c items-center cursor-pointer opacity-0"
                  />
                </div> */}
              </div>
			      </div>
          </div>
        </div>
     </form>
  )
}

export default TodoForm

