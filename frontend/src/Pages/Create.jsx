import React from "react";
import Man from "../images/tommy.png";
import banner from "../images/signBg.jpg";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import google from "../images/google.png";

function Create() {
  return (
    <>
      <NavbarLoggedIn />
      <div className="container mx-auto mt-2">
        <img
          src={banner}
          alt=""
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>
      <div className="border-2 rounded-lg flex container mx-auto mb-28 shadow-lg">
        <div className="w-1/3 p-4 flex flex-col items-start">
          <div>
            <img
              src={Man}
              alt=""
              className="w-60 h-60 rounded-full border-4 border-white mb-4 md:mb-0 md:mr-4"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">John Doe</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              euismod nunc a purus varius convallis.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <img src={google} alt="Facebook" className="w-8 h-8" />
              <span>Facebook</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={google} alt="Twitter" className="w-8 h-8" />
              <span>Twitter</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={google} alt="Instagram" className="w-8 h-8" />
              <span>Instagram</span>
            </div>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-2">
              <div className="w-32 h-16 rounded-full flex items-center justify-center">
                <span className="text-small font-medium">Preferred Jobs</span>
              </div>
            </div>
            <button className="text-2xl bg-[#FFCECE] w-full rounded-full">
              +
            </button>
          </div>
        </div>
        <form className="w-2/3">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Summary</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                molestiae, nisi ipsum quibusdam earum quaerat saepe veniam ipsam
                eaque. Nulla eaque molestiae dolores laboriosam explicabo
                officia aliquam totam nam ducimus.
              </p>
            </div>
            <hr className="w-full border-gray-300 my-4" />
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Academic Achievements</h3>
              <input
                type="file"
                accept="image/*"
                className="border rounded-lg p-2 w-full"
              />
            </div>
            <hr className="w-full border-gray-300 my-4" />
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Projects</h3>
              <input type="file" className="border rounded-lg p-2 w-full" />
            </div>
            <hr className="w-full border-gray-300 my-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Certificate Achievements
              </h3>
              <input type="file" className="border rounded-lg p-2 w-full" />
            </div>
            <hr className="w-full border-gray-300 my-4" />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Create;
