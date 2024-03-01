import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import { FaCamera } from "react-icons/fa";
import React, { useState } from "react";
const placeholderImage =
  "https://imgs.search.brave.com/q02hpLETIRmEBEpeaZkCKOUDubZ65X3ccxNLb1WxvY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"; // Provide your placeholder image URL here
import Footer from "../Components/Footer";
import AddSocial from "../Modals/Create Profile/Addsocial";

function CreateEmployerpage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

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

//social
const [isAddSocialModalOpen, setAddSocialModalOpen] = useState(false); 
const [socialLinks, setSocialLinks] = useState([]);  
const onSubmitSocialMedia = (formData) => {
  
  if (!formData.platform || !formData.link) {
    alert("Please provide both platform and link");
    return;
  }
  console.log("Submitted formData:", formData);
  setSocialLinks([...socialLinks, formData]);
  closeAddSocialModal();
};
const openAddSocialModal = () => {
  setAddSocialModalOpen(true);
  };

  const closeAddSocialModal = () => {
    setAddSocialModalOpen(false);
 
  };



  return (
    <>
      <div className="bg-gray-200">
        <NavbarLoggedIn />
        <div className="max-w-screen-2xl mx-auto px-4 w-1/2">
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
                  className="w-full h-60 bg-blue-200"
                />
              </label>
              {!selectedBanner && (
                <button
                  onClick={() =>
                    document.getElementById("imageInputbanner").click()
                  }
                  className="absolute cursor-pointer text-lg bg-white p-2 rounded-full"
                  style={{ zIndex: 1, bottom: 20, right: 30 }}
                >
                  <FaCamera />
                </button>
              )}
            </div>
          </div>
          <div className="bg-white h-full mb-10 shadow-lg">
            <div className="flex">
              <div className="p-5 w-3/4 space-y-5">
                <div>
                  <h1 className="text-xl">
                    Initialize your Profile{" "}
                    <span className="text-blue-300 text-lg">Employer</span>
                  </h1>
                </div>
                <div className="flex space-x-4">
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">First Name</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Last Name</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Email Address</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Contact Number</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">City</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Country/Region</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Company Name</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Bio</h1>
                  <textarea
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2 h-40"
                    placeholder="Tell me something about yourself.."
                    required
                  />
                </div>
                <div className="w-full border-2 h-16 border-[#444B88] flex justify-center items-center">
                  <button className="p-2 px-5 bg-[#8B95EE]"  onClick={openAddSocialModal}>
                    + Add Social link
                  </button>
                </div>
                {isAddSocialModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">
            <AddSocial
              onClose={closeAddSocialModal}
              onSubmit={onSubmitSocialMedia} />
                      </div>
                    </div>
                  )}
                <div className="flex flex-col justify-center items-start">
                    <h1 className="text-lg">Website</h1>
                  <input type="text" className="text-base border-2 border-[#444B88] p-2 w-full" required />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-1/4">
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
                      className="w-40 h-40 rounded-full border-4 border-black"
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
                  <div className="w-full h-full mt-5">
                  </div>
                  <div className="flex justify-between w-9/12 mb-2">
                    <button className="text-lg border border-black px-2">
                      Cancel
                    </button>
                    <button
                      className="text-lg bg-[#8B95EE] border border-[#444B88] hover:bg-blue-600 px-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default CreateEmployerpage;
