import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import { FaCamera } from "react-icons/fa";
import React, { useState, useEffect } from "react";
const placeholderImage =
  "https://imgs.search.brave.com/q02hpLETIRmEBEpeaZkCKOUDubZ65X3ccxNLb1WxvY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"; // Provide your placeholder image URL here
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import AddSocial from "../Modals/EditEmployer Profile/Addsocial";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

function Editemployerabout() {
  const navigate = useNavigate();
  const profileId = JSON.parse(localStorage.getItem("user")).profileId;

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

  useEffect(() => {
    getUserProfile();
  }, []);

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
      toast.error("Please provide both platform and link");
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

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");

  const getUserProfile = () => {
    axios
      .post(
        "/api/employerprofile/retrieveone",
        { profileId },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        const profileObj = res.data;
        setFName(profileObj.firstName);
        setLName(profileObj.lastName);
        setEmail(profileObj.email);
        setContactNum(profileObj.contactNum);
        setCity(profileObj.address.split(",")[0]);
        setCountry(profileObj.address.split(", ")[1]);
        setCompanyName(profileObj.companyName);
        setBio(profileObj.bio);
        setAbout(profileObj.about);
        setSocialLinks(profileObj.socialLinks);
        setWebsite(profileObj.website);
      });
  };

  const updateMainInfo = () => {
    const input = {
      _id: profileId,
      set: {
        firstName: fName,
        lastName: lName,
        email,
        contactNum,
        address: `${city}, ${country}`,
        companyName,
        bio,
        socialLinks,
        website,
      },
    };

    axios
      .post("/api/employerprofile/update", input, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.message);
      });
  };

  const onSave = () => {
    updateMainInfo();
    navigate("/editemployer");
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
                      value={fName}
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      required
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Last Name</h1>
                    <input
                      type="text"
                      name="name"
                      value={lName}
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      required
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Email Address</h1>
                  <input
                    type="text"
                    name="name"
                    value={email}
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Contact Number</h1>
                  <input
                    type="text"
                    name="name"
                    value={contactNum}
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setContactNum(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">City</h1>
                  <input
                    type="text"
                    name="name"
                    value={city}
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Country/Region</h1>
                  <input
                    type="text"
                    name="name"
                    value={country}
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Company Name</h1>
                  <input
                    type="text"
                    name="name"
                    value={companyName}
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Bio</h1>
                  <textarea
                    type="text"
                    name="name"
                    value={bio}
                    id=""
                    className="text-base border-2 border-[#444B88] p-2 h-40"
                    placeholder="Tell me something about yourself.."
                    required
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">About</h1>
                  <textarea
                    type="text"
                    name="name"
                    value={about}
                    id=""
                    className="text-base border-2 border-[#444B88] p-2 h-40"
                    placeholder="Tell me something about yourself.."
                    required
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Social Links</h1>
                  <div className=" border-2 py-2 border-[#444B88] flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center">
                      {socialLinks.map((link, index) => (
                        <div
                          key={index}
                          className="flex items-center py-1 justify-between"
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
                              className="text-center"
                            ></button>

                            <button onClick={() => deleteSocialLink(index)}>
                              <IoMdClose size={25} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div> 
                  <button
                    className=" py-1 px-5 bg-[#8B95EE]"
                    onClick={openAddSocialModal}>
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
              </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-lg">Website</h1>
                  <input
                    type="text"
                    value={website}
                    className="text-base border-2 border-[#444B88] p-2 w-full"
                    required
                    onChange={(e) => setWebsite(e.target.value)}
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
                  <button
                    className="text-lg border border-black py-1 px-1 rounded-sm"
                    onClick={() => {
                      navigate("/editemployer");
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-lg bg-[#8B95EE] border border-[#444B88] hover:bg-blue-600 py-1 rounded-sm"
                    onClick={onSave}
                  >
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
