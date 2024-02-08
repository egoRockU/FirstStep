import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const clickLogin = () => {
    navigate("/login");
  };

  const clickRegister = () => {
    navigate("/register");
  };

  return (
    <nav className='p-3 bg-white bg-opacity-75 flex justify-between'>
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
      </div>
      <ul className={`lg:flex lg:items-center lg:w-3/4 lg:justify-end lg:space-x-24 ${isOpen ? 'block' : 'hidden'}`}>
        <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Resume Builder</li>
        <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Portfolio Builder</li>
        <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>About us</li>
        <li className='my-6 lg:my-0 lg:mx-4 text-xl hover:text-stone-400'>Employees</li>
      </ul>
      <div>
          <button className='bg-[#CB8A8A] text-white duration-500 px-3 py-2 mx-2 rounded-lg' onClick={clickLogin}>Login</button>
          <button className='text-[#CB8A8A] bg-white duration-500 px-3 py-2 mx-2 rounded-lg' onClick={clickRegister}>Register</button>
        </div>
    </nav>
  );
}

export default Navbar;