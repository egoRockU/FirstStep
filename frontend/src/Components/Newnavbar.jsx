import React from 'react'
import logo from '../images/newlogo.png'
import { useNavigate } from 'react-router-dom'

function Newnavbar() {
  const Navigate = useNavigate();

  const clickLanding = () => {
    Navigate("/");
  };
  return (
    <div className='flex bg-black py-4 items-center justify-center sticky'>
      <div className='w-[60%] flex justify-between'>
        <div className='flex items-center cursor-pointer gap-1' onClick={clickLanding}>
            <img src={logo} alt="logo" className='w-8 h-8 hover:scale-125' />
            <h1 className='text-2xl text-white'>FirstStep</h1>
        </div>
    <div className='flex'>
        <ul className='flex items-center w-full space-x-6 lg:space-x-12'>
            <li className='text-lg text-white cursor-pointer'>Jobs</li>
            <li className='text-lg text-white cursor-pointer'>Portfolio Builder</li>
            <li className='text-lg text-white cursor-pointer'>Find Talents</li>
            <li className='text-lg text-white cursor-pointer'>Resume Builder</li>
            <li className='text-lg text-white cursor-pointer'>About us</li>
        </ul>
    </div>  
    </div>
    </div>
  )
}

export default Newnavbar