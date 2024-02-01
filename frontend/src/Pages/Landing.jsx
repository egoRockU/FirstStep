import React from 'react';
import Navbar from '../Components/Navbar';
import BgImage from '../images/hero1bg.png';
import logo from '../images/logo.png';
import lady from '../images/herolady.png';
import men from '../images/hero2menwhite.png';
import group from '../images/hero2nig.png';
import tommy from '../images/tommy.png';

function Landing() {
  const landingStyle = {
    background: `url(${BgImage}) center/cover no-repeat`,
    height: '100vh',
    fontFamily: 'Montserrat, sans-serif',
  };

  return (
    <>
      <div style={landingStyle}>
        <Navbar />
        <div className="flex justify-end mt-16 mr-32">
          <div className="w-1/2 mt-20 mr-5">
            <div className='flex items-center justify-center mr-20'>
              <img src={logo} alt="logo" />
              <h1 className='text-8xl font-medium'>FirstStep</h1>
            </div>
            <div className='flex flex-col items-center'>
              <p className='text-2xl'>Craft Your Tomorrow, Shape Your Dreams - Explore the Future with Us!</p>
              <button style={{ backgroundColor: '#CB8A8A' }} className='mt-5 w-34 h-11 px-5 text-lg text-white rounded-lg'>Join Today</button>
            </div>
          </div>
        </div>
      </div>

     {/* Second Section */}
<div className="py-20 bg-[#282727]">
  <div className="container mx-auto flex justify-center items-center">
    {/* 2x2 Grid */}
    <div className="grid grid-cols-2 gap-4">
      <div className="relative bg-gray-700 rounded-md overflow-hidden" style={{ width: '250px', height: '300px' }}>
        <img src={lady} alt="Image 1" className="object-cover w-full h-full" />
      </div>
      <div className="relative bg-gray-700 rounded-md overflow-hidden" style={{ width: '300px', height: '180px ', top:'100px', right:'50px' }}>
        <img src={men} alt="Image 2" className="object-cover w-full h-full" />
      </div>
      <div className="relative bg-gray-700 rounded-md overflow-hidden" style={{ width: '300px', height: '180px' }}>
        <img src={group} alt="Image 3" className="object-cover w-full h-full" />
      </div>
      <div className="relative bg-gray-700 rounded-md overflow-hidden" style={{ width: '180px', height: '250px' }}>
        <img src={tommy} alt="Image 4" className="object-cover w-full h-full" />
      </div>
    </div>

    {/* Right Section with Title, Paragraph, and Button */}
    <div className="w-1/2 space-y-10 ml-8 flex flex-col justify-center items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
    <h1 className="text-4xl font-semibold mb-4 text-white">Explore Potential Hires Today!</h1>
    <p className="text-xl mb-4 text-white leading-loose">
    Explore a hub of top-tier talent, meticulously showcased in diverse portfolios. Simplify your hiring journey by
     connecting effortlessly with standout applicants ready to elevate your team.Your next exceptional hire is just a 
    click away – discover, connect, and transform your workforce with ease.</p>
    <button style={{ backgroundColor: '#CB8A8A' }} className="w-36 h-12 text-lg text-white rounded-lg">Join Today</button>
    </div>
    </div>
</div>

    </>
  );
}

export default Landing;
