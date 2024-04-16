import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import placeholderBanner from "../images/signBg.jpg";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import placeholderImg from "../images/profilee.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import axios from "axios";
import {
  ActivitiesCard,
  AwardCard,
  EducationCard,
  ProjectsCard,
} from "../Components/aplicantcardcomp";

import Awardspreview from "../Modals/Preview Modals/Awardspreview";
import Activitiespreview from "../Modals/Preview Modals/Activitiespreview";
import Educationpreview from "../Modals/Preview Modals/Educationpreview";
import Previewproject from "../Modals/Preview Modals/Previewproject";

function Profile() {
  const { id } = useParams();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [profileImg, setProfileImg] = useState(placeholderImg);
  const [banner, setBanner] = useState(placeholderBanner);
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [skills, setSkills] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [education, setEducation] = useState([]);
  const [activities, setActivities] = useState([]);
  const [projects, setProjects] = useState([]);
  const [awards, setAwards] = useState([]);

  useEffect(() => {
    getApplicant();
  }, []);

  const getApplicant = () => {
    axios
      .post(
        "/api/applicantprofile/retrieveone",
        { profileId: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = res.data;
        setFName(data.firstName);
        setLName(data.lastName);
        setProfileImg(data.profileImg);
        setBanner(data.banner);
        setEmail(data.email);
        setContactNum(data.contactNum);
        setAddress(data.address);
        setBio(data.bio);
        setAbout(data.about);
        setSocialLinks(data.socialLinks);
        setSkills(data.skills);
        setIndustries(data.preferredCareer);
        setEducation(data.education);
        setActivities(data.activitiesAndInvolvements);
        setProjects(data.projects);
        setAwards(data.awards);
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
      });
  };
  //modals state
  const [showActivitiesModal, setShowActivitiesModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const openActivitiesModal = (activity) => {
    setSelectedActivity(activity);
    setShowActivitiesModal(true);
  };

  const [showAwardsModal, setShowAwardsModal] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);

  const openAwardsModal = (award) => {
    setSelectedAward(award);
    setShowAwardsModal(true);
  };

  const [showEducationModal, setShowEducationModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  const openEducationModal = (edu) => {
    setSelectedEducation(edu);
    setShowEducationModal(true);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="bg-gray-100 mx-auto h-[1000px]">
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
                      <label htmlFor="imageInput" className="">
                        <img
                          src={profileImg}
                          alt=""
                          className="w-40 h-40 rounded-full border-2"
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
                          {`${fName} ${lName}`}
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
                            {/* TODO add platform logo */}
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
                        <div className="flex flex-col gap-1 flex-wrap">
                          <h1 className="text-xl">Industry</h1>
                          <div className="flex gap-1 flex-wrap">
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
                </div>
              </div>
              <div className="w-[800px]">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base text-xl">About</h1>
                    {!about && <p>This user did not write anything yet...</p>}
                    {about}
                  </div>
                  <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                    <h1 className="text-[#444B88] font-base">Education</h1>
                    {education.map((edu, index) => (
                      <EducationCard
                        key={index}
                        education={edu}
                        openEducationModal={openEducationModal}
                      />
                    ))}
                  </div>
                  <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                    <h1 className="text-[#444B88] font-base">
                      Activities and Involvements
                    </h1>
                    {activities.map((achievement, index) => (
                      <ActivitiesCard
                        key={index}
                        activity={achievement}
                        openActivitiesModal={openActivitiesModal}
                      />
                    ))}
                  </div>
                  <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                    <h1 className="text-[#444B88] font-base">Projects</h1>
                    {projects.map((project, index) => (
                      <ProjectsCard
                        key={index}
                        projectsData={project}
                        onClick={() => openModal(project)}
                      />
                    ))}
                  </div>
                  <div className="bg-white p-4 text-xl flex flex-col items-center justify-center border-2 border-gray-300 gap-3 rounded-t-lg">
                    <h1 className="text-[#444B88] font-base">Awards</h1>
                    {awards.map((award, index) => (
                      <AwardCard
                        key={index}
                        award={award}
                        openAwardsModal={() => openAwardsModal(award)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showAwardsModal && (
        <Awardspreview
          award={selectedAward}
          onClose={() => setShowAwardsModal(false)}
        />
      )}
      {showActivitiesModal && (
        <Activitiespreview
          activity={selectedActivity}
          onClose={() => setShowActivitiesModal(false)}
        />
      )}
      {showEducationModal && (
        <Educationpreview
          education={selectedEducation}
          onClose={() => setShowEducationModal(false)}
        />
      )}
      {showModal && (
        <Previewproject
          project={selectedProject}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Profile;
