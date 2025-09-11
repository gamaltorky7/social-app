import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div className='bg-gradient-to-br from-white via-blue-100 to-purple-900 min-h-screen dark:bg-gradient-to-br dark:from-[#39496d] dark:via-[#1e293b] dark:to-[#0f172a] dark:text-white'>
      <Navbar/>
      <div className='container w-3/4 mx-auto px-4 '>
        <Outlet/>
      </div>
     
        <Footer/>
     
    </div>
  )
}
