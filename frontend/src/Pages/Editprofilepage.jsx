import { useState } from "react";
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

function editprofile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const placeholderImage = { profile };
  const navigate = useNavigate();

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
    setShowModal(false);
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
    setShowModal(true);
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
    navigate("/editapplicantprofilepage");
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="bg-gray-100 mx-auto pb-20">
        <div className="container mx-auto">
          <img
            src={banner}
            alt=""
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>
        <div className="flex mt-[-60px]">
          <div className="container mx-auto">
            <div className="flex justify-around">
              <div className="w-[500px] h-full">
                <div className="mx-auto bg-white px-5 py-2 rounded-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-around">
                      <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <label htmlFor="imageInput" className="cursor-pointer">
                        <img
                          src={selectedImage || placeholderImage.profile}
                          alt=""
                          className="w-40 h-40 rounded-full border-2"
                        />
                        {!selectedImage && (
                          <div
                            onClick={() =>
                              document.getElementById("imageInput").click()
                            }
                            className="absolute cursor-pointer"
                            style={{ zIndex: 1 }}
                          ></div>
                        )}
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
                          Firstname Lastname
                        </h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="underline text-[#8B95EE]">
                          Email.devs.jpg@gmail.com
                        </h1>
                        <p>City, Country</p>
                        <p>0999-999-9112</p>
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque architecto saepe dignissimos doloribus obcaecati
                        officiis pariatur quas consequuntur totam numquam
                        placeat, dolorem voluptate id ea.
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <FaLinkedin size={25} color="blue" />
                          <p>LinkIn@linkin.com</p>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaSquareXTwitter size={25} />
                          <p>TwitterngPogi@twiiter.com</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-xl">Skills:</h1>
                        <div className="grid grid-cols-3 gap-1">
                          <p className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap">
                            Python
                          </p>
                          <p className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap">
                            Node
                          </p>
                          <p className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap">
                            Tailwind css
                          </p>
                          <p className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap">
                            PHP
                          </p>
                        </div>
                        <h1 className="text-xl">Industry</h1>
                        <div className="grid grid-cols-3 gap-1">
                          <p className=" bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center">
                            Software Engineering
                          </p>
                          <p className="bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center">
                            Node
                          </p>
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
                    <div className="bg-white p-4 flex flex-col items-center border-2 border-gray-300">
                      <h1 className="text-[#444B88] font-base text-xl">
                        About
                      </h1>
                      <textarea
                        name="about"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="This user did not write anything yet."
                        className="w-full"
                      ></textarea>
                    </div>
                    <div className="w-full">
                      <button className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg">
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className="rounded-xl">
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3">
                      <h1 className="text-[#444B88] font-base">Education</h1>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">
                              School Name
                            </p>
                            <p className="text-sm">Start-date-End-date</p>
                          </div>
                          <div className="text-xl">Degree-Program</div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">
                              Caloocan City Business High School
                            </p>
                            <p className="text-sm">Start-date-End-date</p>
                          </div>
                          <div className="text-xl">Senior-High STEM</div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">
                              University of Caloocan City
                            </p>
                            <p className="text-sm">Start-date-End-date</p>
                          </div>
                          <div className="text-xl">
                            Bachelor of Science - Computer Science
                          </div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <button
                        className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                        onClick={() => setShowEducationModal(true)}
                      >
                        Add
                      </button>
                      {/* TODO finish add education modal and functions */}
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
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3">
                      <h1 className="text-[#444B88] font-base">
                        Activities and Involvements
                      </h1>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">Title</p>
                            <p className="text-xl">Type</p>
                          </div>
                          <div className="text-xl">
                            Company/Organization Name
                          </div>
                          <div className="text-sm">
                            Start-date - End-date, Location
                          </div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">
                              Associate Software Engineer
                            </p>
                            <p className="text-xl">Internship</p>
                          </div>
                          <div className="text-xl">Netflix</div>
                          <div className="text-sm">
                            Start-date - End-date, Mindanao
                          </div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">
                              Java Training
                            </p>
                            <p className="text-xl">Training</p>
                          </div>
                          <div className="text-xl">Tesda</div>
                          <div className="text-sm">
                            Start-date - End-date, Quezon City
                          </div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <button
                        className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                        onClick={() => setShowAchievementModal(true)}
                      >
                        Add
                      </button>
                      {/* TODO finish add achievements modal and functions / add close button*/}
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
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3">
                      <h1 className="text-[#444B88] font-base">Projects</h1>
                    </div>
                    <div className="w-full">
                      <button className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg">
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="rounded-xl">
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3">
                      <h1 className="text-[#444B88] font-base">Awards</h1>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">Title</p>
                            <p className="text-sm">Date Received</p>
                          </div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">
                              Best Thesis
                            </p>
                            <p className="text-sm">Date Received</p>
                          </div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <button
                        className="w-full bg-[#444B88] border-[#BCBCBC] border-1 p-2 text-white rounded-b-lg"
                        onClick={() => setShowAwardModal(true)}
                      >
                        Add
                      </button>
                      {/* TODO finish add awards modal and functions / add close button*/}
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
                    <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3">
                      <h1 className="text-[#444B88] font-base">Certificates</h1>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">Title</p>
                            <p className="text-sm">Date Received</p>
                          </div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
                      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
                        <div className="w-full flex flex-col gap-3 p-5">
                          <div className="flex items-center gap-3 w-full">
                            <p className="text-2xl text-[#444B88]">
                              Tailwind CSS
                            </p>
                            <p className="text-sm">Date Received</p>
                          </div>
                        </div>
                        <button>
                          <IoCloseOutline size={50} />
                        </button>
                      </div>
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
