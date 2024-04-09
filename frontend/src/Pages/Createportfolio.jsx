import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import { useEffect, useRef, useState } from "react";
import AddSocial from "../Modals/EditApplicant Profile/Addsocial";
import AddIndustry from "../Modals/EditApplicant Profile/Addindustry";
import AddSkill from "../Modals/EditApplicant Profile/Addskill";
import AddCertificates from "../Modals/Edit Profile/Addcertificates";
import Addprojects from "../Modals/Edit Profile/Addprojects";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  SocialCard,
  IndustriesCard,
  SkillsCard,
  ProjectsCard,
  CertificateCard,
} from "../Components/Employercard";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";
import profile from "../images/profilee.png";
import {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  ContactNumberInput,
  CityInput,
  CountryInput,
} from "../Components/Aplicantinput";
import { uploadImage } from "../utils/imagePoUpload";

function Createportfolio() {
  const profileId = JSON.parse(localStorage.getItem("user")).profileId;
  const navigate = useNavigate();

  const [personalInfoVisible, setPersonalInfoVisible] = useState(true);
  const [Projectsvisible, setProjectsvisible] = useState(false);
  const [Certificatesvisible, setCertificatesvisible] = useState(false);

  const togglePersonalInfoVisibility = () => {
    setPersonalInfoVisible(!personalInfoVisible);
  };

  const toggleProjectsvisibility = () => {
    setProjectsvisible(!Projectsvisible);
  };
  const toggleCertificatesvisibility = () => {
    setCertificatesvisible(!Certificatesvisible);
  };

  const [formData, setFormData] = useState();
  const [formIndex, setFormIndex] = useState();

  const [image, setImage] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    getUserProfile();
  }, []);

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

  const [skillSuggestions] = useState([
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

  const deleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
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
        setProjectsData(profileObj.projects);
        setCertData(profileObj.certs);
        setImage(profileObj.profileImg);
      });
  };

  const savePortfolioInfo = async () => {
    try {
      const proceed = confirm(
        "Are you sure you want to use these values to be displayed on your resume?"
      );

      if (proceed) {
        let imageUrl = image;

        if (imageFile) {
          imageUrl = await uploadImage(imageFile);
        }
        const portfolioInfo = {
          profileImg: image,
          firstName: fName,
          lastName: lName,
          email,
          contactNum,
          address: `${city}, ${country}`,
          bio,
          about,
          socialLinks,
          skills,
          preferredCareer: industries,
          certs: certData,
          projects: projectsData,
        };

        navigate("/chooseportfolio", { state: { portfolioInfo } });
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
          <div className="flex flex-col mx-auto w-1/2 bg-white px-4 py-3">
            <div className="text-center flex flex-col w-full justify-center py-4">
              <h1 className="text-2xl font-bold text-[#444B88]">
                Portfolio Builder
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
                    <div className="flex">
                      <div className="w-1/3 flex items-start justify-center">
                        <img
                          src={image ? image : profile}
                          alt=""
                          className="w-[80%] h-[60%] border-2 border-black cursor-pointer rounded-full"
                          onClick={handleImageClick}
                        />
                        <input
                          type="file"
                          ref={fileInputRef}
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                      <div className="w-3/4">
                        <div className="flex gap-2">
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
                          onChange={(e) => setContactNum(e.target.value)}
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
                          {/* TODO fix industries layout */}
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
                        <h1 className="text-xl text-[#444B88]">Bio</h1>
                        <textarea
                          name="bio"
                          id="bio"
                          cols="30"
                          rows="5"
                          value={bio}
                          className="border border-[#444b88] w-full px-2 py-1"
                          onChange={(e) => setBio(e.target.value)}
                        ></textarea>
                      </div>
                      <div>
                        <h1 className="text-xl text-[#444B88]">
                          Professional Summary or About
                        </h1>
                        <textarea
                          name="about"
                          id="about"
                          cols="30"
                          rows="10"
                          value={about}
                          className="border border-[#444b88] w-full px-2 py-1"
                          onChange={(e) => setAbout(e.target.value)}
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
              <div className="flex flex-col">
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88] rounded-t-lg">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl text-[#8B95EE]">Projects</h1>
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
                <div className="flex flex-col items-center justify-between px-4 py-3 border border-[#444b88] rounded-t-lg">
                  <div className="flex justify-between w-full">
                    <h1 className="text-xl text-[#8B95EE]">Certificates</h1>
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
              <div className="w-full pt-5 flex justify-end">
                <div className="flex gap-5">
                  {" "}
                  <button className="text-lg border border-[#444b88] py-1 px-2 rounded-md">
                    Cancel
                  </button>{" "}
                  <button
                    className="text-lg border border-[#444b88] text-black bg-[#8B95EE] py-1 px-2 rounded-md"
                    onClick={savePortfolioInfo}
                  >
                    Save
                  </button>
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

export default Createportfolio;
