import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import '../Fonts.css'
import BgImage from '../images/signBg.jpg'
import google from '../images/google.png'


function Create() {

    const bgStyle = {
        background: `url(${BgImage}) center/cover no-repeat`,
        height: '100vh',
        fontFamily: 'Montserrat, sans-serif',
      };

      const [agreeTerms, setAgreeTerms] = useState(false);
      const navigate = useNavigate();

      const handleClick = () => {
        if (agreeTerms) {
          navigate("/");
        } else {
          alert("Please agree to the terms and conditions.");
        }
      };

  return (
    <div style={bgStyle} className='flex flex-col'>
    <div className='flex items-center'>
      <img src={logo} alt="logo" className='w-20 h-20' />
      <h1 className='text-3xl text-white'>FirstStep</h1>
    </div>
    <div className="flex flex-col items-center mt-8 bg-white bg-opacity-75 w-1/3 mx-auto h-4/6">
    <div className='py-4 w-full mt-5 mb-4 ml-20 flex justify-start items-center'><h1 className="text-5xl font-medium mb-5">Create Account</h1></div>
    <div className='flex flex-col w-full h-1/2 mt-5 space-y-6 items-start p-4 ml-8'>
    <input
    style={{
        backgroundColor:'transparent',
        fontFamily:'Montserrat, sans-serif',
        border:'2px solid black',
      }}
      type="email"
      placeholder="Email"
      className="w-1/2 p-2 border rounded-md custom-input placeholder-black font-semibold"
    />
    <input
    style={{
        backgroundColor:'transparent',
        fontFamily:'Montserrat, sans-serif',
        border:'2px solid black',
      }}
      type="email"
      placeholder="Confirm Email"
      className="w-1/2 p-2 border rounded-md custom-input font-semibold placeholder-black"
    />
    <input
    style={{
        backgroundColor:'transparent',
        fontFamily:'Montserrat, sans-serif',
        border:'2px solid black',
      }}
      type="password"
      placeholder="Password"
      className="w-1/2 p-2 mb-4 border rounded-md custom-input font-semibold placeholder-black"
    />
    <input
    style={{
        backgroundColor:'transparent',
        fontFamily:'Montserrat, sans-serif',
        border:'2px solid black',
      }}
      type="password"
      placeholder="Confirm Password"
      className="w-1/2 p-2 mb-4 border rounded-md custom-input font-semibold placeholder-black"
    />
    </div>
    <div className='w-full space-y-4 flex flex-col items-start ml-20'>
    <div className="form-group">
    <label>
    <input
    type="checkbox"
    onChange={(e) => setAgreeTerms(e.target.checked)}
    checked={agreeTerms}
    />{" "}
    I agree to the terms and conditions
    </label>
    </div>
    <button type="button" onClick={handleClick} className='w-32 text-stone-500 rounded-full bg-white p-2 hover:text-red-500'>Register</button>

    <button className="w-40 bg-white text-stone-500 p-2 rounded-full flex items-center space-x-5 hover:text-red-500 transition-colors duration-300">
    <img src={google} alt="Google Logo" className="w-8 h-8"/>
    <span>Sign In</span>
    </button>
    </div>
    </div>
    </div>

    )
}

export default Create