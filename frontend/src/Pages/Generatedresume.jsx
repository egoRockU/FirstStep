import React, { useEffect } from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Navbar from "../Components/Newnavbar";
import Footer from "../Components/Footer";
import resume from "../images/resume.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import BasicTemplate from "../templates/resume/basicTemplate";
import BasicTemplate2 from "../templates/resume/basicTemplate2";
import TwoColumn from "../templates/resume/twoColumn";
import Tapang from "../templates/resume/tapang";
import Simple from "../templates/resume/simple";
import Orange from "../templates/resume/orangeTemplate";

function Generatedresume() {
  const { user } = useSelector((state) => state.user);
  const { templateId, resumeId } = useParams();
  const [template, setTemplate] = useState();

  useEffect(() => {
    getResumeInfo();
  }, [resumeId]);

  const getResumeInfo = () => {
    axios
      .post(
        "/api/resume/retrieveone",
        { resumeId },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        identifyTemplate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const identifyTemplate = (resumeInfo) => {
    switch (templateId) {
      case "1":
        setTemplate(<BasicTemplate resumeInfo={resumeInfo} />);
        break;
      case "2":
        setTemplate(<BasicTemplate2 resumeInfo={resumeInfo} />);
        break;
      case "3":
        setTemplate(<TwoColumn resumeInfo={resumeInfo} />);
        break;
      case "4":
        setTemplate(<Tapang resumeInfo={resumeInfo} />);
        break;
      case "5":
        setTemplate(<Simple resumeInfo={resumeInfo} />);
        break;
      case "6":
        setTemplate(<Orange resumeInfo={resumeInfo} />);
        break;
      default:
        setTemplate(<BasicTemplate resumeInfo={resumeInfo} />);
        break;
    }
  };

  return (
    <>
      <div className="bg-white">
        {user ? <NavbarLoggedIn /> : <Navbar />}
        <div className="max-w-screen-2xl mx-auto px-4 pt-32 pb-24">
          <div className="w-full lg:w-5/6 mx-auto flex flex-col">
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-center py-3">
                <h1 className="text-2xl font-bold text-[#444b88]">RESUME</h1>
              </div>
              {template}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Generatedresume;
