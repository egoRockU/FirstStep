import React from 'react';
import { FaTwitter, FaFacebookSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

function AddSocial() {
  return (
    <div className='h-[100vh] bg-black bg-opacity-50 backdrop-blur-sm'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='w-1/4 h-48 bg-white'>
        <div className='flex items-center justify-center h-1/4'>
        <h1 className='text-xl'>Add Social Link</h1>
        </div>
        <div className='flex justify-center items-center h-3/4 gap-5'>
          <div>
            <form>
              <select name="sociallogo" id="socials" className='p-2 border-2 border-[#444B88]'>
                <option selected disabled>Social platform</option>
                <option value="twitter"><FaTwitter /> Twitter</option>
                <option value="facebook"><FaFacebookSquare /> Facebook</option>
                <option value="youtube"><FaYoutube /> YouTube</option>
                <option value="linkedin"><FaLinkedin /> LinkedIn</option>
              </select>
            </form>
          </div>
          <div>
            <input type="email" name="" id="" 
            className='p-2 border-2 border-[#444B88]'
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AddSocial;
