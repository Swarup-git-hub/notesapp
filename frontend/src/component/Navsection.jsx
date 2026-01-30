import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navsection = () => {
  return (
    <div className='flex bg-blue-100 p-4 justify-center gap-30'>
      <Link to="/"> <span className='text-black text-2xl cursor-pointer'title='Home'>📘</span> </Link>
      <Link to="/viewtasks"> <span className='text-black text-2xl cursor-pointer animate-pulse' title='My Tasks'>📋</span> </Link>
    </div>
  )
}

export default Navsection
