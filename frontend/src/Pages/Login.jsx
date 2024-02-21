import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import validator from 'validator'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import logo from '../images/logo.png'
import '../Fonts.css'
import BgImage from '../images/signBg.jpg'
import google from '../images/google.png'
import Newnavbar from '../Components/Newnavbar'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginGoogle } from '../slices/userSlice';


function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [inputs, setInputs] = useState([])
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

  const dispatch = useDispatch()
  const {loading, error} = useSelector((state)=>state.user)

  useEffect(() => {
    setInputs({'email': email, 'password': password})
  }, [email, password])

  const bgStyle = {
    background: `url(${BgImage}) center/cover no-repeat`,
    height: '100vh',
    fontFamily: 'Montserrat, sans-serif',
  };

  const login = (e) => {
    e.preventDefault()
    if (validator.isEmail(email)){
      dispatch(loginUser(inputs))
      .then((res)=> {
        if (res.error){
          alert(res.error.message)
        } else {
          navigate('/')
        }
      })
    } else {
      alert('Email must be a valid email address')
    }

  };

  const handleGoogleLogin = (credentialResponse) => {
    let credential = jwtDecode(credentialResponse.credential)
    const googleInputs = {
      'email': credential.email,
      'sub': credential.sub
    }
    dispatch(loginGoogle(googleInputs)).then((result)=>{
      if (result.error){
        navigate('/register')
      }
    })
    navigate('/')
  }

  const clickRegister = () => {
    navigate("/register");
  };
  return (

    <>
    <div style={bgStyle} className='flex flex-col space-y-20'>
      <div>
      <Newnavbar/>
      </div>
      <div className="flex flex-col bg-white bg-opacity-75  lg:w-1/3 mx-auto h-4/6">
        <form className='h-1/2'>
        <div className='flex flex-col w-full h-full items-center justify-around'>
        <div className='w-full flex justify-center'>
          <h1 className="text-5xl font-medium">Welcome!</h1>
        </div>
        <div className='flex flex-col w-full space-y-5 justify-center items-center'>
          <input
          style={{
            backgroundColor:'transparent',
            fontFamily:'Montserrat, sans-serif',
            border:'2px solid black',
          }}
            type="email"
            placeholder="Email"
            className="w-1/2 p-2 border rounded-md custom-input placeholder-black font-semibold"
            onChange={(e) =>setEmail(e.target.value)}
            required
          />
          <input
            style={{
              backgroundColor:'transparent',
              fontFamily:'Montserrat, sans-serif',
              border:'2px solid black',
            }}
            type="password"
            placeholder="Password"
            className="w-1/2 p-2 border rounded-md custom-input placeholder-black font-semibold"
            onChange={(e) =>setPassword(e.target.value)}
            required
          />
          </div>
          </div>
        </form>
        <div className='flex flex-col h-1/2 w-full space-y-3 items-center'>
        <button type="button" className='w-46 text-stone-500 rounded-full bg-transparent p-2'>Forgot Password?</button>
           <button 
          className="w-32 text-stone-500 p-2 rounded-full bg-[#FFA1A1] hover:text-white hover:bg-red-500 transition-colors duration-300"
          type='submit'
          onClick={login}
          >
            Log In
          </button>
          <div className='flex justify-between gap-3 items-center'>
            <div className='h-[1px] bg-black w-32'></div>
            <h1 className='text-lg'>OR</h1>
            <div className='h-[1px] bg-black w-32'></div>
          </div>
          <GoogleOAuthProvider clientId={googleClientId}>
            <GoogleLogin 
              onSuccess={handleGoogleLogin}
              type="buttton"
              size="large"
              text="signin_with"
              shape='pill'
            />
          </GoogleOAuthProvider>
          <div className='cursor-pointer mt-4' onClick={clickRegister}>
          <h1>Need to Register?</h1>
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login