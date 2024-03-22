import React, { useEffect } from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import resume from "../images/resume.png";
import { useParams } from "react-router-dom";
import BasicTemplate from "../templates/resume/basicTemplate";
import axios from "axios";
import { useState } from "react";

function Generatedresume() {
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
      default:
        setTemplate(<BasicTemplate resumeInfo={resumeInfo} />);
        break;
    }
  };

  return (
    <>
      <div className="bg-white">
        <NavbarLoggedIn />
        <div className="max-w-screen-2xl mx-auto px-4 pt-32 pb-24">
          <div className="w-5/6 mx-auto flex flex-col">
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
