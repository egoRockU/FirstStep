import React from 'react'
import logo from '../images/logo.png'
import '../Fonts.css'
import BgImage from '../images/signBg.jpg'
import google from '../images/google.png'
import Navbar from '../Components/Navbar'

function Login() {
  const bgStyle = {
    background: `url(${BgImage}) center/cover no-repeat`,
    height: '100vh',
    fontFamily: 'Montserrat, sans-serif',
  };


  return (

    <>
    <div style={bgStyle} className='flex flex-col justify-center'>
      <Navbar/>

      <div className="flex flex-col bg-white bg-opacity-75 w-1/3 mx-auto h-4/6">
        <div className='py-4 w-full mt-5 mb-2 flex justify-center items-center'>
          <h1 className="text-5xl font-medium mb-5">Welcome back!</h1>
        </div>
        <div className='flex flex-col w-full h-1/2 mt-5 space-y-3 items-center p-4'>
          <input
          style={{
            backgroundColor:'transparent',
            fontFamily:'Montserrat, sans-serif',
            border:'2px solid black',
          }}
            type="email"
            placeholder="Email"
            className="w-1/2 p-2 mb-4 border rounded-md custom-input placeholder-black font-semibold"
          />
          <input
            style={{
              backgroundColor:'transparent',
              fontFamily:'Montserrat, sans-serif',
              border:'2px solid black',
            }}
            type="password"
            placeholder="Password"
            className="w-1/2 p-2 mb-4 border rounded-md custom-input placeholder-black font-semibold"
          />
          <button type="button" className='w-46 mt-5 text-stone-500 rounded-full bg-transparent p-2'>Forgot Password?</button>
        </div>
        <div className='flex flex-col h-1/2 w-full p-4 space-y-3 items-center'>
          <button style={{backgroundColor:'#FFA1A1'}} className="w-32 text-stone-500 p-2 rounded-full mb-4 hover:text-white hover:bg-red-500 transition-colors duration-300">
            Sign In
          </button>
          <h1 className='text-lg'>OR</h1>
          <button className="w-40 bg-white text-stone-500 p-2 rounded-full flex items-center space-x-5 hover:text-red-500 transition-colors duration-300">
            <img src={google} alt="Google Logo" className="w-8 h-8"/>
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login