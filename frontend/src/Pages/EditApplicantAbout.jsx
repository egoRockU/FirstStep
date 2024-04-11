import Footer from "../Components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
const placeholderImage =
  "https://imgs.search.brave.com/q02hpLETIRmEBEpeaZkCKOUDubZ65X3ccxNLb1WxvY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"; // Provide your placeholder image URL here
import { FaCamera } from "react-icons/fa";
import AddSocial from "../Modals/EditApplicant Profile/Addsocial";
import AddIndustry from "../Modals/EditApplicant Profile/Addindustry";
import AddSkill from "../Modals/EditApplicant Profile/Addskill";
import industrySuggestions from "../suggestions/industries.json";
import skillSuggestions from "../suggestions/skills.json";
import { toast } from "react-toastify";
import {
  updateProfileImage,
  updateBannerImage,
} from "../utils/updateImageUpload";
import {
  SocialCard,
  IndustriesCard,
  SkillsCard,
} from "../Components/Aplicantcardcomponent";
import { RiCloseFill } from "react-icons/ri";
import DeletePortfoliolink from "../Modals/DeletePortfoliolink";
import DeleteResumeLink from "../Modals/DeleteResumelink";

function CreateApplicantProfilepage() {
  const profileId = JSON.parse(localStorage.getItem("user")).profileId;
  const domain = window.location.origin;
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

  useEffect(() => {
    getUserProfile();
  }, []);

  const [showDeletePortfolioModal, setShowDeletePortfolioModal] =
    useState(false);

  const toggleDeletePortfolioModal = () => {
    setShowDeletePortfolioModal(!showDeletePortfolioModal);
  };
  const [showDeleteResumeModal, setShowDeleteResumeModal] = useState(false);

  // Function to toggle the visibility of the delete resume modal
  const toggleDeleteResumeModal = () => {
    setShowDeleteResumeModal(!showDeleteResumeModal);
  };
  //social
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

  const deleteSocialLink = (index) => {
    const updatedSocialLinks = [...socialLinks];
    updatedSocialLinks.splice(index, 1);
    setSocialLinks(updatedSocialLinks);
  };

  //industry
  const [industries, setIndustries] = useState([]);
  const [isAddIndustryModalOpen, setAddIndustryModalOpen] = useState(false);
  const onSubmitIndustries = (formData) => {
    if (!formData) {
      toast.error("Please provide Industry");
      return;
    }
    console.log("Submitted formData:", formData);
    setIndustries([...industries, formData]);
    closeAddIndustryModal();
  };

  const openAddIndustryModal = () => {
    setAddIndustryModalOpen(true);
  };

  const closeAddIndustryModal = () => {
    setAddIndustryModalOpen(false);
  };

  const deleteIndustry = (index) => {
    const updatedIndustries = [...industries];
    updatedIndustries.splice(index, 1);
    setIndustries(updatedIndustries);
  };

  //end

  //skill
  const [isAddSkillModalOpen, setAddSkillModalOpen] = useState(false);
  const [skills, setSkills] = useState([]);

  const openAddSkillModal = () => {
    setAddSkillModalOpen(true);
  };

  const closeAddSkillModal = () => {
    setAddSkillModalOpen(false);
  };

  const onSubmitSkills = (formData) => {
    if (!formData) {
      toast.error("Please provide Skills");
      return;
    }
    setSkills([...skills, formData]);
    closeAddSkillModal();
  };

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  //end

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const imageURL = await updateProfileImage(
          file,
          selectedImage,
          setSelectedImage
        );
        setSelectedImage(imageURL);
      } catch (error) {
        console.error("Error updating profile image:", error);
      }
    }
  };

  const handleBannerChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const bannerURL = await updateBannerImage(
          file,
          selectedBanner,
          setSelectedBanner
        );
        setSelectedBanner(bannerURL);
      } catch (error) {
        console.error("Error updating banner image:", error);
      }
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const goback = () => {
    navigate(-1);
  };

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [resumeId, setResumeId] = useState();
  const [resumeLink, setResumeLink] = useState("");
  const [portfolioId, setPortfolioId] = useState();
  const [portfolioLink, setPortfolioLink] = useState("");

  const getUserProfile = () => {
    axios
      .post(
        "/api/applicantprofile/retrieveone",
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
        setBio(profileObj.bio);
        setAbout(profileObj.about);
        setSocialLinks(profileObj.socialLinks);
        setSkills(profileObj.skills);
        setIndustries(profileObj.preferredCareer);
        setSelectedImage(profileObj.profileImg);
        setSelectedBanner(profileObj.banner);
        setResumeId(profileObj.resume.resumeId);
        setResumeLink(
          `${domain}/resume/${profileObj.resume.templateId}/${profileObj.resume.resumeId}`
        );
        setPortfolioId(profileObj.portfolio.portfolioId);
        setPortfolioLink(
          `${domain}/portfolio/${profileObj.portfolio.templateId}/${profileObj.portfolio.portfolioId}`
        );
      });
  };

  const updateMainInfo = () => {
    const input = {
      _id: profileId,
      set: {
        firstName: fName,
        lastName: lName,
        fullName: `${fName} ${lName}`,
        email,
        contactNum,
        address: `${city}, ${country}`,
        bio,
        about,
        socialLinks,
        skills,
        preferredCareer: industries,
        profileImg: selectedImage,
        banner: selectedBanner,
      },
    };

    axios
      .post("/api/applicantprofile/update", input, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.message);
        navigate("/editprofile");
      });
  };

  const onSave = () => {
    updateMainInfo();
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
                    className="w-full h-60 bg-blue-200 object-cover"
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
                      <span className="text-blue-300 text-lg">Applicant</span>
                    </h1>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex flex-col w-full">
                      <h1 className="text-lg">First Name*</h1>
                      <input
                        type="text"
                        name="name"
                        value={fName}
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
                        value={lName}
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
                      value={contactNum}
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
                      value={city}
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
                      value={country}
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg">Bio</h1>
                    <textarea
                      type="text"
                      name="name"
                      value={bio}
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      placeholder="Tell me something about yourself.."
                      onChange={(e) => setBio(e.target.value)}
                      rows={5}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-lg">About</h1>
                    <textarea
                      type="text"
                      name="name"
                      value={about}
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      placeholder="Tell me something about yourself.."
                      rows={10}
                      required
                      onChange={(e) => setAbout(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full ">
                    <h1 className="text-lg">Social</h1>
                    <div className=" border-2 border-[#444B88] flex py-2 flex-col justify-center items-center">
                      <div className="flex flex-col items-center">
                        {" "}
                        {/* social card*/}
                        <SocialCard
                          socialLinks={socialLinks}
                          onDelete={deleteSocialLink}
                        />
                      </div>
                      <button
                        className="py-1 px-5 bg-[#8B95EE]"
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
                  </div>
                  <div className="flex flex-col w-full">
                    {/* TODO Fix industries overlapping items */}
                    <h1 className="text-lg">Industries</h1>
                    <div className="border-2 border-[#444B88] flex py-2 flex-col justify-center items-center gap-2">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {/* industries card*/}
                        <IndustriesCard
                          industries={industries}
                          onDelete={deleteIndustry}
                        />
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
                        <div className="bg-white p-4 rounded-md">
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
                  <div className="flex flex-col w-full gap-2 pt-2">
                    <div className="flex flex-col">
                      <div>
                        <h1 className="text-xl">FirstStep Resume Link</h1>
                      </div>
                      <div>
                        <div className="flex w-full border-2 border-[#444b88]">
                          <a
                            href={resumeId ? resumeLink : "#"}
                            className="w-full h-10 px-1 outline-none text-black text-base items-center flex justify-center overflow-hidden"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resumeId
                              ? resumeLink
                              : "You have no generated resume yet..."}
                          </a>

                          <div
                            className="flex items-center justify-end px-1 cursor-pointer"
                            onClick={resumeId ? toggleDeleteResumeModal : null}
                          >
                            <RiCloseFill size={25} />
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <h1 className="text-xl">FirstStep Portfolio Link</h1>
                      </div>
                      <div>
                        <div className="flex w-full border-2 border-[#444b88]">
                          <a
                            href={portfolioId ? portfolioLink : "#"}
                            className="flex items-center justify-center w-full h-10 px-1 outline-none text-black text-base overflow-hidden"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {portfolioId
                              ? portfolioLink
                              : "You have no generated portfolio yet..."}
                          </a>

                          <div
                            className="flex items-center justify-end px-1 cursor-pointer"
                            onClick={
                              portfolioId ? toggleDeletePortfolioModal : null
                            }
                          >
                            <RiCloseFill size={25} />
                          </div>
                        </div>{" "}
                      </div>
                    </div>
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
                      className="w-40 h-40 rounded-full border-4 border-black object-cover
                      "
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
                    <div className="flex flex-col justify-center items-center w-full">
                      <h1 className="text-2xl ">Skills</h1>
                      <div className="border-2 p-3 px-5 border-[#444B88]">
                        <div>
                          {" "}
                          {/* skill  card*/}
                          <SkillsCard skills={skills} onDelete={deleteSkill} />
                        </div>
                        <div className="border-2 p-3 px-5 bg-[#8B95EE] border-[#444B88]">
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
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between w-9/12 mb-2">
                    <button
                      className="text-lg border border-black px-2"
                      onClick={goback}
                    >
                      Cancel
                    </button>
                    <button
                      className="text-lg bg-[#8B95EE] border border-[#444B88] hover:bg-blue-600 px-2"
                      onClick={onSave}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {showDeletePortfolioModal && (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-4 rounded-md">
                  <DeletePortfoliolink
                    profileId={profileId}
                    onClose={toggleDeletePortfolioModal}
                    link={portfolioLink}
                  />
                </div>
              </div>
            )}
          </div>
          {showDeleteResumeModal && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-4 rounded-md">
                <DeleteResumeLink
                  profileId={profileId}
                  onClose={toggleDeleteResumeModal}
                  link={resumeLink}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CreateApplicantProfilepage;
