import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar'
import './AppLayout.css'

const AppLayout = () => {
  return (
    <div className='appLayout'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default AppLayout