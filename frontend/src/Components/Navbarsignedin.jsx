import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import { BsBell, BsPerson } from 'react-icons/bs'; // Import icons for notification and profile

function Navbarsignedin() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const clickLanding = () => {
    navigate("/");
  };

  return (
    <nav className='p-3 bg-white bg-opacity-75 flex justify-between shadow-xl'>
      <div className="flex justify-between items-center">
        <button
          className="block lg:hidden focus:outline-none"
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
        <div className='w-full'>
          <img src={logo} alt="logo" className='h-12 transition-transform hover:scale-125' onClick={clickLanding}/>
        </div>
      </div>
      <div className='flex justify-between w-1/2'>
        <ul className={`lg:flex lg:items-center  ${isOpen ? 'block' : 'hidden'}`}>
          <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Resume Builder</li>
          <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Portfolio Builder</li>
          <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>About us</li>
          <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Employees</li>
        </ul>
        <div className='flex items-center mx-auto space-x-5'>
          {/* Notification icon */}
          <BsBell className="text-black duration-500 mx-2 cursor-pointer text-3xl" />
          {/* Profile icon */}
          <BsPerson className="text-black duration-500 mx-2 cursor-pointer text-3xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbarsignedin;
