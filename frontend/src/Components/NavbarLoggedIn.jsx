import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { BsBell, BsPerson } from 'react-icons/bs'; // Import icons for notification and profile
import { useDispatch } from 'react-redux';
import { logoutUser } from '../slices/userSlice';

function NavbarLoggedIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const clickLanding = () => {
    navigate("/");
  };

  const clickLogout = () => {
    dispatch(logoutUser())
    navigate('/')
  }

  const clickProfile = () => {
    navigate('/choose')
  }

  return (
    <nav className='p-3 bg-white bg-opacity-75 flex shadow-xl justify-between items-center'>
      <div className="flex items-center">
        <button
          className="block lg:hidden focus:outline-none ml-3"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        {/* Render logo based on isOpen state */}
        {!isOpen && (
          <img src={logo} alt="logo" className='h-12 transition-transform hover:scale-125 cursor-pointer' onClick={clickLanding}/>
        )}
      </div>
      <div className={`lg:flex lg:items-center space-x-4 ${isOpen ? 'block w-full lg:w-auto' : 'hidden'}`}>
        <ul className="lg:flex lg:items-center">
          <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Resume Builder</li>
          <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Portfolio Builder</li>
          <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>About us</li>
          <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Employees</li>
        </ul>
      </div>
      <div className='flex items-center space-x-5 justify-between'>
        {/* Notification icon */}
        <BsBell className="text-black duration-500 mx-2 cursor-pointer text-3xl" />
        {/* Profile icon */}
        <BsPerson className="text-black duration-500 mx-2 cursor-pointer text-3xl" onClick={clickProfile}/>

        {/* Logout button */}
        <button className='bg-[#CB8A8A] text-white duration-500 px-3 py-2 mx-2 rounded-lg' onClick={clickLogout}>Logout</button>
      </div>

    </nav>
  );
}

export default NavbarLoggedIn;
