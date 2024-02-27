import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/newlogo.png';
import { BsBell} from 'react-icons/bs'; // Import icons for notification and profile
import { useDispatch } from 'react-redux';
import { logoutUser } from '../slices/userSlice';
import DropdownMenu from './DropdownMenu';
import bell from '../images/bell.png'

function NavbarLoggedIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  let userObj = JSON.parse(localStorage.getItem('user'))

  const clickLanding = () => {
    navigate("/");
  };

  const clickLogout = () => {
    dispatch(logoutUser())
    navigate('/')
  }

  const clickProfile = () => {
    let userAccountType = userObj.profileType
    let userAccountId = userObj.profileId

    if (userAccountId && userAccountType) {
      navigate('/editprofile')
    } else {
      navigate('/choose')
    }
  }

  return (
    <nav className='bg-white py-2.5'>
      <div className='flex w-[60%] justify-between mx-auto'>
     <div className='flex items-center gap-1' onClick={clickLanding}>
      <img src={logo} alt="" className='w-6 h-6 hover:scale-125' />
      <h1 className='text-2xl text-'>FirstStep</h1>
     </div>
     <div className='flex items-center gap-10'>
      <ul className='flex h-full items-center space-x-10'>
        <li className='text-lg font-medium text-black'>Resume Builder</li>
        <li className='text-lg font-medium text-black'>Portfolio Builder</li>
        <li className='text-lg font-medium text-black'>For Employers</li>
      </ul>
     </div>
     <div>
     <div className='flex items-center gap-2'>
      <img src={bell} alt="" className="text-black duration-500  cursor-pointer w-8 h-8" />
        <DropdownMenu/>
      </div>
     </div>
     </div>
    </nav>
  );
}

export default NavbarLoggedIn;
