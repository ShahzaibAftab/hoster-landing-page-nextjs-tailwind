'use client'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='flex justify-between '>
      <div className='flex items-center justify-center gap-2 '>
        <img src='./assets/Logo.svg' alt='logo' />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>Hoster is hiring</button>
      </div>

      {/* dropdown */}
      {show && <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-50 z-50">
        <div class="bg-orange-200 px-16 py-10 relative rounded-lg shadow-lg">
          <button class="absolute top-0 right-0 p-2" onClick={()=>setShow(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className='flex flex-col gap-5 font-semibold'>
            <li className='flex justify-between'><div className="inline-block bg-orange-200 p-2 rounded-full">
              <FaDotCircle className="text-orange-500" />
            </div><a href="#" className='pt-1 hover:underline'>Our Plans</a></li>
            <li className='flex justify-between'><div className="inline-block bg-orange-200 p-2 rounded-full">
              <FaDotCircle className="text-orange-500" />
            </div><a href="#" className='pt-1 hover:underline'>Why Hoster</a></li>
            <li className='flex justify-between'><div className="inline-block bg-orange-200 p-2 rounded-full">
              <FaDotCircle className="text-orange-500" />
            </div><a href="#" className='pt-1 hover:underline'>Find Domain</a></li>
            <li className='flex justify-between'><div className="inline-block bg-orange-200 p-2 rounded-full">
              <FaDotCircle className="text-orange-500" />
            </div><a href="#" className='pt-1 hover:underline'>About Us</a></li>

          </ul>
        </div>
      </div>}

      <ul className='hidden lg:flex justify-between items-center font-Lato text-gray-400 gap-6'>
        <li><a href='#'>Plans</a></li>
        <li><a href='#'>Find Domain</a></li>
        <li><a href='#'>Why Hoster</a></li>
      </ul>
      <div className='hidden lg:flex justify-center items-center font-Lato gap-6'>
        <a href='#' className='text-gray-400 '>Sign In</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
      </div>
      <div className='lg:hidden cursor-pointer'>
        <button onClick={()=>setShow(true)}>
          <FaBars />
        </button>
      </div>
    </div>
  )
}

export default Header
