import React from 'react'
import logo from '../images/logo.png'


function Newnavbar() {
  return (
    <div className='flex justify-between w-full p-5 bg-transparent'>
        <div className='flex items-center'>
            <img src={logo} alt="logo" className='w-16 h-16' />
            <h1 className='text-2xl text-white'>FirstStep</h1>
        </div>
    <div className='flex w-full'>
        <ul className='flex items-center w-full justify-end space-x-6 lg:space-x-12'>
            <li className='text-lg md:text-xl text-white'>Jobs</li>
            <li className='text-lg md:text-xl text-white'>Portfolio Builder</li>
            <li className='text-lg md:text-xl text-white'>Find Talents</li>
            <li className='text-lg md:text-xl text-white'>Resume Builder</li>
        </ul>
    </div>  

    </div>
  )
}

export default Newnavbar