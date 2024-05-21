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

const BasicPortfolio2 = ({ portfolioInfo }) => {
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
  }, [skills, socialLinks]);

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
        className="min-h-screen lg:px-[100px] lg:py-[60px] w-full bg-gradient-to-r from-slate-500 to-slate-800"
      >
        <div className="sm:pt-[150px] lg:pt-50 flex justify-between lg:flex-row flex-col-reverse lg:mx-[30px] lg:gap[20px] lg:text-start items-center text-center text-lime-300">
          <div className="lg:w-[50%] w-full">
            <h2 className="lg:text-[66px] text-[40px] font-bold whitespace-pre-wrap">
              <span className="text-white">{firstName}</span> {lastName}
            </h2>
            <p className="py-[20px] text-[20px] text-white">{bio}</p>
            {resumeLink && (
              <a href={resumeLink}>
                <button className="bg-lime-300 hover:bg-gradient-to-r from-slate-500 to-slate-800 hover:text-lime-300 text-black font-bold py-2 px-4 border border-lime-300 rounded-full">
                  Resume
                </button>
              </a>
            )}
          </div>
          <div className="lg:mr-36">
            <img
              src={profileImg ? profileImg : ProfilePic}
              alt=""
              className="w-80 my-20"
            />
          </div>
        </div>
      </div>

      <section
        name="about"
        className="h-auto w-full bg-gradient-to-r from-slate-500 to-slate-800 overflow-hidden"
      >
        <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
          {/* left */}
          <div className="relative">
            <div className="h-full rounded-full overflow-hidden">
              <img
                className="w-80"
                src={profileImg ? profileImg : ProfilePic}
                alt=""
              />
            </div>
          </div>
          {/* right */}
          <div className="my-auto flex flex-col gap-3">
            <h1 className="text-5xl text-lime-300 font-bold">ABOUT ME</h1>
            <p className="text-white">{about}</p>
          </div>
        </div>
      </section>

      <section
        name="skills"
        className="h-auto w-full bg-gradient-to-r from-slate-500 to-slate-800 sm:items-center"
      >
        <div className="container mx-auto py-48">
          {/* top */}
          <div className="flex flex-col flex-wrap gap-3 items-center">
            <h1 className="text-5xl text-lime-300 font-bold font">Skills</h1>
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

      <section
        name="projects"
        className="h-auto w-full bg-gradient-to-r from-slate-500 to-slate-800"
      >
        <div className="container mx-auto flex flex-wrap py-48">
          <h2 className="w-full text-5xl font-bold leading-tight text-center text-lime-300">
            Projects
          </h2>
          {projects.map((project, key) => (
            <div
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
              key={key}
            >
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow border-2 border-lime-300">
                <div className="w-full font-bold text-3xl text-gray-800 px-6 mx-auto text-center">
                  <p className="cursor-default">{project.projectTitle}</p>
                </div>
                <img
                  src={project.previewImages ? project.previewImages[0] : Hero}
                  onClick={() => handleOpenProject(project)}
                  className="mx-auto bg-contain shadow-xl scale-75 rounded-lg hover:scale-95 transition-all cursor-pointer w-90 h-70 object-contain"
                  alt=""
                />
              </div>
              <div className="flex mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <Link to={project.githubLink}>
                  <button className="bg-lime-300 hover:bg-gradient-to-r from-slate-500 to-slate-800 hover:text-lime-300 text-black font-bold py-2 px-4 border border-lime-300 rounded-full mx-auto">
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
        className="h-full w-full bg-gradient-to-r from-slate-500 to-slate-800"
      >
        <div className="container mx-auto py-48">
          {/* top */}
          <div className="flex flex-col gap-3 items-center justify-center">
            <h1 className="text-5xl text-lime-300 font-bold">Contact</h1>
            <p className="w-1/2 text-center text-white mb-8">
              Do you have an idea? Let's discuss it and see what we can do
              together.
            </p>
          </div>
          {/* bottom */}

          <div className="md:w-1/2 sm:w-full text-md lg:text-xl mb-8 space-y-5 mx-auto px-10">
            <div className="flex items-center space-x-4">
              <div className="flex text-center text-white justify-center ">
                <IoPersonCircleOutline
                  size={35}
                  className="cursor-pointer text-lime-300"
                />
              </div>
              <div className="flex-1 text-white">{`${firstName} ${lastName}`}</div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex text-center text-white justify-center">
                <MdEmail size={35} className="cursor-pointer text-lime-300" />
              </div>
              <div className="flex-1 text-white overflow-hidden">{email}</div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex text-center text-white justify-center">
                <MdPlace size={35} className="cursor-pointer text-lime-300" />
              </div>
              <div className="flex-1 text-white">{address}</div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex text-center text-white justify-center">
                <BsTelephone
                  size={35}
                  className="cursor-pointer text-lime-300"
                />
              </div>
              <div className="flex-1 text-white">{contactNum}</div>
            </div>
          </div>

          <div className="flex justify-center items-center mx-auto space-x-4">
            {socialComponent.map((component, key) => (
              <div key={key} style={{ color: "#bef264" }}>
                {component}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full bg-black">
        <div className="container mx-auto py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-lime-300 ms-5">
              {lastName}.
            </span>
          </div>
          <span className="hidden mx-auto md:block font-medium text-white">
            © 2024 Portfolio. Design with ♥️ by Jay Ann Rose Gerente.
          </span>
        </div>
      </div>
    </>
  );
};

export default BasicPortfolio2;
