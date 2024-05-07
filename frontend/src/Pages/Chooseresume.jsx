import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import resume from "../images/resume.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Resumepreview from "../Modals/Resumepreview";
import bt1prev from "../images/resumeTemplates/1.png";
import bt2prev from "../images/resumeTemplates/2.png";
import twoColumn from "../images/resumeTemplates/twoColumn.png";
import tapang from "../images/resumeTemplates/Tapang.png";

function Chooseresume() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    //navigate to createresume if no info provided
    if (location.state === null) {
      navigate("/createresume");
    }
  }, []);

  const resumeInfo = location.state?.resumeInfo;

  const resumeTemplates = [
    { id: 1, title: "Basic Template", imageUrl: bt1prev },
    { id: 2, title: "Basic Template2", imageUrl: bt2prev },
    { id: 3, title: "Two Column", imageUrl: twoColumn },
    { id: 4, title: "Tapang", imageUrl: tapang },
  ];

  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const handleOpen = (template) => {
    setShowPreviewModal(true);
    setSelectedTitle(template.title);
    setSelectedImage(template.imageUrl);
    setSelectedId(template.id);
  };

  const handleClose = () => {
    setShowPreviewModal(false);
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
              <div className="grid grid-cols-3 gap-4 text-center w-2/3 mx-auto pt-10">
                {resumeTemplates.map((template, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 border border-[#444b88] flex flex-col justify-between"
                  >
                    <img
                      src={template.imageUrl}
                      alt={template.title}
                      className="w-full h-auto pb-4 hover:scale-105 transform transition-transform duration-300 hover:rounded-lg"
                      onClick={() => handleOpen(template)}
                    />
                    <h3 className="text-lg font-semibold text-[#444b88]">
                      {template.title}
                    </h3>
                  </div>
                ))}
              </div>
              {showPreviewModal && (
                <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <Resumepreview
                    title={selectedTitle}
                    image={selectedImage}
                    onClose={handleClose}
                    resumeInfo={resumeInfo}
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

export default Chooseresume;
