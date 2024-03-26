import React, { useEffect, useState } from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import tommy from "../images/hero1bg.png";
import { useLocation, useNavigate } from "react-router-dom";
import Portfoliopreview from "../Modals/Portfoliopreview";

function Chooseportfolio() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/createportfolio");
    }
  }, []);

  const portfolioInfo = location.state?.portfolioInfo;
  console.log(portfolioInfo);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const resumeTemplates = [{ id: 1, title: "Template 1", imageUrl: tommy }];

  const handleOpen = (template) => {
    setShowModal(true);
    setSelectedTitle(template.title);
    setSelectedImage(template.imageUrl);
    setSelectedId(template.id);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedTitle("");
    setSelectedImage();
    setSelectedId();
  };

  return (
    <>
      <div className="bg-gray-200">
        <NavbarLoggedIn />
        <div className="max-w-screen-2xl mx-auto px-4 pt-32 pb-24">
          <div className="flex flex-col w-full items-center bg-white pb-10 shadow-lg">
            <div className="flex flex-col w-full mx-auto pt-10">
              <div className="flex flex-col items-center w-full gap-3">
                <h1 className="text-2xl text-[#444b88] font-bold">
                  CHOOSE A TEMPLATE
                </h1>
                <p className="italic text-base">
                  Pick a template you want to use
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center w-2/3 mx-auto pt-10">
                {resumeTemplates.map((template, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 border border-[#444b88]"
                  >
                    <img
                      src={template.imageUrl}
                      alt={template.title}
                      className="w-full h-auto pb-4 hover:scale-105 transform transition-transform duration-300 hover:rounded-lg cursor-pointer"
                      onClick={() => handleOpen(template)}
                    />
                    <h3 className="text-lg font-semibold text-[#444b88]">
                      {template.title}
                    </h3>
                  </div>
                ))}
              </div>
              {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-50 z-50">
                  <Portfoliopreview
                    title={selectedTitle}
                    image={selectedImage}
                    onClose={handleClose}
                    portfolioInfo={portfolioInfo}
                    templateId={selectedId}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Chooseportfolio;
