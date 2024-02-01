import React from 'react'

function Navbar() {
  return (
    <header className='flex justify-end mx-5'>
        <div className='flex bg-transparent w-6/12 justify-between mr-32 items-center'>
        <h1 className=' font-medium text-xl'>Resume Builder</h1>
        <h1 className=' font-medium text-xl'>Portfolio Builder</h1>
        <h1 className=' font-medium text-xl'>About us</h1>
        <h1 className=' font-medium text-xl'>Employees</h1>
        </div>
        <div className='flex bg-transparent w-60 justify-between'>
        <button style={{color: '#CB8A8A'}} className='bg-white w-28 h-11 px-5 border text-lg   rounded-lg'>LogIn</button>
        <button style={{ backgroundColor: '#CB8A8A' }} className=' w-28 h-11 px-5 border text-lg text-white rounded-lg'>Register</button>
        </div>
    </header>


    )
}

export default Navbar