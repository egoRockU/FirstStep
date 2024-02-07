import React from 'react';
import { useNavigate } from 'react-router-dom';



function Navbar() {
  const navigate = useNavigate();

  const clicklogin = () => {
    navigate("/login")
  }
  
  const clickcreate = () => {
    navigate("/create")
  }

  return (
    <header className='fixed top-0 left-0 right-0 flex justify-end z-50 bg-white bg-opacity-30 py-3'>
        <div className='flex bg-transparent w-6/12 justify-between mr-32 items-center'>
          <h1 className='font-medium text-xl'>Resume Builder</h1>
          <h1 className='font-medium text-xl'>Portfolio Builder</h1>
          <h1 className='font-medium text-xl'>About us</h1>
          <h1 className='font-medium text-xl'>Employees</h1>
        </div>
        <div className='flex bg-transparent w-60 justify-between mr-2'>
          <button style={{color: '#CB8A8A'}} className='bg-white w-28 h-11 px-5 border text-lg rounded-lg' onClick={clicklogin}>Login</button>
          <button style={{ backgroundColor: '#CB8A8A' }} className='w-28 h-11 px-5 border text-lg text-white rounded-lg' onClick={clickcreate}>Register</button>
        </div>
    </header>
  );
}

export default Navbar;
