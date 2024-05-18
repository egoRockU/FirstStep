import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  ContactNumberInput,
  CityInput,
  CountryInput,
} from "../Components/Aplicantinput";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import profile from "../images/profilee.png";
import {
  SocialCard,
  IndustriesCard,
  SkillsCard,
} from "../Components/Aplicantcardcomponent";
import {
  EducationCard,
  CertificateCard,
  ActivitiesCard,
  ProjectsCard,
  AwardCard,
} from "../Components/Cardcomponents";
import industrySuggestions from "../suggestions/industries.json";
import skillSuggestions from "../suggestions/skills.json";
import AddSocial from "../Modals/EditApplicant Profile/Addsocial";
import AddIndustry from "../Modals/EditApplicant Profile/Addindustry";
import AddSkill from "../Modals/EditApplicant Profile/Addskill";
import Addeduc from "../Modals/Edit Profile/Addeducmodal";
import Addachievemodal from "../Modals/Edit Profile/Addachievemodal";
import Addprojects from "../Modals/Edit Profile/Addprojects";
import axios from "axios";
import AddAwards from "../Modals/Edit Profile/Addawards";
import AddCertificates from "../Modals/Edit Profile/Addcertificates";
import CharacterRef from "../Modals/CharacterRef";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { uploadImage } from "../utils/ImageReUpload";

