import React from 'react'
import { useLocation } from 'react-router'

export default function Topbar() {

  const pageName = {
    "/": "Dashboard",
  }

  const location = useLocation()
  const currentPage = pageName[location.pathname] || "Dashboard"


  return (
    <>
    <div className='p-3 px-6 flex justify-between items-center bg-white max-md:hidden border-gray-100 border-2 border-l-0 h-[71px]'>
        <div className=' rounded-sm p-2 bg-[#00A6FF]'>{currentPage}</div>
        <ul className='flex justify-between gap-x-10 items-center' >
            <li><input type="text" className='w-sm bg-gray-50 outline-1 outline-gray-200 rounded-sm py-2 px-8' /></li>
            <li className="home"><img src="./src/assets/home.svg" alt="" /></li>
            <li className="like"><img src="./src/assets/fav.svg" alt="" /></li>
            <li className="notify"><img src="./src/assets/notify.svg" alt="" /></li>
            <li className="profile"><img src="./src/assets/image.svg " alt="" /></li>
      </ul>
    </div>
    </>
  )
}


