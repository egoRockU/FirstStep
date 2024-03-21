import React from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import resume from "../images/resume.png";
import { useLocation } from "react-router-dom";

function Generatedresume() {
  const location = useLocation();
  const { resumeInfo, resumeTitle } = location.state;

  console.log(resumeInfo);
  console.log(resumeTitle);

  return (
    <>
      <div className="bg-white">
        <NavbarLoggedIn />
        <div className="max-w-screen-2xl mx-auto px-4 pt-32 pb-24">
          <div className="w-5/6 mx-auto flex flex-col">
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-center py-3">
                <h1 className="text-2xl font-bold text-[#444b88]">RESUME</h1>
              </div>
              <div className="w-full">
                <img src={resume} alt="" className="w-2/3 mx-auto" />
              </div>
              <div className="w-full flex justify-center py-5">
                <button className="border border-[#444b88] py-1 px-4 font-bold text-base text-[#444b88] hover:bg-[#bad2ff]">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Generatedresume;