function Createresume() {
  const profileId = JSON.parse(localStorage.getItem("user")).profileId;
  const navigate = useNavigate();

  const [personalInfoVisible, setPersonalInfoVisible] = useState(true);
  const [Educationvisible, setEducationvisible] = useState(false);
  const [Activitiesvisible, setActivitiesvisible] = useState(false);
  const [Projectsvisible, setProjectsvisible] = useState(false);
  const [Awardsvisible, setAwardsvisible] = useState(false);
  const [Certificatesvisible, setCertificatesvisible] = useState(false);
  const [Charactervisible, setCharactervisible] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getUserProfile();
  }, []);

  const togglePersonalInfoVisibility = () => {
    setPersonalInfoVisible(!personalInfoVisible);
  };

  const toggleEducationvisibility = () => {
    setEducationvisible(!Educationvisible);
  };

  const toggleActivitiesvisibility = () => {
    setActivitiesvisible(!Activitiesvisible);
  };

  const toggleProjectsvisibility = () => {
    setProjectsvisible(!Projectsvisible);
  };

  const toggleAwardsvisibility = () => {
    setAwardsvisible(!Awardsvisible);
  };

  const toggleCertificatesvisibility = () => {
    setCertificatesvisible(!Certificatesvisible);
  };

  const toggleCharactervisibility = () => {
    setCharactervisible(!Charactervisible);
  };

  const [formData, setFormData] = useState();
  const [formIndex, setFormIndex] = useState();

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

  //end

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

  //education
  const [educationData, setEducationData] = useState([]);
  const [showEducationModal, setShowEducationModal] = useState(false);

  const handleEducSubmit = (data) => {
    console.log(data);
    setEducationData((prevEducationData) => {
      const updatedEducationData = [...prevEducationData, data];
      return updatedEducationData;
    });
    setShowEducationModal(false);
    setEducationvisible(true);
  };

  const handleEducDelete = (index) => {
    const updatedEducationData = [...educationData];
    updatedEducationData.splice(index, 1);
    setEducationData(updatedEducationData);
  };

  const handleEducEdit = (index) => {
    const educationToEdit = educationData[index];
    setFormData(educationToEdit);
    setFormIndex(index);
    setShowEducationModal(true);
  };

  const editEducationData = (index, newValue) => {
    const updatedEducationData = [...educationData];
    updatedEducationData[index] = newValue;
    setEducationData(updatedEducationData);
  };

  //end

  //activities and involvements
  const [achievementsData, setAchievementsData] = useState([]);
  const [showAchievementModal, setShowAchievementModal] = useState(false);

  const handleSubmitAchieve = (formData) => {
    setAchievementsData((prevAchievementsData) => {
      const updatedAchievementsData = [...prevAchievementsData, formData];
      return updatedAchievementsData;
    });
    setShowAchievementModal(false);
    setActivitiesvisible(true);
  };

  const handleDeleteAchievement = (index) => {
    const updatedAchievements = [...achievementsData];
    updatedAchievements.splice(index, 1);
    setAchievementsData(updatedAchievements);
  };

  const handleEditAchievement = (index) => {
    const achievementToEdit = achievementsData[index];
    setFormData(achievementToEdit);
    setFormIndex(index);
    setShowAchievementModal(true);
  };

  const editAchievementsData = (index, newValue) => {
    const updatedAchievementsData = [...achievementsData];
    updatedAchievementsData[index] = newValue;
    setAchievementsData(updatedAchievementsData);
  };

  //end

  //projects
  const [projectsData, setProjectsData] = useState([]);
  const [showAddProjectsModal, setShowAddProjectsModal] = useState(false);

  const handleSubmitProjects = (formData) => {
    setProjectsData((prevProjectsData) => {
      const updatedProjectsData = [...prevProjectsData, formData];
      return updatedProjectsData;
    });
    setShowAddProjectsModal(false);
    setProjectsvisible(true);
  };

  const handleDeleteProjects = (index) => {
    const updatedProjects = [...projectsData];
    updatedProjects.splice(index, 1);
    setProjectsData(updatedProjects);
  };

  const handleEditProjects = (index) => {
    const projectToEdit = projectsData[index];
    setFormData(projectToEdit);
    setFormIndex(index);
    setShowAddProjectsModal(true);
  };

  const editProjectsData = (index, newValue) => {
    const updatedProjectsData = [...projectsData];
    updatedProjectsData[index] = newValue;
    setProjectsData(updatedProjectsData);
  };
  //end

  //awards
  const [awardData, setAwardData] = useState([]);
  const [showAwardModal, setShowAwardModal] = useState(false);

  const handleSubmitAward = (formData) => {
    setAwardData((prevAwardData) => {
      const updatedAwardsData = [...prevAwardData, formData];
      return updatedAwardsData;
    });
    setShowAwardModal(false);
    setAwardsvisible(true);
  };

  const handleDeleteAward = (index) => {
    const updatedAward = [...awardData];
    updatedAward.splice(index, 1);
    setAwardData(updatedAward);
  };

  const handleEditAward = (index) => {
    const awardToEdit = awardData[index];
    setFormData(awardToEdit);
    setFormIndex(index);
    setShowAwardModal(true);
  };

  const editAwardData = (index, newValue) => {
    const updatedAwardData = [...awardData];
    updatedAwardData[index] = newValue;
    setAwardData(updatedAwardData);
  };
  //end

  //certificate
  const [certData, setCertData] = useState([]);
  const [showCertModal, setShowCertModal] = useState(false);

  const handleSubmitCert = (formData) => {
    console.log("Cert form data:", formData);
    setCertData((prevCertData) => {
      const updatedCertData = [...prevCertData, formData];
      return updatedCertData;
    });
    setShowCertModal(false);
    setCertificatesvisible(true);
  };

  const handleDeleteCert = (index) => {
    const updatedCert = [...certData];
    updatedCert.splice(index, 1);
    setCertData(updatedCert);
  };

  const handleEditCert = (index) => {
    const certToEdit = certData[index];
    setFormData(certToEdit);
    setFormIndex(index);
    setShowCertModal(true);
  };

  const editCertData = (index, newValue) => {
    const updatedCertData = [...certData];
    updatedCertData[index] = newValue;
    setCertData(updatedCertData);
  };
  //end

  //awards
  const [charRefData, setCharRefData] = useState([]);
  const [showCharRefModal, setShowCharRefModal] = useState(false);

  const handleSubmitCharRef = (formData) => {
    setCharRefData((prevCharRefData) => {
      const updatedCharRefData = [...prevCharRefData, formData];
      return updatedCharRefData;
    });
    setShowCharRefModal(false);
    setCharactervisible(true);
  };

  const handleDeleteCharRef = (index) => {
    const updatedCharRef = [...charRefData];
    updatedCharRef.splice(index, 1);
    setCharRefData(updatedCharRef);
  };

  const handleEditCharRef = (index) => {
    const charRefToEdit = charRefData[index];
    setFormData(charRefToEdit);
    setFormIndex(index);
    setShowCharRefModal(true);
  };

  const editCharRefData = (index, newValue) => {
    const updatedCharRefData = [...charRefData];
    updatedCharRefData[index] = newValue;
    setCharRefData(updatedCharRefData);
  };
  //end
  const [imageFile, setImageFile] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    try {
      const selectedFile = event.target.files[0];
      setImageFile(selectedFile);

      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        setImage(imageUrl);
      }
    } catch (error) {
      console.error("Error handling file change:", error);
    }
  };
  //get user info
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
        setAbout(profileObj.about);
        setSocialLinks(profileObj.socialLinks);
        setSkills(profileObj.skills);
        setIndustries(profileObj.preferredCareer);
        setEducationData(profileObj.education);
        setAchievementsData(profileObj.activitiesAndInvolvements);
        setProjectsData(profileObj.projects);
        setAwardData(profileObj.awards);
        setCertData(profileObj.certs);
        setImage(profileObj.profileImg);
      });
  };
  const saveResumeInfo = async () => {
    try {
      const proceed = confirm(
        "Are you sure you want to use these values to be displayed on your resume?"
      );

      if (proceed) {
        let imageUrl = image;

        if (imageFile) {
          imageUrl = await uploadImage(imageFile);
        }

        const resumeInfo = {
          profileImg: imageUrl,
          firstName: fName,
          lastName: lName,
          email,
          contactNum,
          address: `${city}, ${country}`,
          about,
          socialLinks,
          skills,
          preferredCareer: industries,
          education: educationData,
          activitiesAndInvolvements: achievementsData,
          awards: awardData,
          certs: certData,
          projects: projectsData,
          characterReference: charRefData,
        };

        navigate("/chooseresume", { state: { resumeInfo } });
      }
    } catch (error) {
      console.error("Error saving resume info:", error);
    }
  };
  return (
    <>
      <div className="bg-gray-200">
        <NavbarLoggedIn />
        <div className="max-w-screen-2xl mx-auto px-4 pt-32 pb-24">
          <div className="flex flex-col mx-auto w-full lg:w-2/3 xl:w-1/2 bg-white px-4 py-3">
            <div className="text-center flex flex-col w-full justify-center py-4">
              <h1 className="text-2xl font-bold text-[#444B88]">
                Resume Builder
              </h1>
              <p className="italic">Finalize Your Information</p>
            </div>
            <div className="w-full overflow-hidden flex flex-col gap-10">
              <div className="border rounded-lg border-[#444b88] w-full flex flex-col justify-between">
                <div className="flex items-center justify-between px-4 py-3">
                  <h1 className="text-xl text-[#8B95EE]">
                    Personal Information
                  </h1>
                  {personalInfoVisible ? (
                    <IoIosArrowDropupCircle
                      onClick={() => togglePersonalInfoVisibility()}
                      size={25}
                      color="444b88"
                    />
                  ) : (
                    <IoIosArrowDropdownCircle
                      onClick={() => togglePersonalInfoVisibility()}
                      size={25}
                      color="444b88"
                    />
                  )}
                </div>
                {personalInfoVisible && (
                  <div className="flex flex-col w-full px-4 py-3 mx-auto">
                    <div className="flex flex-col xl:flex-row">
                      <div className="w-full lg:w-1/3 mx-auto flex justify-center">
                        <img
                          src={image ? image : profile}
                          alt=""
                          className=" w-40 h-40 lg:w-36 lg:h-36 xl:w-[80%] xl:h-[60%] border-2 border-black cursor-pointer rounded-full"
                          onClick={handleImageClick}
                        />
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                      <div className="w-[90%] mx-auto xl:w-3/4 pt-5">
                        <div className="flex flex-col xl:flex-row xl:gap-2">
                          <FirstNameInput
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                          />
                          <LastNameInput
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                          />
                        </div>
                        <EmailInput
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <ContactNumberInput
                          value={contactNum}
                          onChange={(e) => setContactNumber(e.target.value)}
                        />
                        <div className="flex flex-col xl:flex-row xl:gap-2">
                          <CityInput
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                          <CountryInput
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div>
                        <div>
                          <h1 className="text-md lg:text-xl text-[#444B88]">
                            Social Links
                          </h1>
                          <div className="border border-[#444B88] flex flex-col py-3">
                            <div className="flex flex-col items-center space-y-4">
                              <SocialCard
                                socialLinks={socialLinks}
                                onDelete={deleteSocialLink}
                              />
                              <button
                                className="py-1 px-5 bg-[#8B95EE] border border-[#444B88]"
                                onClick={openAddSocialModal}
                              >
                                + Add Social link
                              </button>
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
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <h1 className="text-md lg:text-xl text-[#444B88]">
                            Industries/Job Title
                          </h1>
                          <div className="border border-[#444B88] flex flex-col py-3">
                            <div className="flex flex-col items-center space-y-4">
                              <IndustriesCard
                                industries={industries}
                                onDelete={deleteIndustry}
                              />
                              <button
                                className="p-1 px-5 bg-[#8B95EE] border border-[#444B88]"
                                onClick={openAddIndustryModal}
                              >
                                + Add Industries
                              </button>
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
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-md lg:text-xl text-[#444B88]">
                          Professional Summary or About
                        </h1>
                        <textarea
                          name="about"
                          id=""
                          value={about}
                          cols="30"
                          rows="10"
                          className="border border-[#444b88] w-full px-2 py-1 text-sm lg:text-base"
                          onChange={(e) => setAbout(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <div>
                          <h1 className="text-md lg:text-xl text-[#444B88]">Skills</h1>
                          <div className="border border-[#444B88] flex flex-col py-3">
                            <div className="flex flex-col items-center space-y-3">
                              <SkillsCard
                                skills={skills}
                                onDelete={deleteSkill}
                              />
                              <button
                                className="p-1 px-5 bg-[#8B95EE] border border-[#444B88]"
                                onClick={openAddSkillModal}
                              >
                                + Add Skill
                              </button>
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
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col rounded-lg">
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88] rounded-t-lg">
                  <div className="flex justify-between w-full">
                    <h1 className="text-base lg:text-xl text-[#8B95EE]">Education</h1>
                    {Educationvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleEducationvisibility()}
                        size={25}
                        color="444b88"
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleEducationvisibility()}
                        size={25}
                        color="444b88"
                      />
                    )}
                  </div>
                  {Educationvisible && (
                    <div className="flex flex-col w-full px-4 py-3 mx-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-5">
                          {educationData.map((edu, index) => (
                            <EducationCard
                              key={index}
                              education={edu}
                              onDelete={() => handleEducDelete(index)}
                              onEdit={() => handleEducEdit(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg text-sm lg:text-base"
                    onClick={() => setShowEducationModal(true)}
                  >
                    Add
                  </button>
                  {showEducationModal && (
                    <Addeduc
                      onClose={() => {
                        setFormData();
                        setShowEducationModal(false);
                      }}
                      onSubmit={handleEducSubmit}
                      onEdit={editEducationData}
                      initialData={formData}
                      formIndex={formIndex}
                      setFormData={setFormData}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col rounded-lg">
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88] rounded-t-lg">
                  <div className="flex justify-between w-full">
                    <h1 className="text-base lg:text-xl text-[#8B95EE]">
                      Activities and Involvements
                    </h1>
                    {Activitiesvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleActivitiesvisibility()}
                        size={25}
                        color="444b88"
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleActivitiesvisibility()}
                        size={25}
                        color="444b88"
                      />
                    )}
                  </div>
                  {Activitiesvisible && (
                    <div className="flex flex-col w-full px-4 py-3 mx-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-5">
                          {achievementsData.map((achievement, index) => (
                            <ActivitiesCard
                              key={index}
                              activity={achievement}
                              onDelete={() => handleDeleteAchievement(index)}
                              onEdit={() => handleEditAchievement(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg text-sm lg:text-base"
                    onClick={() => setShowAchievementModal(true)}
                  >
                    Add
                  </button>
                  {showAchievementModal && (
                    <Addachievemodal
                      onClose={() => {
                        setFormData();
                        setShowAchievementModal(false);
                      }}
                      onSubmit={handleSubmitAchieve}
                      onEdit={editAchievementsData}
                      initialData={formData}
                      formIndex={formIndex}
                      setFormData={setFormData}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col rounded-lg">
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88] rounded-t-lg">
                  <div className="flex justify-between w-full">
                    <h1 className="text-sm lg:text-xl text-[#8B95EE]">Projects</h1>
                    {Projectsvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleProjectsvisibility()}
                        size={25}
                        color="444b88"
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleProjectsvisibility()}
                        size={25}
                        color="444b88"
                      />
                    )}
                  </div>
                  {Projectsvisible && (
                    <div className="flex flex-col w-full px-4 py-3 mx-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-5">
                          {projectsData.map((project, index) => (
                            <ProjectsCard
                              key={index}
                              projectsData={project}
                              onDelete={() => handleDeleteProjects(index)}
                              onEdit={() => handleEditProjects(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg text-sm lg:text-base"
                    onClick={() => setShowAddProjectsModal(true)}
                  >
                    Add
                  </button>
                  {showAddProjectsModal && (
                    <Addprojects
                      onClose={() => {
                        setFormData();
                        setShowAddProjectsModal(false);
                      }}
                      onSubmit={handleSubmitProjects}
                      onEdit={editProjectsData}
                      initialData={formData}
                      formIndex={formIndex}
                      setFormData={setFormData}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col rounded-lg">
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88] rounded-t-lg">
                  <div className="flex justify-between w-full">
                    <h1 className="text-sm lg:text-xl text-[#8B95EE]">Awards</h1>
                    {Awardsvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleAwardsvisibility()}
                        size={25}
                        color="444b88"
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleAwardsvisibility()}
                        size={25}
                        color="444b88"
                      />
                    )}
                  </div>
                  {Awardsvisible && (
                    <div className="flex flex-col w-full px-4 py-3 mx-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-5">
                          {awardData.map((award, index) => (
                            <AwardCard
                              key={index}
                              award={award}
                              onDelete={() => handleDeleteAward(index)}
                              onEdit={() => handleEditAward(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg text-sm lg:text-base"
                    onClick={() => setShowAwardModal(true)}
                  >
                    Add
                  </button>
                  {showAwardModal && (
                    <AddAwards
                      onClose={() => {
                        setFormData();
                        setShowAwardModal(false);
                      }}
                      onSubmit={handleSubmitAward}
                      onEdit={editAwardData}
                      initialData={formData}
                      formIndex={formIndex}
                      setFormData={setFormData}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col rounded-lg">
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88] rounded-t-lg">
                  <div className="flex justify-between w-full">
                    <h1 className="text-sm lg:text-xl text-[#8B95EE]">Certificates</h1>
                    {Certificatesvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleCertificatesvisibility()}
                        size={25}
                        color="444b88"
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleCertificatesvisibility()}
                        size={25}
                        color="444b88"
                      />
                    )}
                  </div>
                  {Certificatesvisible && (
                    <div className="flex flex-col w-full px-4 py-3 mx-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-5">
                          {certData.map((cert, index) => (
                            <CertificateCard
                              key={index}
                              cert={cert}
                              onDelete={() => handleDeleteCert(index)}
                              onEdit={() => handleEditCert(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg text-sm lg:text-base"
                    onClick={() => setShowCertModal(true)}
                  >
                    Add
                  </button>
                  {showCertModal && (
                    <AddCertificates
                      onClose={() => {
                        setFormData();
                        setShowCertModal(false);
                      }}
                      onSubmit={handleSubmitCert}
                      onEdit={editCertData}
                      initialData={formData}
                      formIndex={formIndex}
                      setFormData={setFormData}
                    />
                  )}
                </div>
              </div>

              <div className="flex flex-col rounded-lg">
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88] rounded-t-lg gap-4">
                  <div className="flex justify-between w-full pb-2">
                    <h1 className="text-sm lg:text-xl text-[#8B95EE]">
                      Character Reference
                    </h1>
                    {Charactervisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleCharactervisibility()}
                        size={25}
                        color="444b88"
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleCharactervisibility()}
                        size={25}
                        color="444b88"
                      />
                    )}
                  </div>
                  {Charactervisible &&
                    charRefData.map((charRef, index) => (
                      <div
                        className="w-full border border-[#444b88]"
                        key={index}
                      >
                        <div className="flex flex-col gap-5">
                          <div className="px-4 py-2 flex justify-between gap-1">
                            <div onClick={() => handleEditCharRef(index)}>
                              <div className="flex gap-5 items-center">
                                <p className="text-2xl text-[#444b88]">
                                  {charRef.name}
                                </p>
                                <div className="flex gap-1">
                                  <p>{charRef.position}</p>
                                  <p>{charRef.website}</p>
                                </div>
                              </div>
                              <p>{charRef.contactNum}</p>
                              <p className="text-sm">{charRef.email}</p>
                            </div>
                            <div className="flex items-center">
                              <IoCloseOutline
                                size={50}
                                onClick={() => handleDeleteCharRef(index)}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg text-base lg:text-base"
                    onClick={() => setShowCharRefModal(true)}
                  >
                    Add
                  </button>
                  {showCharRefModal && (
                    <CharacterRef
                      onClose={() => {
                        setFormData();
                        setShowCharRefModal(false);
                      }}
                      onSubmit={handleSubmitCharRef}
                      onEdit={editCharRefData}
                      initialData={formData}
                      formIndex={formIndex}
                      setFormData={setFormData}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="w-full pt-5 flex justify-end">
              <div className="flex gap-5">
                <button className="text-lg border border-[#444b88] py-1 px-2 rounded-md">
                  Cancel
                </button>
                <button
                  className="text-lg border border-[#444b88] text-black bg-[#8B95EE] py-1 px-2 rounded-md"
                  onClick={saveResumeInfo}
                >
                  Save
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

export default Createresume;
