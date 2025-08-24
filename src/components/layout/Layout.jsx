import { Outlet } from 'react-router'
import Topbar from './Topbar'
import { Sidebar } from './Sidebar'


function Layout() {
  return (
    <div className='flex'>
        <div className="w-[15%]">
        <Sidebar/>
        </div>
        <div className='w-[85%]'>
          <Topbar/>
          <Outlet/>
        </div>
      </div>
  )
}

export default Layout
