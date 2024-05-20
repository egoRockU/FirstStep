import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import ProfilePic from "./images/female_avatar_efig.svg";
import Hero from "./images/hero.jpg";
import { identifySocialLinks, getSkillsComponent } from "./utils/GetComponents";
import { Link } from "react-router-dom";
import ProjectsModal from "./components/ProjectsModal";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { convertResLink } from "../../../utils/convertResLink";

const BasicPortfolio = ({ portfolioInfo }) => {
  const {
    profileImg,
    firstName,
    lastName,
    email,
    address,
    contactNum,
    bio,
    socialLinks,
    about,
    skills,
    projects,
    resume,
  } = portfolioInfo;

  const [showModal, setShowModal] = useState(false);
  const [socialComponent, setSocialComponent] = useState([]);
  const [skillsComponent, setSkillsComponent] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [resumeLink, setResumeLink] = useState();

  useEffect(() => {
    setSocialComponent(identifySocialLinks(socialLinks));
    setSkillsComponent(getSkillsComponent(skills));
    getResumeLink();
  }, [socialLinks, skills, resume]);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseProject = () => {
    setSelectedProject();
    setShowModal(false);
  };

  const getResumeLink = () => {
    if (resume.resumeId) {
      setResumeLink(convertResLink(resume));
    } else {
      setResumeLink(false);
    }
  };

  return (
    <>
      <Nav name={lastName} />
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-r from-cyan-950 to-blue-950"
      >
        <div className="container mx-auto text-gray-200 h-full flex flex-col justify-center items-start pl-5">
          <div className="z-10 w-full lg:w-2/5 2xl:w-1/2 mx-auto my-8 text-center mt-20">
            <img
              src={profileImg ? profileImg : ProfilePic}
              alt=""
              className="w-48 md:w-80 mx-auto"
            />
            <h1 className="heading text-cyan-200 text-xl md:text-6xl font-bold lg:text-5xl !leading-normal">
              {`${firstName} ${lastName}`}
            </h1>
            <h1 className="heading text-base mb-8 lg:text-lg !leading-normal">
              {bio}
            </h1>

            {resumeLink && (
              <a href={resumeLink}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full">
                  Resume
                </button>
              </a>
            )}
            <div className="flex mt-6 justify-center items-center mx-auto space-x-4">
              {socialComponent.map((component, key) => (
                <div key={key}>{component}</div>
              ))}
            </div>
          </div>
        </div>

        <section
          name="about"
          className="h-auto w-full bg-white overflow-hidden"
        >
          <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
            {/* left */}
            <div className="relative">
              <div className="h-full rounded-full overflow-hidden">
                <img
                  className="mx-auto hidden md:block w-80"
                  src={profileImg ? profileImg : ProfilePic}
                  alt=""
                />
              </div>
            </div>
            {/* right */}
            <div className="my-auto flex flex-col gap-3">
              <h1 className="text-5xl text-cyan-950 font-bold">ABOUT ME</h1>
              <p className="text-gray-400">{about}</p>
            </div>
          </div>
        </section>

        <section
          name="skills"
          className="w-full bg-gradient-to-r from-cyan-950 to-blue-950 sm:items-center"
        >
          <div className="container mx-auto">
            {/* top */}
            <div className="flex flex-col flex-wrap gap-3 items-center">
              <h1 className="text-5xl text-cyan-200 font-bold font mt-28">
                Skills
              </h1>
            </div>
            {/* bottom */}
            <div className="p-5 sm:p-0 flex flex-wrap justify-between cursor-pointer">
              {skillsComponent.map((skillComponent, key) => (
                <div
                  className="w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1 transition-all hover:scale-110"
                  key={key}
                >
                  {skillComponent}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section name="projects" className="h-auto w-full">
          <div className="container mx-auto flex flex-wrap py-20">
            <h2 className="w-full my-12 text-5xl font-bold leading-tight text-center text-black">
              Projects
            </h2>
            {projects.map((project, key) => (
              <div
                className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
                key={key}
              >
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-2 border-black">
                  <div className="w-full font-bold text-3xl text-gray-800 px-6 mx-auto text-center">
                    <p className="cursor-default">{project.projectTitle}</p>
                  </div>
                  <img
                    src={
                      project.previewImages ? project.previewImages[0] : Hero
                    }
                    onClick={() => handleOpenProject(project)}
                    className="mx-auto bg-contain shadow-xl scale-75 rounded-lg hover:scale-95 transition-all cursor-pointer w-90 h-70 object-contain"
                    alt=""
                  />
                </div>
                <div className="flex mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <Link to={project.githubLink}>
                    <button className="bg-white text-black font-bold py-2 px-4 border border-black rounded-full mx-auto">
                      Github
                    </button>
                  </Link>
                </div>
              </div>
            ))}

            {/* Modal */}
            {showModal && (
              <ProjectsModal
                project={selectedProject}
                onClose={handleCloseProject}
              />
            )}
          </div>
        </section>

        <section
          name="contact"
          className="h-5/6 w-full bg-gradient-to-r from-cyan-950 to-blue-950"
        >
          <div className="container mx-auto">
            {/* top */}
            <div className="flex flex-col gap-3 items-center justify-center">
              <h1 className="text-5xl text-cyan-200 font-bold mt-36">
                Contact
              </h1>
              <p className="w-1/2 text-center text-white mb-8">
                Do you have an idea? Let's discuss it and see what we can do
                together.
              </p>
            </div>
            {/* bottom */}

            <div className="md:w-1/2 sm:w-full text-md md:text-xl mb-8 space-y-5 mx-auto ms-5">
              <div className="flex items-center space-x-4">
                <div className="flex text-center text-white justify-center ">
                  <IoPersonCircleOutline size={35} className="cursor-pointer" />
                </div>
                <div className="flex-1 text-white">
                  {`${firstName} ${lastName}`}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex text-center text-white justify-center">
                  <MdEmail size={35} className="cursor-pointer" />
                </div>
                <div className="flex-1 text-white overflow-hidden">{email}</div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex text-center text-white justify-center">
                  <MdPlace size={35} className="cursor-pointer" />
                </div>
                <div className="flex-1 text-white">{address}</div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex text-center text-white justify-center">
                  <BsTelephone size={35} className="cursor-pointer" />
                </div>
                <div className="flex-1 text-white">{contactNum}</div>
              </div>
            </div>

            <div className="flex justify-center items-center mx-auto space-x-4">
              {socialComponent.map((component, key) => (
                <div key={key} style={{ color: "white" }}>
                  {component}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="w-full bg-gray-800">
          <div className="container mx-auto py-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-cyan-200">
                {lastName}.
              </span>
            </div>
            <span className="hidden mx-auto md:block font-medium text-white">
              © 2024 Portfolio. Design with ♥️ by Jay Ann Rose Gerente.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicPortfolio;
