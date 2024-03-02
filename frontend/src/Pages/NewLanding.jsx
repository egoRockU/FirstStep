import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Bg from "../images/newlandingbg.png";
import Newnavbar from "../Components/Newnavbar";
import abi from "../images/hevabi.mp4";
import resume from "../images/resume.png";
import portfolio from "../images/portfolio.png";
import applicants from "../images/applicants.png";
import Footer from "../Components/Footer";
import '../Fonts.css'
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Imagefb from "../images/fb.png";
import applicants2 from "../images/look-for-applicants.jpg";
import portfolio2 from "../images/choose-your-portfolio.jpg";
import resume2 from "../images/create-your-resume.jpg";


function NewLanding() {
  const landingStyle = {
    background: `url(${Bg}) center/cover no-repeat`,
    fontFamily: "Montserrat, sans-serif",
    height: "998px"
  };

  const navigate = useNavigate();

  const clickjoin = () => {
    navigate("/newlogin");
  };

  const {user} = useSelector((state)=>state.user)

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={landingStyle}>
      <>
      {user ? <NavbarLoggedIn/> : <Newnavbar />}
        <div className="sm:h-3/4 lg:h-3/4 w-full flex flex-col lg:justify-around mt-20">
          <div className="w-full flex flex-col sm:items-center lg:items-start h-[80%] justify-around text-center pl-20">
            <div className="flex flex-col sm:w-full  md:w-1/2">
              <h1 className="sm:text-xl md:text-6xl text-white font-semibold">
                Craft Your Tomorrow
              </h1>
              <h1 className="sm:text-xl md:text-6xl text-white font-semibold">
                Shape Your Dreams
              </h1>
              <h1 className="sm:text-lg md:text-4xl text-white font-semibold opacity-60">
                Explore Your Future With Us
              </h1>
            </div>
            <div className="flex flex-col w-1/2">
              <h1 className="text-base text-white md:leading-10">
                Unleash your hidden talents! Build a winning resume & portfolio,
                showcase your skills, and get noticed by dream employers. Take
                control of your career journey, start today!
              </h1>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <button className="bg-blue-300 py-4 px-32 rounded-full text-white hover:bg-blue-600" onClick={clickjoin}>
                Join Today!
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
  
  <video
    className="max-w-full w-full h-[1000px] object-cover"
    autoPlay
    loop
    muted
  >
    <source src={abi} type="video/mp4" />
  </video>

  
  <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-black bg-opacity-50 blur flex items-center justify-center">
  </div>

 
  <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 flex flex-col items-center justify-center">
    <h1 className="text-5xl text-white font-semibold">
      Explore Potential Hires Today!
    </h1>
    <p className="text-base text-white leading-10 lg:w-4/5 text-center" >
      Effortless search, exceptional hires. Discover diverse portfolios, connect with <br/> standout applicants,
and transform your workforce.
</p>
  </div>

  
  <div className="absolute inset-x-0 bottom-80 flex flex-col items-center justify-center" style={{ zIndex: 10 }}>
    <button className="bg-blue-300 py-4 px-32 rounded-full text-white relative hover:bg-blue-600">
      Join Today!
    </button>
  </div>
</div>

        <div
          style={{
            background: "#ffffff",
            height: "3500px",
          }}
          className="relative"
        >
         <div className="h-[1200px] bg-gradient-to-b from-black to-transparent relative flex flex-col items-center">
  <div className="absolute top-60 w-[70%] h-[700px] lg:h-[800px] rounded-2xl">
    <div className="p-4 space-y-5 text-center">
      {/* <h1 className="text-5xl font-bold text-white">FirstStep</h1> */}
      <h1 className="text-2xl font-semibold text-white">
        Build your best Brand, Get Hired Faster, Hire Smarter
      </h1>
    </div>
    <div className="flex justify-center space-x-4 md:h-3/5 lg:h-3/4">
      <div
        className="w-1/4 h-full bg-cover bg-center relative hover:w-1/3 hover:h-auto transition-all duration-300"
        style={{ backgroundImage: `url(${resume})` }}
      >
        <h1 className="md:text-2xl lg:text-4xl text-white mt-6 ml-6">Resume</h1>
      </div>
      <div
        className="w-1/4 h-full bg-cover bg-center relative hover:w-1/3 hover:h-auto transition-all duration-300"
        style={{ backgroundImage: `url(${portfolio})` }}
      >
        <h1 className="md:text-2xl lg:text-4xl text-white mt-4 ml-6">Portfolio</h1>
      </div>
      <div
        className="w-1/4 h-full bg-cover bg-center relative hover:w-1/3 hover:h-auto transition-all duration-300"
        style={{ backgroundImage: `url(${applicants})` }}
      >
        <h1 className="md:text-2xl lg:text-4xl text-white mt-4 ml-6">Applicants</h1>
      </div>
    </div>
  </div>
</div>

          {/*
          <div className="relative top-[500px] w-[70%] mx-auto h-[600px] p-10 rounded-2xl">
            <h1 className="text-3xl">Frequently Asked Questions</h1>
            <div className="flex flex-col h-full justify-around">
              <div className="bg-white h-24 w-full rounded-xl text-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  quis aperiam, hic veniam aut est ea consequuntur dolorem
                  laborum dignissimos?
                </p>
              </div>
              <div className="bg-white h-24 w-full rounded-xl text-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  quis aperiam, hic veniam aut est ea consequuntur dolorem
                  laborum dignissimos?
                </p>
              </div>
              <div className="bg-white h-24 w-full rounded-xl text-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  quis aperiam, hic veniam aut est ea consequuntur dolorem
                  laborum dignissimos?
                </p>
              </div>
              <div className="bg-white h-24 w-full rounded-xl text-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  quis aperiam, hic veniam aut est ea consequuntur dolorem
                  laborum dignissimos?
                </p>
              </div>
            </div>
          </div>
          */}

<div className="relative top-[0px] w-[60%] mx-auto h-[600px] p-10 rounded-2xl flex items-center">
  <div className="w-2/3 mr-10">
  <img
  src={resume2}
  alt="Construct your image"
  className="rounded-lg"
  style={{ maxWidth: '500px', maxHeight: '350px', width: 'auto', height: 'auto' }}
/>
  </div>
  <div className="w-2/3">
  <div className=" rounded-xl p-6">
  <h1 className="text-3xl mb-4 text-indigo-500 font-bold">Construct Your Resume</h1>
      <h2 className="text-xl font-semibold mb-4 leading-relaxed">Applicant Profile is all you need to have a good resume. You don’t have to worry about the formatting or layout. We take care that for you. All you need to do is choose a template and finalize your inputs and we will handle it.</h2>
      <button className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-black hover:text-white">
        Try it
      </button>
    </div>
  </div>
</div>




<div className="relative top-[100px] w-[60%] mx-auto h-[600px] p-10 rounded-2xl flex items-center">
  <div className="w-2/3 pr-12">
    <div className="rounded-xl p-6">
      <h1 className="text-3xl mb-4 text-indigo-500 font-bold">Choose Your Portfolio</h1>
      <h2 className="text-xl font-semibold mb-4 leading-relaxed">Just like in resume, we create your portfolio based on your Applicant Profile. You don’t have to worry about design and layout. We will handle that for you. We already have designs that will surely fit to your liking!</h2>
      <button className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-black hover:text-white">
        Try it
      </button>
    </div>
  </div>
  <div className="w-1/3 ml-6">
  <img
  src={portfolio2}
  alt="Construct your image"
  className="rounded-lg"
  style={{ maxWidth: '500px', maxHeight: '350px', width: 'auto', height: 'auto' }}
/>
  </div>
</div>




<div className="relative top-[150px] w-[60%] mx-auto h-[600px] p-10 rounded-2xl flex items-center">
  <div className="w-2/3 mr-10">
    <img
      src={applicants2}
      alt="Construct your image"
      className="rounded-lg"
      style={{ maxWidth: '500px', maxHeight: '350px', width: 'auto', height: 'auto' }}
    />
  </div>
  <div className="w-2/3">
    <div className="rounded-xl p-6">
      <h1 className="text-3xl mb-4 text-indigo-500 font-bold">Look For Applicants</h1>
      <h2 className="text-xl font-semibold mb-4 leading-relaxed">Are you an employer? Create an Employer Profile so that you can reach out to applicants. You can choose depending on what skills or positions you are looking for and view their profile, resume, or portfolio.</h2>
      <button className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-black hover:text-white">
        Try it
      </button>
    </div>
  </div>
</div>



          
        </div>
        <Footer/>
      </>
    </div>
  );
}

export default NewLanding;
