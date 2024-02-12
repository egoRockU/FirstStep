import React from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import banner from "../images/signBg.jpg";
import man from "../images/tommy.png";
import twitter from "../images/twitter.png";
import ucc from '../images/ucclogo.webp'
import yt from '../images/yt.png'
import fb from '../images/fb.png'


function Profilepage() {
  return (
    <>
      <NavbarLoggedIn />
      <div className="container mx-auto mt-6">
        <img
          src={banner}
          alt="banner"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
      <div className="container mx-auto flex space-x-2">
      <div className="flex flex-col mb-60">
        <div className="flex mt-5 bg-white shadow-xl rounded-lg pb-8 ">
          <div className="w-5/6">
            <div className="space-y-4 ml-10">
              <div>
                <img
                  src={man}
                  alt="tommy"
                  className="w-60 h-60 rounded-full border-4 border-white md:mb-0 md:mr-4"
                />
              </div>
              <h1 className="text-2xl font-semibold">Micholo Pogi</h1>
              <a href="#">facebook ng pinapoging lalaki</a>
              <h1 className="text-lg font-semibold">Bio</h1>
              <p className="w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                perferendis et quam alias ipsum eligendi quasi illum nisi nihil
                quibusdam.
              </p>
              <div className="flex w-1/2 space-x-2">
                <button className="text-base bg-[#FFCECE] p-2 rounded-full hover:bg-stone-300">
                  Prefferedjob1
                </button>
                <button className="text-base bg-[#FFCECE] p-2 rounded-full hover:bg-stone-300">
                  Preferredjob2
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/6 space-y-10">
            <h2>Socials</h2>
            <img src={twitter} alt="" />
            <img src={yt} alt="" />
            <img src={fb} alt="" />
          </div>
        </div>

        <div class="container mx-auto h-64 mt-4 bg-white shadow-lg p-4 rounded-xl">
          <h1 class="text-2xl">Summary</h1>
          <div class="w-11/12 mx-auto h-5/6 bg-gray-200 rounded-xl overflow-hidden">
            <p className="text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit sint nisi dolor similique aperiam recusandae accusantium quos nulla expedita laboriosam.</p>
          </div>
        </div>

        <div className="container mx-auto p-4 bg-white shadow-lg mt-4 rounded-xl ">
          <h1 className="text-2xl m-5">Academic Achievements</h1>
          <div className="flex flex-col items-center p-4 rounded-xl space-y-5">
            <div className="flex items-center w-1/2 justify-around">
                <img src={ucc} alt=""  className="w-24 h-24"/>
                <div className="flex flex-col space-y-2">
                <p className="text-2xl">School</p>
                <p className="text-lg">School addresshsdhakjhdsajkadshkjdas</p>
                </div>
            </div>
            <div className="flex items-center w-1/2 justify-around">
                <img src={ucc} alt=""  className="w-24 h-24"/>
                <div className="flex flex-col space-y-2">
                <p className="text-2xl">School</p>
                <p className="text-lg">School addresshsdhakjhdsajkadshkjdas</p>
                </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto p-4 mt-4 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl m-5">Projects</h2>
            <div className="flex">
            <div className=" w-3/4 mx-auto flex justify-around">
                <div className="flex flex-col items-center space-y-3">
                <img src={ucc} alt="" className="w-28 h-28"/>
                <h1 className="text-xl">Project</h1>
                </div>
                <div className="flex flex-col items-center space-y-3">
                <img src={ucc} alt="" className="w-28 h-28"/>
                <h1 className="text-xl">Project</h1>
                </div>
                <div className="flex flex-col items-center space-y-3">
                <img src={banner} alt="" className="w-28 h-28"/>
                <h1 className="text-xl">Project</h1>
                </div>
                <div className="flex flex-col items-center space-y-3">
                <img src={banner} alt="" className="w-28 h-28"/>
                <h1 className="text-xl">Project</h1>
                </div>
            </div>
            </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-4 mb-60 text-center">
        <h2 className="text-2xl">Certificates and Achievements</h2>
        <div className="p-4 flex flex-col items-center h-1/3 justify-around">
            <img src={ucc} alt="" className="w-24 h-24" />
            <img src={ucc} alt="" className="w-24 h-24" />
            <img src={ucc} alt="" className="w-24 h-24" />
        </div>
      </div>
      </div>
    </>
  );
}

export default Profilepage;
