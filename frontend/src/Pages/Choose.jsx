import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarLoggedIn from '../Components/NavbarLoggedIn';
import Footer from '../Components/Footer';

function Choose() {
  const navigate = useNavigate();
  const clickapplicant = (e) => {
    e.preventDefault()
    navigate("/create");
  }

  const clickemployer = (e) => {
    e.preventDefault()
    navigate("/createEmployerpage");
  }


  return (
    <>
  <NavbarLoggedIn />
  <div className='w-full h-[100vh] flex justify-center items-center bg-gray-100'>
    <div className='w-[65%] h-[75%] bg-white'>
    <div className='w-full flex flex-col justify-center items-center h-[30%] gap-5'>
      <h1 className='text-3xl text-blue-500'>Create Profile</h1>
      <p>Choose what type of profile you want to create.</p>
    </div>
    <div className=' h-[70%]'>
      <div className='flex w-full h-full p-3'>
        <div className='flex w-[80%] mx-auto'>
        <div className='w-1/2 h-[80%] flex flex-col justify-center items-center text-blue-500 border-[#444B88] border hover:bg-[#8B95EE] hover:text-white hover:w-[75%] duration-150' onClick={clickapplicant}>
          I am an <span className='text-3xl'>APPLICANT</span>
        </div>
        <div className='w-1/2 h-[80%] flex flex-col justify-center items-center text-blue-500 border-[#444B88] border hover:bg-[#8B95EE] hover:text-white hover:w-[75%] duration-150' onClick={clickemployer}>
          I am an <span className='text-3xl'>Employer</span>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>
        
      <Footer/>
    </>
  );
}

export default Choose;
