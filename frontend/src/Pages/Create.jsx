import React from "react";
import Footer from "../Components/Footer";
import fb from "../images/fb.png";
import yt from "../images/yt.png";
import twt from "../images/x.webp";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
const placeholderImage =
  "https://imgs.search.brave.com/q02hpLETIRmEBEpeaZkCKOUDubZ65X3ccxNLb1WxvY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"; // Provide your placeholder image URL here
import { FaCamera } from "react-icons/fa";
import AddSocial from "../Modals/Create Profile/Addsocial";
import AddIndustry from "../Modals/Create Profile/Addindustry";
import AddSkill from "../Modals/Create Profile/Addskill";
import { updateAccountProfileValues } from "../utils/updateAccountProfileValues";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

function CreateApplicantProfilepage() {
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

  //industry
  const [industries, setIndustries] = useState([]);
  const [isAddIndustryModalOpen, setAddIndustryModalOpen] = useState(false);
  const [industrySuggestions] = useState([
    "Web Developer",
    "Game Developer",
    "Graphic Designer",
    "Software Developer",
    "Video Game Developer",
    "CyberSecurity",
    "Artificial Intelligence and Machine Learning",
    "Mobile App Development",
  ]);
  const onSubmitIndustries = (formData) => {
    setIndustries([...industries, formData]);
    closeAddIndustryModal();
  };

  const openAddIndustryModal = () => {
    setAddIndustryModalOpen(true);
  };

  const closeAddIndustryModal = () => {
    setAddIndustryModalOpen(false);
  };
  const editIndustry = (index, industry) => {
    const updatedIndustries = [...industries];
    updatedIndustries[index] = industry;
    setIndustries(updatedIndustries);
  };

  const deleteIndustry = (index) => {
    const updatedIndustries = [...industries];
    updatedIndustries.splice(index, 1);
    setIndustries(updatedIndustries);
  };

  //end

  //skill
  const [isAddSkillModalOpen, setAddSkillModalOpen] = useState(false);

  const openAddSkillModal = () => {
    setAddSkillModalOpen(true);
  };

  const closeAddSkillModal = () => {
    setAddSkillModalOpen(false);
  };

  const [skillSuggestions, setSkillSuggestions] = useState([
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "React",
    "Node.js",
    "Ruby",
  ]);

  const onSubmitSkills = (formData) => {
    setSkills([...skills, formData]);
    closeAddSkillModal();
  };

  const editSkill = (index, skill) => {
    const updatedSkills = [...skillSuggestions];
    updatedSkills[index] = skill;
    setSkillSuggestions(updatedSkills);
  };
  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  //end

  //getting all inputs
  let userObj = JSON.parse(localStorage.getItem("user"));
  let userId = userObj.id;
  let userEmail = userObj.email;
  let userAccountType = userObj.accountType;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState(userEmail);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setInputs({
      accountId: userId,
      firstName: fName,
      lastName: lName,
      email: email,
      contactNum,
      address: `${city}, ${country}`,
      bio: bio,
      socialLinks,
      skills,
      preferredCareer: industries,
    });
  }, [
    fName,
    lName,
    email,
    contactNum,
    city,
    country,
    bio,
    socialLinks,
    skills,
    industries,
  ]);

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

  const updateSkillsState = (index, value) => {
    setSkills((skills) => {
      const newSkills = [...skills];
      newSkills[index] = value;
      return newSkills;
    });
  };

  const goback = () => {
    navigate("/");
  };

  const createProfile = () => {
    console.log(inputs);
    axios
      .post("/api/applicantprofile/create", inputs, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status == true) {
          toast.success(res.data.message);
          updateAccountProfileValues(
            res.data._id,
            "applicant",
            userAccountType,
            userEmail
          );
          navigate("/editprofile");
        }
        if (res.data.status == false) {
          toast.error("Not Inserted");
        }
      })
      .catch((err) => {
        toast.success(err.response.data.message);
        console.log(err.response.data.errorMessage);
      });
  };

  return (
    <div className="bg-gray-100">
      <NavbarLoggedIn />
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex h-9/12 container mx-auto space-x-4 w-1/2">
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
                      <span className="text-blue-300 text-lg">Applicant</span>
                    </h1>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex flex-col w-full">
                      <h1 className="text-lg">First Name*</h1>
                      <input
                        type="text"
                        name="name"
                        id=""
                        className="text-base border-2 border-[#444B88] p-2"
                        onChange={(e) => setFName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <h1 className="text-lg">Last Name*</h1>
                      <input
                        type="text"
                        name="name"
                        id=""
                        className="text-base border-2 border-[#444B88] p-2"
                        onChange={(e) => setLName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Email Address*</h1>
                    <input
                      type="text"
                      name="name"
                      value={email}
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Contact Number*</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      onChange={(e) => setContactNum(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">City*</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Country/Region*</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      onChange={(e) => setCountry(e.target.value)}
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
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>

                  <div className=" border-2 py-2 border-[#444B88] flex flex-col items-center">
                    <div className="flex flex-col items-center">
                      {" "}
                      {socialLinks.map((link, index) => (
                        <div
                          key={index}
                          className="flex items-center py-2 justify-center"
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
                            <button onClick={() => deleteSocialLink(index)}>
                              <IoClose size={30} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="p-2 px-5 bg-[#8B95EE] w-1/3"
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

                  <div className="border-2 border-[#444B88] flex py-2 flex-col justify-center items-center gap-2">
                    <div className="flex gap-2 items-center flex-wrap max-w-full p-1">
                      {industries.map((industry, index) => (
                        <div key={index} className="items-center">
                          <div className="flex text-center bg-[#BAD2FF] p-2 rounded-full w-auto">
                            <p className="whitespace-nowrap">{industry}</p>
                            <button onClick={() => deleteIndustry(index)}>
                              <IoClose size={25} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      className="p-2 px-5 bg-[#8B95EE]"
                      onClick={openAddIndustryModal}
                    >
                      + Add Industries
                    </button>
                  </div>

                  {isAddIndustryModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                      <div>
                        {/* {add Industries`2} */}
                        <AddIndustry
                          onClose={closeAddIndustryModal}
                          suggestions={industrySuggestions}
                          onSubmit={onSubmitIndustries}
                        />
                      </div>
                    </div>
                  )}
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
                  <div className="w-full h-full mt-5 ">
                    <div className="border-2 border-[#444B88] p-1">
                      <div className="flex flex-col justify-center items-center w-full gap-1">
                        <h1 className="text-2xl ">Skills</h1>
                        <div className="flex flex-col items-center">
                          {" "}
                          {skills.map((skill, index) => (
                            <div key={index} className="">
                              <div className="flex items-center gap-2">
                                <p className="text-lg">{skill}</p>
                                <button onClick={() => deleteSkill(index)}>
                                  <IoClose size={20} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-2 py-1 px-5 mt-5 bg-[#8B95EE] border-[#444B88]">
                          <h1 onClick={openAddSkillModal}>+ Add Skills</h1>
                        </div>

                        {isAddSkillModalOpen && (
                          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-md">
                              {/* {add Skills`3} */}
                              <AddSkill
                                onClose={closeAddSkillModal}
                                suggestions={skillSuggestions}
                                onSubmit={onSubmitSkills}
                              />
                            </div>
                          </div>
                        )}
                        <div className="flex flex-wrap"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between w-9/12 mb-2">
                    <button className="text-lg border border-black px-2">
                      Cancel
                    </button>
                    <button
                      className="text-lg bg-[#8B95EE] border border-[#444B88] hover:bg-blue-600 px-2"
                      onClick={createProfile}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default CreateApplicantProfilepage;
