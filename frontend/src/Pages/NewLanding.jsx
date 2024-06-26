import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Bg from "../images/newlandingbg.png";
import Newnavbar from "../Components/Newnavbar";
import abi from "../images/hevabi.mp4";
import resume from "../images/resume.png";
import portfolio from "../images/portfolio.png";
import applicants from "../images/applicants.png";
import Footer from "../Components/Footer";
import "../Fonts.css";
import NavbarloggedinBlack from "../Components/NavbarloggedinBlack";
import applicants2 from "../images/look-for-applicants.jpg";
import portfolio2 from "../images/choose-your-portfolio.jpg";
import resume2 from "../images/create-your-resume.jpg";

function NewLanding() {
  const { user } = useSelector((state) => state.user);
  const landingStyle = {
    background: `url(${Bg}) center/cover no-repeat`,
    fontFamily: "Montserrat, sans-serif",
    height: "998px",
  };

  const navigate = useNavigate();

  const clickjoin = () => {
    navigate("/newlogin");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const editProfile = () => {
    const profileType = user.profileType;

    if (profileType == "applicant") {
      navigate("/editprofile");
    }
    if (profileType == "employer") {
      navigate("/editemployer");
    }
    if (!profileType) {
      navigate("/choose");
    }
  };

  return (
    <div style={landingStyle}>
      <>
        {user ? <NavbarloggedinBlack /> : <Newnavbar />}
        <div className="h-3/4 w-full flex flex-col lg:justify-around pt-20">
          <div className="w-[80%] mx-auto flex flex-col items-center lg:items-start h-[80%] justify-around text-center">
            <div className="flex flex-col w-[90%]  md:w-1/2">
              <h1 className="text-5xl md:text-6xl text-white font-semibold">
                Craft Your Tomorrow
              </h1>
              <h1 className="text-xl md:text-6xl text-white font-semibold">
                Shape Your Dreams
              </h1>
              <h1 className="text-lg md:text-4xl text-white font-semibold opacity-60">
                Explore Your Future With Us
              </h1>
            </div>
            <div className="flex flex-col w-[90%] lg:w-1/2">
              <h1 className="text-base text-white leading-6 lg:leading-8">
                Unleash your hidden talents! Build a winning resume & portfolio,
                showcase your skills, and get noticed by dream employers. Take
                control of your career journey, start today!
              </h1>
            </div>
            <div className="w-1/2 flex flex-col items-center">
              {!user && (
                <button
                  className="bg-blue-300 py-4 px-24 lg:px-32 rounded-full whitespace-nowrap text-white hover:bg-blue-600"
                  onClick={clickjoin}
                >
                  Join Today!
                </button>
              )}
              {user && (
                <button
                  className="bg-blue-300 py-4 px-24 rounded-full whitespace-nowrap text-white hover:bg-blue-600"
                  onClick={editProfile}
                >
                  Edit your Profile!
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="relative">
          <video
            className="max-w-full w-full h-[1000px] object-cover"
            autoPlay
            loop
            muted
          >
            <source src={abi} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black bg-opacity-50 blur flex items-center justify-center"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl lg:text-5xl text-white font-semibold text-center">
              Explore Potential Hires Today!
            </h1>
            <p className="text-base text-white leading-10 w-[90%] lg:w-4/5 text-center">
              Effortless search, exceptional hires. Discover diverse portfolios,
              connect with <br /> standout applicants, and transform your
              workforce.
            </p>
          </div>

          <div
            className="absolute inset-x-0 bottom-80 flex flex-col items-center justify-center"
            style={{ zIndex: 10 }}
          >
            {!user && (
              <button
                className="bg-blue-300 py-4 px-24 lg:px-32 rounded-full text-white hover:bg-blue-600"
                onClick={clickjoin}
              >
                Join Today!
              </button>
            )}
            {user && (
              <button
                className="bg-blue-300 py-4 px-24 lg:px-32 rounded-full text-white hover:bg-blue-600"
                onClick={editProfile}
              >
                Edit your Profile!
              </button>
            )}
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
          }}
          className="relative"
        >
          <div className="bg-gradient-to-b from-black to-transparent relative flex flex-col items-center">
            <div className="w-[90%] md:w-[70%] h-[500px] md:h-[700px] lg:h-[800px] rounded-2xl justify-center items-center pt-36">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-white">
                  Build your best Brand, Get Hired Faster, Hire Smarter
                </h1>
              </div>
              <div className="flex justify-center gap-5 h-3/4">
                <div
                  className="w-1/3 h-full bg-cover bg-center hover:w-[45%] hover:h-auto transition-all duration-300"
                  style={{
                    backgroundImage: `url(${resume})`,
                  }}
                >
                  <a href="#resume">
                    <h1 className="md:text-2xl lg:text-4xl text-white mt-6 ml-6">
                      Resume
                    </h1>
                  </a>
                </div>

                <div
                  className="w-1/3 h-full bg-cover bg-center relative hover:w-[45%] hover:h-auto transition-all duration-300"
                  style={{
                    backgroundImage: `url(${portfolio})`,
                  }}
                  onClick={() => scrollToSection("portfolio")}
                >
                  <a href="#portfolio">
                    <h1 className="md:text-2xl lg:text-4xl text-white mt-4 ml-6">
                      Portfolio
                    </h1>
                  </a>
                </div>
                <div
                  className="w-1/3 h-full bg-cover bg-center relative hover:w-[45%] hover:h-auto transition-all duration-300"
                  style={{
                    backgroundImage: `url(${applicants})`,
                    position: "relative",
                  }}
                  onClick={() => scrollToSection("applicants")}
                >
                  <a href="#Applicants">
                    <h1 className="md:text-2xl lg:text-4xl text-white mt-4 ml-6">
                      Applicants
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*
          <div className="relative top-[500px] w-[70%] mx-auto h-[600px] p-10 rounded-2xl">
            <h1 className="text-3xl">Frequently Asked Questions</h1>
            <div className="flex flex-col h-full justify-around">
              <div className="bg-white h-24 w-full rounded-xl text-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  quis aperiam, hic veniam aut est ea consequuntur dolorem
                  laborum dignissimos?
                </p>
              </div>
              <div className="bg-white h-24 w-full rounded-xl text-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  quis aperiam, hic veniam aut est ea consequuntur dolorem
                  laborum dignissimos?
                </p>
              </div>
              <div className="bg-white h-24 w-full rounded-xl text-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  quis aperiam, hic veniam aut est ea consequuntur dolorem
                  laborum dignissimos?
                </p>
              </div>
              <div className="bg-white h-24 w-full rounded-xl text-center">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
                  quis aperiam, hic veniam aut est ea consequuntur dolorem
                  laborum dignissimos?
                </p>
              </div>
            </div>
          </div>
          */}

          <div className="mx-auto flex gap-20 flex-col pb-36 px-5">
            <a name="resume"></a>
            <div className=" w-[100%] lg:w-[70%] px-2 mx-auto rounded-2xl flex gap-5 flex-col xl:flex-row items-center">
              <div>
                <img
                  src={resume2}
                  alt="Construct your image"
                  className="rounded-lg w-auto sm:max-w-[500px]"
                />
              </div>
                <div className="rounded-xl flex flex-col items-center xl:items-start">
                  <h1 className="text-xl lg:text-3xl  text-indigo-500 font-semibold">
                    Construct Your Resume
                  </h1>
                  <h2 className="text-md lg:text-xl leading-relaxed font-semibold">
                    Applicant Profile is all you need to have a good resume. You
                    don’t have to worry about the formatting or layout. We take
                    care that for you. All you need to do is choose a template
                    and finalize your inputs and we will handle it.
                  </h2>
                  <button
                    className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-black hover:text-white font-semibold"
                    onClick={() => navigate("/createresume")}
                  >
                    Try it
                  </button>
              </div>
            </div>
            <hr className="border-t-2 border-gray-300"></hr>

            <a name="portfolio"></a>
            <div className="w-[100%] lg:w-[70%] mx-auto rounded-2xl flex gap-5 flex-col xl:flex-row items-center">
              <div>
                <div className="rounded-xl flex flex-col items-center xl:items-start">
                  <h1 className="text-xl lg:text-3xl text-indigo-500 font-semibold">
                    Choose Your Portfolio
                  </h1>
                  <h2 className="text-md lg:text-xl leading-relaxed font-semibold">
                    Just like in resume, we create your portfolio based on your
                    Applicant Profile. You don’t have to worry about design and
                    layout. We will handle that for you. We already have designs
                    that will surely fit to your liking!
                  </h2>
                  <button
                    className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-black hover:text-white font-semibold"
                    onClick={() => navigate("/createportfolio")}
                  >
                    Try it
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={portfolio2}
                  alt="Construct your image"
                  className="rounded-lg w-auto sm:max-w-[500px]"
                />
              </div>
            </div>

            <hr className="border-t-2 border-gray-300"></hr>

            <a name="Applicants"></a>
            <div className="w-[100%] lg:w-[70%] mx-auto rounded-2xl flex gap-5 flex-col xl:flex-row items-center">
              <div>
                <img
                  src={applicants2}
                  alt="Construct your image"
                  className="rounded-lg w-auto sm:max-w-[500px]"
                />
              </div>
              <div>
                <div className="rounded-xl flex flex-col items-center xl:items-start">
                  <h1 className="text-xl lg:text-3xl  text-indigo-500 font-semibold">
                    Look For Applicants
                  </h1>
                  <h2 className="text-md lg:text-xl mb-4 leading-relaxed font-semibold">
                    Are you an employer? Create an Employer Profile so that you
                    can reach out to applicants. You can choose depending on
                    what skills or positions you are looking for and view their
                    profile, resume, or portfolio.
                  </h2>
                  <button
                    className="bg-transparent border border-black text-black py-3 px-6 rounded-lg hover:bg-black hover:text-white font-semibold"
                    onClick={() => navigate("/applicantlist")}
                  >
                    Try it
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
}

export default NewLanding;
