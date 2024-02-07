import React from 'react'
import logo from '../images/logo.png'
import '../Fonts.css'
import BgImage from '../images/signBg.jpg'
import google from '../images/google.png'

function Login() {
  const bgStyle = {
    background: `url(${BgImage}) center/cover no-repeat`,
    height: '100vh',
    fontFamily: 'Montserrat, sans-serif',
  };
  return (

    <div style={bgStyle} className='flex flex-col'>
  <div className='flex items-center'>
    <img src={logo} alt="logo" className='w-20 h-20' />
    <h1 className='text-3xl text-white'>FirstStep</h1>
  </div>

  <div className="flex flex-col items-center mt-8 bg-white bg-opacity-75 w-1/3 mx-auto h-4/6">
<div className='py-4 w-full mt-5 mb-4 ml-20 flex justify-start items-center'><h1 className="text-5xl font-medium mb-5">Welcome back!</h1></div>
    <div className='flex flex-col w-full h-1/2 mt-5 space-y-3 items-start p-4 ml-8'>
    <input
      type="email"
      placeholder="Email"
      className="w-1/2 p-2 mb-4 border rounded-md custom-input"
    />
    <input
      type="password"
      placeholder="Password"
      className="w-1/2 p-2 mb-4 border rounded-md custom-input"
    />
    <p>Forgot password?</p>
    </div>
    <div className='flex flex-col h-1/2 w-full p-4 space-y-6 ml-8'>
    <button style={{backgroundColor:'#FFA1A1'}} className="w-32 text-stone-500 p-2 rounded-full mb-4 hover:text-white hover:bg-red-500 transition-colors duration-300">
  Sign In
</button>

<button className="w-40 bg-white text-stone-500 p-2 rounded-full flex items-center space-x-5 hover:text-red-500 transition-colors duration-300">
  <img src={google} alt="Google Logo" className="w-8 h-8"/>
  <span>Sign In</span>
</button>


    </div>
    
    </div>
    </div>


  )
}

export default Login