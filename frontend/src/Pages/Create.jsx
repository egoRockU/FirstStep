import React from "react";
import logo from "../images/logo.png";
import Footer from "../Components/Footer";
import yt from "../images/fb.png";
import fb from "../images/yt.png";
import twitter from "../images/x.webp";
import { useState } from "react";
const placeholderImage =
  "https://imgs.search.brave.com/q02hpLETIRmEBEpeaZkCKOUDubZ65X3ccxNLb1WxvY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"; // Provide your placeholder image URL here

function Profilepage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedBanner(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #87cefa, #336699)",
      }}
    >
      <div className="h-[1200px] ">
        <div className="flex h-9/12 container mx-auto space-x-4">
          <div className="h-full w-full">
            <div className="w-full" style={{ position: "relative" }}>
              <div>
                <input
                  type="file"
                  id="imageInputbanner"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleBannerChange}
                />
                <label
                  htmlFor="imageInputbanner"
                  className="cursor-pointer mt-10"
                >
                  <img
                    src={selectedBanner}
                    alt=""
                    className="w-full h-60 rounded-xl  bg-blue-200"
                  />
                </label>
                {!selectedBanner && (
                  <button
                    onClick={() =>
                      document.getElementById("imageInputbanner").click()
                    }
                    className="absolute cursor-pointer text-lg bg-blue-400 p-2 px-4 rounded-full hover:bg-blue-600"
                    style={{ zIndex: 1, bottom: 20, right: 30 }}
                  >
                    Select Image
                  </button>
                )}
              </div>
            </div>

            <div className="bg-white h-full rounded-xl">
              <div className="flex">
                <div className="p-5 w-3/4 space-y-5">
                  <div>
                    <h1 className="text-xl font-semibold">Edit Profile</h1>
                  </div>
                  <div className="flex space-x-4">
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">First Name</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-b-2 border-black p-2"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Last Name</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-b-2 border-black p-2"
                    />
                  </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Email</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-b-2 border-black p-2"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">City</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-b-2 border-black p-2"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Address</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-b-2 border-black p-2"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Contact Number</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-b-2 border-black p-2"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Bio</h1>
                    <textarea
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-b-2 border-black p-2 h-40"
                    />
                  </div>
                  <div className="flex w-1/2">
                    <img src={twitter} alt="Logo" className="w-6 h-6 mr-2" />
                    <input
                      type="text"
                      className="outline-none flex-grow border-b-2 border-black"
                    />
                  </div>
                  <div className="flex w-1/2">
                    <img src={yt} alt="Logo" className="w-6 h-6 mr-2" />
                    <input
                      type="text"
                      className="outline-none flex-grow border-b-2 border-black"
                    />
                  </div>
                  <div className="flex w-1/2">
                    <img src={fb} alt="Logo" className="w-6 h-6 mr-2" />
                    <input
                      type="text"
                      className="outline-none flex-grow border-b-2 border-black"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl">Skills</h1>
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        className="border-b-2 border-black p-2"
                      />
                      <input
                        type="text"
                        className="border-b-2 border-black p-2"
                      />
                      <input
                        type="text"
                        className="border-b-2 border-black p-2"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-1/4 flex justify-center">
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <label htmlFor="imageInput" className="cursor-pointer mt-10">
                    <img
                      src={selectedImage || placeholderImage}
                      alt=""
                      className="w-60 h-60 rounded-full border-4 border-black"
                    />
                  </label>
                  {!selectedImage && (
                    <div
                      onClick={() =>
                        document.getElementById("imageInput").click()
                      }
                      className="inset-0 cursor-pointer"
                      style={{ zIndex: 1 }}
                    ></div>
                  )}
                </div>
              </div>
              <div className="w-2/6 mx-auto flex justify-between items-end p-6 mt-10">
                <button className="text-lg bg-blue-200 rounded-full p-2 px-4 hover:bg-blue-600">
                  Go back
                </button>
                <button className="text-lg bg-blue-200 rounded-full p-2 px-4 hover:bg-blue-600">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profilepage;
