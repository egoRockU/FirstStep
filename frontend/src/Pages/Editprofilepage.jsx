import { useState, useEffect } from "react";
import banner from "../images/signBg.jpg";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import profile from "../images/profilee.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import AddEduc from "../Modals/Edit Profile/Addeducmodal";
import AddAchievement from "../Modals/Edit Profile/Addachievemodal";
import AddAward from "../Modals/Edit Profile/Addawards";
import AddCert from "../Modals/Edit Profile/Addcertificates";
import Addprojects from "../Modals/Edit Profile/Addprojects";
import axios from "axios";
import { convertDate } from "../utils/convertDate";

function editprofile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const placeholderImage = { profile };
  const navigate = useNavigate();
  const profileId = JSON.parse(localStorage.getItem("user")).profileId;

  useEffect(() => {
    getUserProfile();
  }, []);

  const [formData, setFormData] = useState();
  const [formIndex, setFormIndex] = useState();

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

  const clickedit = (e) => {
    e.preventDefault();
    navigate("/editapplicantabout");
  };

  //get user info
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [skills, setSkills] = useState([]);
  const [industries, setIndustries] = useState([]);

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
        setAddress(profileObj.address);
        setBio(profileObj.bio);
        setAbout(profileObj.about);
        setSocialLinks(profileObj.socialLinks);
        setSkills(profileObj.skills);
        setIndustries(profileObj.preferredCareer);
        setEducationData(profileObj.education);
        setAchievementsData(profileObj.activitiesAndInvolvements);
        setProjectsData(profileObj.projects);
        setAwardData(profileObj.awards);
        setCertData(profileObj.certs);
        setSelectedImage(profileObj.profileImg);
        setSelectedBanner(profileObj.banner);
      });
  };

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

  return (
    <>
      <NavbarLoggedIn />
      <div className="bg-gray-100 mx-auto pb-20">
        <div className="container mx-auto">
          <img
            src={selectedBanner}
            alt=""
            className="w-full h-80 object-cover rounded-xl object-cover"
          />
        </div>
        <div className="flex mt-[-60px]">
          <div className="container mx-auto">
            <div className="flex justify-around">
              <div className="w-[500px] h-full">
                <div className="mx-auto bg-white px-5 py-2 rounded-t-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-around">
                      <label htmlFor="imageInput" className="cursor-pointer">
                        <img
                          src={selectedImage}
                          alt=""
                          className="w-40 h-40 rounded-full border-2 object-cover"
                        />
                      </label>
                      <div className="flex justify-center items-center">
                        <button className="p-1 px-4 rounded-2xl border border-[#444B88] bg-[#8B95EE]">
                          Message
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col w-full p-5 space-y-2">
                      <div className="flex">
                        <h1 className="text-2xl text-[#8B95EE]">
                          {fName} {lName}
                        </h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="underline text-[#8B95EE]">{email}</h1>
                        <p>{address}</p>
                        <p>{contactNum}</p>
                      </div>
                      <div>{bio}</div>
                      <div>
                        {socialLinks.map((social, index) => (
                          <div className="flex items-center gap-1" key={index}>
                            {/* <FaLinkedin size={25} color="blue" /> */}
                            <p>{social.platform}</p>
                            <p>{social.link}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-xl">Skills:</h1>
                        <div className="grid grid-cols-3 gap-1">
                          {skills.map((skill, index) => (
                            <p
                              className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap"
                              key={index}
                            >
                              {skill}
                            </p>
                          ))}
                        </div>
                        <h1 className="text-xl">Industry</h1>
                        <div className="flex gap-1 flex-wrap">
                          {" "}
                          {industries.map((industry, index) => (
                            <p
                              className="bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center whitespace-nowrap p-1"
                              key={index}
                            >
                              {industry}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="w-full bg-[#444B88] border-[#BCBCBC] border-2 p-2 text-white rounded-b-lg"
                  onClick={clickedit}
                >
                  Edit
                </button>
              </div>
              <div className="w-[800px]">
                <div className="grid grid-cols-1 gap-4">
                  <div className="rounded-xl">
                    <div className="bg-white p-4 flex flex-col items-center border-2 border-gray-300 rounded-t-lg">
                      <h1 className="text-[#444B88] font-base text-xl">
                        About
                      </h1>
                      {!about && <p>This user did not write anything yet...</p>}
                      {about}
                    </div>
                    <div className="w-full">
                      <button
                        className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                        onClick={clickedit}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="rounded-xl">
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                      <h1 className="text-[#444B88] font-base">Education</h1>
                      {educationData.map((edu, index) => (
                        <div
                          className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center"
                          key={index}
                        >
                          <div
                            className="w-full flex flex-col gap-3 p-5"
                            onClick={() => handleEducEdit(index)}
                          >
                            <div className="flex items-center gap-3 w-full">
                              <p className="text-2xl text-[#444B88]">
                                {edu.schoolName}
                              </p>
                              <p className="text-sm">
                                {convertDate(edu.startDate)} -{" "}
                                {convertDate(edu.endDate)}
                              </p>
                            </div>
                            <div className="text-xl">
                              {edu.degree} - {edu.program}
                            </div>
                          </div>
                          <button onClick={() => handleEducDelete(index)}>
                            <IoCloseOutline size={50} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="w-full">
                      <button
                        className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                        onClick={() => setShowEducationModal(true)}
                      >
                        Add
                      </button>
                      {showEducationModal && (
                        <AddEduc
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
                  <div className="rounded-xl">
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                      <h1 className="text-[#444B88] font-base">
                        Activities and Involvements
                      </h1>
                      {achievementsData.map((achievement, index) => (
                        <div
                          className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center"
                          key={index}
                        >
                          <div
                            className="w-full flex flex-col gap-3 p-5"
                            onClick={() => handleEditAchievement(index)}
                          >
                            <div className="flex items-center gap-3 w-full">
                              <p className="text-2xl text-[#444B88]">
                                {achievement.title}
                              </p>
                              <p className="text-xl">
                                {achievement.typeOfActivity}
                              </p>
                            </div>
                            <div className="text-xl">
                              {achievement.organizationOrCompanyName}
                            </div>
                            <div className="text-sm">
                              {convertDate(achievement.startDate)} -{" "}
                              {convertDate(achievement.endDate)},{" "}
                              {achievement.location}
                            </div>
                          </div>
                          <button
                            onClick={() => handleDeleteAchievement(index)}
                          >
                            <IoCloseOutline size={50} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="w-full">
                      <button
                        className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                        onClick={() => setShowAchievementModal(true)}
                      >
                        Add
                      </button>
                      {showAchievementModal && (
                        <AddAchievement
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
                  <div className="rounded-xl">
                    {/* TODO Projects */}
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                      <h1 className="text-[#444B88] font-base">Projects</h1>
                      {projectsData.map((project, index) => (
                        <div
                          className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center"
                          key={index}
                        >
                          <div
                            className="w-full flex flex-col gap-3 p-5"
                            onClick={() => handleEditProjects(index)}
                          >
                            <div className="flex items-center gap-3 w-full">
                              <p className="text-2xl text-[#444B88]">
                                {project.projectTitle}
                              </p>
                              <p className="text-xl">
                                {convertDate(project.startDate)} -{" "}
                                {convertDate(project.endDate)}
                              </p>
                            </div>
                            <div className="text-xl">{project.subTitle}</div>
                            <div className="text-sm">
                              {project.technologiesUsed}
                            </div>
                          </div>
                          <button onClick={() => handleDeleteProjects(index)}>
                            <IoCloseOutline size={50} />
                          </button>
                        </div>
                      ))}
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
                  <div className="rounded-xl">
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                      <h1 className="text-[#444B88] font-base">Awards</h1>
                      {awardData.map((award, index) => (
                        <div
                          className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center"
                          key={index}
                        >
                          <div
                            className="w-full flex flex-col gap-3 p-5"
                            onClick={() => handleEditAward(index)}
                          >
                            <div className="flex items-center gap-3 w-full">
                              <p className="text-2xl text-[#444B88]">
                                {award.title}
                              </p>
                              <p className="text-sm">
                                {convertDate(award.dateReceived)}
                              </p>
                            </div>
                          </div>
                          <button onClick={() => handleDeleteAward(index)}>
                            <IoCloseOutline size={50} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="w-full">
                      <button
                        className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                        onClick={() => setShowAwardModal(true)}
                      >
                        Add
                      </button>
                      {showAwardModal && (
                        <AddAward
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
                  <div className="rounded-xl">
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                      <h1 className="text-[#444B88] font-base">Certificates</h1>
                      {certData.map((cert, index) => (
                        <div
                          className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center"
                          key={index}
                        >
                          <div
                            className="w-full flex flex-col gap-3 p-5"
                            onClick={() => handleEditCert(index)}
                          >
                            <div className="flex items-center gap-3 w-full">
                              <p className="text-2xl text-[#444B88]">
                                {cert.title}
                              </p>
                              <p className="text-sm">
                                {convertDate(cert.dateReceived)}
                              </p>
                            </div>
                          </div>
                          <button onClick={() => handleDeleteCert(index)}>
                            <IoCloseOutline size={50} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="w-full">
                      <button
                        className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                        onClick={() => setShowCertModal(true)}
                      >
                        Add
                      </button>
                      {/* TODO finish add certificates modal and functions / add close button*/}
                      {showCertModal && (
                        <AddCert
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

export default editprofile;
