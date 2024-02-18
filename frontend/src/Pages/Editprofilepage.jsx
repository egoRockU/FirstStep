import React, { useState } from "react";
import Man from "../images/tommy.png";
import banner from "../images/signBg.jpg";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import google from "../images/google.png";
import Footer from "../Components/Footer";
import Educ from "../Modals/Educ";
import Achieve from "../Modals/Achieve";
import Awards from "../Modals/Awards";
import Certificates from "../Modals/Certifiactes";

function Create() {
  const [selectedImage, setSelectedImage] = useState(null);
  const placeholderImage = "placeholder.jpg";

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

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [educationData, setEducationData] = useState([]);

  const handleSubmit = (data) => {
    console.log(data);
    setEducationData([...educationData, data]);
    setShowModal(false);
  };

  const handleDelete = (index) => {
    const updatedEducationData = [...educationData];
    updatedEducationData.splice(index, 1);
    setEducationData(updatedEducationData);
  };

  const handleEdit = (index) => {
    const educationToEdit = educationData[index];
    setFormData(educationToEdit);
    setShowModal(true);
  };

  const [achievementsData, setAchievementsData] = useState([]);
  const [showAchieveModal, setShowAchieveModal] = useState(false);

  const handleSubmitAchieve = (formData) => {
    setAchievementsData([...achievementsData, formData]);
    setShowAchieveModal(false);
  };

  const handleDeleteAchievement = (index) => {
    const updatedAchievements = [...achievementsData];
    updatedAchievements.splice(index, 1);
    setAchievementsData(updatedAchievements);
  };
  const [editAchievementIndex, setEditAchievementIndex] = useState(null);

  const handleEditAchievement = (index) => {
    setEditAchievementIndex(index);
    setShowAchieveModal(true);
  };

  const [awardData, setAwardData] = useState([]);
  const [showAwardModal, setShowAwardModal] = useState(false);

  const handleSubmitAward = (formData) => {
    console.log("Award form data:", formData);
    setAwardData([...awardData, formData]);
    setShowAwardModal(false);
  };

  const handleDeleteAward = (index) => {
    const updatedAward = [...awardData];
    updatedAward.splice(index, 1);
    setAwardData(updatedAward);
  };

  const [editAwardIndex, setEditAwardIndex] = useState(null);

  const handleEditAward = (index) => {
    setEditAwardIndex(index);
    setShowAwardModal(true);
  };

  const [certData, setCertData] = useState([]);
  const [showCertModal, setShowCertModal] = useState(false);

  const handleSubmitCert = (formData) => {
    console.log("Cert form data:", formData);
    setCertData([...certData, formData]);
    setShowCertModal(false);
  };

  const handleDeleteCert = (index) => {
    const updatedCert = [...certData];
    updatedCert.splice(index, 1);
    setCertData(updatedCert);
  };
  const [editCertIndex, setEditCertIndex] = useState(null);

  const handleEditCert = (index) => {
    setEditCertIndex(index);
    setShowCertModal(true);
  };

  return (
    <>
      <NavbarLoggedIn />
      <div>
        <div
          style={{
            background: "linear-gradient(to bottom, #ffffff,#87ceeb)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        ></div>
        <div className="h-full">
          <img
            src={banner}
            alt=""
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>
        <div className="w-full flex mb-20 h-[1800px] mt-[-50px]">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-col lg:flex-row lg:space-x-5 h-full">
              <div className=" bg-white rounded-2xl sm:w-full lg:w-1/3 sm:h-1/3 lg:h-1/2">
                <div className="p-4 flex flex-col items-center lg:space-y-10">
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                    <label htmlFor="imageInput" className="cursor-pointer">
                      <img
                        src={selectedImage || placeholderImage}
                        alt=""
                        className="w-60 h-60 rounded-full border-4 border-black mb-4 md:mb-0 md:mr-4"
                      />
                    </label>
                    {!selectedImage && (
                      <div
                        onClick={() =>
                          document.getElementById("imageInput").click()
                        }
                        className="absolute inset-0 cursor-pointer"
                        style={{ zIndex: 1 }}
                      ></div>
                    )}
                  </div>
                  <div class="space-y-2">
                    <h1 className="text-2xl font-semibold">Exmaple Name</h1>
                    <div class="flex items-center">
                      <div>
                        <img src={google} alt="Facebook" class="w-8 h-8" />
                      </div>
                      <div>
                        <img src={google} alt="Twitter" class="w-8 h-8" />
                      </div>
                      <div>
                        <img src={google} alt="Instagram" class="w-8 h-8" />
                      </div>
                    </div>
                    <div>
                      <h1 className="font-semibold text-xl">Bio</h1>
                      <p className="font-base text-base">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Inventore, laudantium. Suscipit veniam omnis
                        mollitia consequuntur deserunt facere quia dolore
                        molestiae?
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg shadow-md mt-4 sm:w-1/4 lg:w-2/3">
                    <div className="flex items-center justify-center mb-2">
                      <div className="w-32 h-16 rounded-full flex items-center justify-center">
                        <span className="text-small font-medium">
                          Preferred Jobs
                        </span>
                      </div>
                    </div>
                    <button className="text-2xl bg-[#FFCECE] w-full rounded-full">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-full sm:mt-10 lg:mt-0">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-2 rounded-xl ">
                    <h1 className="text-3xl">Summary</h1>
                    <textarea
                      name="summary"
                      id=""
                      cols="30"
                      rows="10"
                      className="w-full text-lg border-2 outline-none"
                    ></textarea>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <h1 className="text-3xl">Education</h1>
                    <button
                      className="p-3 px-4 bg-blue-200 hover:bg-blue-600 rounded-full text-lg"
                      onClick={() => setShowModal(true)}
                    >
                      Add New +
                    </button>
                    {showModal && (
                      <Educ
                        onClose={() => setShowModal(false)}
                        onSubmit={handleSubmit}
                        formData={formData}
                        setFormData={setFormData}
                      />
                    )}

                    <div className="mt-4">
                      <div className="grid grid-cols-2 gap-4">
                        {educationData.map((edu, index) => (
                          <div
                            key={index}
                            className="bg-blue-300 p-3 rounded-lg"
                          >
                            <div className="flex">
                              <div className="flex w-full">
                                <div className="flex-col w-4/5">
                                  <p className="text-2xl">{edu.schoolName}</p>
                                  <div className="flex-col">
                                    <div className="flex space-x-2">
                                      <p className="text-lg">{edu.startDate}</p>
                                      <p className="text-lg">-</p>
                                      <p className="text-lg">{edu.endDate}</p>
                                    </div>
                                    <div className="flex space-x-3 items-center">
                                      <p>{edu.degree}</p>
                                      <p>{edu.program}</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="w-1/5">
                                  <p className="text-lg">Grade: {edu.grade}</p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-2 flex justify-between">
                              <button
                                className="bg-green-300 px-4 py-2 rounded-md"
                                onClick={() => handleEdit(index)}
                              >
                                Edit
                              </button>
                              <button
                                className="text-white bg-red-500 px-4 py-2 rounded-md"
                                onClick={() => handleDelete(index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <h1 className="text-3xl">Achievements and Involvements</h1>
                    <button
                      onClick={() => setShowAchieveModal(true)}
                      className="text-lg p-3 px-4 rounded-full bg-blue-200 hover:bg-blue-600"
                    >
                      Add New +
                    </button>
                    {showAchieveModal && (
                      <Achieve
                        onClose={() => setShowAchieveModal(false)}
                        onSubmit={handleSubmitAchieve}
                      />
                    )}
                    <div className="mt-4 w-full items-center flex">
                      {achievementsData.map((achievement, index) => (
                        <div key={index} className="p-3">
                          <div className="p-5 bg-blue-200 rounded-xl">
                            <p className="text-2xl">{achievement.title}</p>
                            <p className="text-md">{achievement.type}</p>
                            <p className="text-md">
                              {achievement.organization}
                            </p>
                            <p className="text-md">{achievement.location}</p>
                            <p className="text-md">
                              Started: {achievement.startDate}
                            </p>
                            <p className="text-md">
                              Ended: {achievement.endDate}
                            </p>
                            <p className="text-md">{achievement.description}</p>
                            <div className="mt-5 flex space-x-5">
                              <button
                                className="bg-green-300 p-2 px-4 rounded-xl"
                                onClick={() => handleEditAchievement(index)}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteAchievement(index)}
                                className="text-white bg-red-500  rounded-md "
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl text-3xl">
                    <h1>Projects</h1>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <h1 className="text-3xl"> Awards</h1>
                    <button
                      onClick={() => setShowAwardModal(true)}
                      className="text-lg p-3 px-4 rounded-full bg-blue-200 hover:bg-blue-600"
                    >
                      Add New +
                    </button>
                    {showAwardModal && (
                      <Awards
                        onClose={() => setShowAwardModal(false)}
                        onSubmit={handleSubmitAward}
                      />
                    )}
                    <div className="mt-4 w-full items-center flex">
                      {awardData.map((award, index) => (
                        <div key={index} className="p-3">
                          <div className="p-5 bg-blue-200 rounded-xl">
                            <p className="text-2xl">{award.title}</p>
                            <p className="text-md">{award.dateReceived}</p>
                            <p className="text-md">{award.description}</p>
                            <div className="mt-5 flex space-x-5">
                              <button
                                className="bg-green-300 p-2 px-4 rounded-xl"
                                onClick={() => handleEditAward(index)}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteAward(index)}
                                className="text-white bg-red-500 px-4 py-2 rounded-md"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {showCertModal && (
                    <Certificates
                      onClose={() => setShowCertModal(false)}
                      onSubmit={handleDeleteCert}
                    />
                  )}
                  <div className="bg-white p-4 rounded-xl">
                    <h1 className="text-3xl">Certificates</h1>
                    <button
                      onClick={() => setShowCertModal(true)}
                      className="text-lg p-3 px-4 rounded-full bg-blue-200 hover:bg-blue-600"
                    >
                      Add New +
                    </button>
                    {showCertModal && (
                      <Certificates
                        onClose={() => setShowCertModal(false)}
                        onSubmit={handleSubmitCert}
                      />
                    )}
                    <div className="mt-4 w-full items-center flex">
                      {certData.map((cert, index) => (
                        <div key={index} className="p-3">
                          <div className="p-5 bg-blue-200 rounded-xl">
                            <p className="text-2xl">{cert.title}</p>
                            <p className="text-md">{cert.dateReceived}</p>
                            <p className="text-md">{cert.description}</p>
                            <div className="mt-5 flex space-x-5">
                              <button
                                className="bg-green-300 px-4 rounded-xl"
                                onClick={() => handleEditCert(index)}
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteCert(index)}
                                className="text-white bg-red-500 px-4 py-2 rounded-md"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
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

export default Create;
