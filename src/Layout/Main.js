import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Pages/Shared/Navbar/Navbar"
import Footer from "../Pages/Shared/Footer/Footer"

const Main = () => {
  const [theme,setTheme] = useState(false)

  useEffect(()=>{
    console.log(theme)
  },[theme])
  return (
    <div data-theme={`${theme ? "dark": "cupcake"}`}>
        <div className='max-w-[1440px] mx-auto '>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Outlet/>
        <Footer/>
        </div>
    </div>
  )
}

export default Main