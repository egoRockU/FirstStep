import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";

function Choose() {
  const navigate = useNavigate();
  const clickapplicant = (e) => {
    e.preventDefault();
    navigate("/create");
  };

  const clickemployer = (e) => {
    e.preventDefault();
    navigate("/createemployer");
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full h-full lg:w-[65%] lg:h-[75%] bg-white flex flex-col pt-20 lg:pt-0">
          <div className="w-[90%] mx-auto lg:w-full flex flex-col justify-center items-center h-[30%] gap-5">
            <h1 className="text-3xl text-blue-500">Create Profile</h1>
            <p>Choose what type of profile you want to create.</p>
          </div>
          <div className=" h-full lg:h-[70%]">
            <div className="flex w-full h-full p-3">
              <div className="flex flex-col lg:flex-row w-full lg:w-[80%] mx-auto">
                <div
                  className="w-full lg:w-1/2 h-[80%] flex flex-col justify-center items-center text-blue-500 border-[#444B88] border hover:bg-[#8B95EE] hover:text-white lg:hover:w-[75%] duration-150"
                  onClick={clickapplicant}
                >
                  I am an <span className="text-3xl">APPLICANT</span>
                </div>
                <div
                  className="w-full lg:w-1/2 h-[80%] flex flex-col justify-center items-center text-blue-500 border-[#444B88] border hover:bg-[#8B95EE] hover:text-white lg:hover:w-[75%] duration-150"
                  onClick={clickemployer}
                >
                  I am an <span className="text-3xl">Employer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Choose;
