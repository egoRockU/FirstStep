import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import { FaCamera } from "react-icons/fa";
import React, { useState } from "react";
const placeholderImage =
  "https://imgs.search.brave.com/q02hpLETIRmEBEpeaZkCKOUDubZ65X3ccxNLb1WxvY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"; // Provide your placeholder image URL here
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import AddSocial from "../Modals/EditEmployer Profile/Addsocial";

function Editemployerabout() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const navigate = useNavigate();

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
  const editSocialLink = (index) => {
    const editedSocialLinks = [...socialLinks];
    const newPlatform = prompt("Enter new platform:");
    const newLink = prompt("Enter new link:");
    if (newPlatform && newLink) {
      editedSocialLinks[index] = { platform: newPlatform, link: newLink };
      setSocialLinks(editedSocialLinks);
    }
  };
  const deleteSocialLink = (index) => {
    const updatedSocialLinks = [...socialLinks];
    updatedSocialLinks.splice(index, 1);
    setSocialLinks(updatedSocialLinks);
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
                    Edit your Profile{" "}
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
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">About</h1>
                  <textarea
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2 h-40"
                    placeholder="Tell me something about yourself.."
                    required
                  />
                </div>
                <div className=" border-2 h-16 border-[#444B88] flex justify-center items-center">
                    <div>
                      {" "}
                      {socialLinks.map((link, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between mt-4 "
                        >
                          <div>
                            {/* <a href="" onClick={() => editSocialLink(index)}>
                              {link.platform}
                            </a> */}
                          </div>
                          <div>
                            <a href={link.link}>{link.link}</a>
                          </div>
                          <div>
                            <button
                              onClick={() => editSocialLink(index)}
                            ></button>

                            <button
                              onClick={() => deleteSocialLink(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="p-2 px-5 bg-[#8B95EE]"
                      onClick={openAddSocialModal}
                    >
                      + Add Social link
                    </button>
                  </div>
                {isAddSocialModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-md">
                      {/* {add Social`1} */}
                       <AddSocial
                          onClose={closeAddSocialModal}
                          onSubmit={onSubmitSocialMedia}
                        />
                      </div>
                    </div>
                  )}

                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-lg">Website</h1>
                  <input
                    type="text"
                    className="text-base border-2 border-[#444B88] p-2 w-full"
                    required
                  />
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
                <div className="w-full h-full mt-5"></div>
                <div className="flex justify-around w-full pb-5">
                  <button className="text-lg border border-black py-1 px-1 rounded-sm">
                    Cancel
                  </button>
                  <button className="text-lg bg-[#8B95EE] border border-[#444B88] hover:bg-blue-600 py-1 rounded-sm">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Editemployerabout;
