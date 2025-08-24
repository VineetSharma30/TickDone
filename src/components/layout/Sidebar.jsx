import React from 'react'

export function Sidebar(){
  return (

    <div className='logoCon bg-white border-gray-100 border-2 h-[100vh] w-15%' >
        <ul className='flex p-5 border-b-2 border-gray-100 gap-8'>
                <li className="hamburger"><img src="td2.svg" alt="" /></li>
                <li className='Logo font-bold font-sans text-xl'>TickDone</li>
        </ul>
        <ul className='navCon h-56 m-4 mt-6 border-b-1 border-gray-200 space-y-6'>
            <li className="todos flex gap-4 "><span><img src="./src/assets/dashb.svg" alt="" /></span><span>Dashboard</span></li>
            <li className="todos flex gap-4 "><span><img src="./src/assets/check.svg" alt="" /></span><span>My Tasks</span></li>
            <li className="todos flex gap-4 "><span><img src="./src/assets/calender.svg" alt="" /></span><span>Calender</span></li>
            <li className="todos flex gap-4 "><span><img src="./src/assets/settings.svg" alt="" /></span><span>Settings</span></li>
            <li className="todos flex gap-4 "><span><img src="./src/assets/help.svg" alt="" /></span><span>Help</span></li>
        </ul>
    </div>

  )
}


