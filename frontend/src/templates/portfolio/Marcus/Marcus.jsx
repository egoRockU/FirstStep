import profile from "./img/pp.jpeg";
import BG from "./img/bg.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getSkillsIcons from "./utils/GetSkillsIcon";
import { convertResLink } from "../../../utils/convertResLink";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Marcus = ({ portfolioInfo }) => {
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
  const navigate = useNavigate();

  const [skillAttribs, setSkillAttribs] = useState([]);
  const [resumeLink, setResumeLink] = useState();

  useEffect(() => {
    setSkillAttribs(getSkillsIcons(skills));
    if (resume.resumeId) {
      setResumeLink(convertResLink(resume));
    } else {
      setResumeLink(false);
    }
  }, []);

  const visitResume = () => {
    if (resumeLink) {
      navigate(resumeLink);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-gradient-to-b from-gray-800 to-black text-gray-500">
        <div className="flex justify-between items-center w-full px-4 text-white bg-black py-5">
          <div>
            <h1 className="text-4xl ml-2 text-white">{lastName}</h1>
          </div>

          <ul className=" flex space-x-6 px-4 cursor-pointer capitalize font-medium text-gray-500">
            <li className="hover:scale-105 duration-200">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:scale-105 duration-200">
              <a href="#About">About</a>
            </li>
            <li className="hover:scale-105 duration-200">
              <a href="#Portfolio">Projects</a>
            </li>
            <li className="hover:scale-105 duration-200">
              <a href="#Experience">Skills</a>
            </li>
            <li className="hover:scale-105 duration-200">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Home */}
        <div
          id="home"
          className="mx-auto flex flex-row items-center justify-around px-4 mt-10 h-screen"
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white">
              {`${firstName} ${lastName}`}
            </h2>
            <p className="text-gray-500 py-4 max-w-md mb-6">{bio}</p>

            {resumeLink && (
              <a href={resumeLink}>
                <button className="w-[200px] rounded-full bg-slate-800 text-white py-2">
                  Resume
                </button>
              </a>
            )}
          </div>

          <div>
            <img
              src={profileImg ? profileImg : profile}
              alt="my profile"
              className="rounded-2xl mx-auto h-[400px] "
            />
          </div>
        </div>

        <div id="About" className="">
          <div className=" p-4 mx-auto flex flex-col justify-center text-center">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                About
              </p>
            </div>

            <p className="text-xl mt-20">{about}</p>
          </div>
        </div>

        {/* Projects */}
        <div id="Portfolio" className="">
          <div className=" p-4 mx-auto flex flex-col justify-center text-center">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                Projects
              </p>
              <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid mb-8 grid-cols-3 gap-y-7 place-items-center">
              {projects.map((project, key) => (
                <div className="flex gap-8 px-12 ">
                  <div className="shadow-md shadow-gray-600 rounded-lg w-[300px] ">
                    <img
                      src={
                        project.previewImages ? project.previewImages[0] : BG
                      }
                      alt=""
                      className="rounded-md duration-200 hover:scale-105 w-full "
                    />
                    <div className="flex items-center justify-center ">
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center">
                        Demo
                      </button>
                      <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                        Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div
            id="Experience"
            className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white text-center"
          >
            <div>
              <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                Skills
              </p>
              <p className="py-6">
                These are the technologies I've worked with
              </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {skillAttribs.map(({ src, title }, key) => (
                <div
                  key={key}
                  className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg "
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id="Contact"
          className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-center"
        >
          <div className="pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="pt-8">Get in touch with me @:</p>
          </div>

          <div className=" flex justify-center items-center">
            <div className=" flex flex-col mb-10">
              <p className="flex justify-center items-center">
                <MdEmail />
                tapang.marcusjames.bscs2021@gmail.com
              </p>
              <p className="flex justify-center items-center">
                <FaLocationDot />
                Caloocan City, Philippines
              </p>
              <p className="flex justify-center items-center">
                <IoIosCall /> 09365656656
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marcus;
