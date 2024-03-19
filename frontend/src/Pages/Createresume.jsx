import React, { useState } from "react";
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
  AwardCard
} from "../Components/Cardcomponents";
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

function Createresume() {
  const [personalInfoVisible, setPersonalInfoVisible] = useState(false);
  const [Educationvisible, setEducationvisible] = useState(false);
  const [Activitiesvisible, setActivitiesvisible] = useState(false);
  const [Projectsvisible, setProjectsvisible] = useState(false);
  const [Awardsvisible, setAwardsvisible] = useState(false);
  const [Certificatesvisible, setCertificatesvisible] = useState(false);
  const [Charactervisible, setCharactervisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const profileId = JSON.parse(localStorage.getItem("user")).profileId;

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

  const updateProfileElement = (key, value) => {
    const input = {
      _id: profileId,
      set: {
        [key]: value,
      },
    };

    axios
      .post("/api/applicantprofile/update", input, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.message);
      });
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

  //end

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
  const [skills, setSkills] = useState([]);

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
    if (!formData) {
      toast.error("Please provide Skills");
      return;
    }
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

  //education
  const [educationData, setEducationData] = useState([]);
  const [showEducationModal, setShowEducationModal] = useState(false);

  const handleEducSubmit = (data) => {
    console.log(data);
    setEducationData((prevEducationData) => {
      const updatedEducationData = [...prevEducationData, data];
      updateProfileElement("education", updatedEducationData);
      return updatedEducationData;
    });
    setShowEducationModal(false);
    setEducationvisible(true);
  };

  const handleEducDelete = (index) => {
    const updatedEducationData = [...educationData];
    updatedEducationData.splice(index, 1);
    updateProfileElement("education", updatedEducationData);
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
    updateProfileElement("education", updatedEducationData);
    setEducationData(updatedEducationData);
  };

  //end

  //activities and involvements
  const [achievementsData, setAchievementsData] = useState([]);
  const [showAchievementModal, setShowAchievementModal] = useState(false);

  const handleSubmitAchieve = (formData) => {
    setAchievementsData((prevAchievementsData) => {
      const updatedAchievementsData = [...prevAchievementsData, formData];
      updateProfileElement(
        "activitiesAndInvolvements",
        updatedAchievementsData
      );
      return updatedAchievementsData;
    });
    setShowAchievementModal(false);
    setActivitiesvisible(true);
  };

  const handleDeleteAchievement = (index) => {
    const updatedAchievements = [...achievementsData];
    updatedAchievements.splice(index, 1);
    updateProfileElement("activitiesAndInvolvements", updatedAchievements);
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
    updateProfileElement("activitiesAndInvolvements", updatedAchievementsData);
    setAchievementsData(updatedAchievementsData);
  };

  //end

    //projects
    const [projectsData, setProjectsData] = useState([]);
    const [showAddProjectsModal, setShowAddProjectsModal] = useState(false);
  
    const handleSubmitProjects = (formData) => {
      setProjectsData((prevProjectsData) => {
        const updatedProjectsData = [...prevProjectsData, formData];
        updateProfileElement("projects", updatedProjectsData);
        return updatedProjectsData;
      });
      setShowAddProjectsModal(false);
      setProjectsvisible(true);
    };
  
    const handleDeleteProjects = (index) => {
      const updatedProjects = [...projectsData];
      updatedProjects.splice(index, 1);
      updateProfileElement("projects", updatedProjects);
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
      updateProfileElement("projects", updatedProjectsData);
      setProjectsData(updatedProjectsData);
    };
    //end

    //awards
  const [awardData, setAwardData] = useState([]);
  const [showAwardModal, setShowAwardModal] = useState(false);

  const handleSubmitAward = (formData) => {
    setAwardData((prevAwardData) => {
      const updatedAwardsData = [...prevAwardData, formData];
      updateProfileElement("awards", updatedAwardsData);
      return updatedAwardsData;
    });
    setShowAwardModal(false);
    setAwardsvisible(true);
  };

  const handleDeleteAward = (index) => {
    const updatedAward = [...awardData];
    updatedAward.splice(index, 1);
    updateProfileElement("awards", updatedAward);
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
    updateProfileElement("awards", updatedAwardData);
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
      updateProfileElement("certs", updatedCertData);
      return updatedCertData;
    });
    setShowCertModal(false);
    setCertificatesvisible(true);
  };

  const handleDeleteCert = (index) => {
    const updatedCert = [...certData];
    updatedCert.splice(index, 1);
    updateProfileElement("certs", updatedCert);
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
    updateProfileElement("certs", updatedCertData);
    setCertData(updatedCertData);
  };

  //end

  //Character Reference
  const [characterData, setCharacterData] = useState([]);
  const [showCharacterModal, setShowCharacterModal] = useState(false);

  const handleSubmitCharacter = (formData) => {
    setCharacterData((prevCharacterData) => {
      const updatedCharacterData = [...prevCharacterData, formData];
      updateProfileElement(
        "characterReference",
        updatedCharacterData
      );
      return updatedCharacterData;
    });
    setShowCharacterModal(false);
  };

  const handleDeleteCharacter = (index) => {
    const updatedCharacterData = [...characterData];
    updatedCharacterData.splice(index, 1);
    updateProfileElement("characterReference", updatedCharacterData);
    setCharacterData(updatedCharacterData);
  };

  const handleEditCharacter = (index) => {
    const characterToEdit = characterData[index];
    setFormData(characterToEdit);
    setFormIndex(index);
    setShowCharacterModal(true);
  };

  const editCharacterData = (index, newValue) => {
    const updatedCharacterData = [...characterData];
    updatedCharacterData[index] = newValue;
    updateProfileElement("characterReference", updatedCharacterData);
    setCharacterData(updatedCharacterData);
  };

  //end

  return (
    <>
      <div className="bg-gray-200">
        <NavbarLoggedIn />
        <div className="max-w-screen-2xl mx-auto px-4 pt-32 pb-24">
          <div className="flex flex-col mx-auto w-1/2 bg-white px-4 py-3">
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
                    />
                  ) : (
                    <IoIosArrowDropdownCircle
                      onClick={() => togglePersonalInfoVisibility()}
                      size={25}
                    />
                  )}
                </div>
                {personalInfoVisible && (
                  <div className="flex flex-col w-full px-4 py-3 mx-auto">
                    <div className="flex">
                      <div className="w-1/4 flex items-start justify-center">
                        <img src={profile} alt="" className="w-4/6" />
                      </div>
                      <div className="w-3/4">
                        <div className="flex gap-2">
                          <FirstNameInput
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          <LastNameInput
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                        <EmailInput
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <ContactNumberInput
                          value={contactNumber}
                          onChange={(e) => setContactNumber(e.target.value)}
                        />
                        <div className="flex gap-2">
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
                          <h1 className="text-xl text-[#444B88]">
                            Social Links
                          </h1>
                          <div className="border border-[#444B88] flex flex-col py-3">
                            <div className="flex flex-col items-center">
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
                          <h1 className="text-xl text-[#444B88]">
                            Industries/Job Title
                          </h1>
                          <div className="border border-[#444B88] flex flex-col py-3">
                            <div className="flex flex-col items-center">
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
                        <h1 className="text-xl text-[#444B88]">
                          Professional Summary or About
                        </h1>
                        <textarea
                          name="about"
                          id=""
                          cols="30"
                          rows="10"
                          className="border border-[#444b88] w-full px-2 py-1"
                        ></textarea>
                      </div>
                      <div>
                        <div>
                          <h1 className="text-xl text-[#444B88]">Skills</h1>
                          <div className="border border-[#444B88] flex flex-col py-3">
                            <div className="flex flex-col items-center">
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
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88]">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl text-[#8B95EE]">Education</h1>
                    {Educationvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleEducationvisibility()}
                        size={25}
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleEducationvisibility()}
                        size={25}
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
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
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
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88]">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl text-[#8B95EE]">Activities and Involvements</h1>
                    {Activitiesvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleActivitiesvisibility()}
                        size={25}
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleActivitiesvisibility()}
                        size={25}
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
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
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
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88]">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl text-[#8B95EE]">Projects</h1>
                    {Projectsvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleProjectsvisibility()}
                        size={25}
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleProjectsvisibility()}
                        size={25}
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
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
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
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88]">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl text-[#8B95EE]">Awards</h1>
                    {Awardsvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleAwardsvisibility()}
                        size={25}
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleAwardsvisibility()}
                        size={25}
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
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
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
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88]">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl text-[#8B95EE]">Certificates</h1>
                    {Certificatesvisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleCertificatesvisibility()}
                        size={25}
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleCertificatesvisibility()}
                        size={25}
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
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
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
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88]">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl text-[#8B95EE]">Character Reference</h1>
                    {Charactervisible ? (
                      <IoIosArrowDropupCircle
                        onClick={() => toggleCharactervisibility()}
                        size={25}
                      />
                    ) : (
                      <IoIosArrowDropdownCircle
                        onClick={() => toggleCharactervisibility()}
                        size={25}
                      />
                    )}
                  </div>
                  {Charactervisible && (
                    <div className="flex flex-col w-full px-4 py-3 mx-auto">
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-5">
                        {characterData.map((char, index) => (
                        <CharacterRef
                          key={index}
                          characterData={char}
                          onDelete={() => handleDeleteCharacter(index)}
                          onEdit={() => handleEditCharacter(index)}
                        />
                      ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-full">
                  <button
                    className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                    onClick={() => setShowCharacterModal(true)}
                  >
                    Add
                  </button>
                  {showCharacterModal && (
                        <CharacterRef
                          onClose={() => {
                            setFormData();
                            setShowCharacterModal(false);
                          }}
                          onSubmit={handleSubmitCharacter}
                          onEdit={editCharacterData}
                          initialData={formData}
                          formIndex={formIndex}
                          setFormData={setFormData}
                        />
                      )}
                </div>
              </div>
              
    
            </div>
            <div className="w-full pt-5 flex justify-end">
              <div className="flex gap-5"> <button className="text-lg border border-[#444b88] py-1 px-2 rounded-md">Cancel</button> <button className="text-lg border border-[#444b88] text-black bg-[#8B95EE] py-1 px-2 rounded-md">Save</button></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Createresume;
