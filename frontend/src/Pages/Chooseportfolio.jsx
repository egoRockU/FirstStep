import React from 'react'
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import tommy from "../images/hero1bg.png";

function Chooseportfolio() {
    const resumeTemplates = [
        { title: "Template 1", imageUrl: tommy },
        { title: "Template 2", imageUrl: tommy },
        { title: "Template 3", imageUrl: tommy },
        { title: "Template 4", imageUrl: tommy },
      ];
  return (
    <>
    <div className="bg-gray-200">
      <NavbarLoggedIn />
      <div className="max-w-screen-2xl mx-auto px-4 pt-32 pb-24">
        <div className="flex flex-col w-full items-center bg-white pb-10 shadow-lg">
          <div className="flex flex-col w-full mx-auto pt-10">
            <div className="flex flex-col items-center w-full gap-3">
              <h1 className="text-2xl text-[#444b88] font-bold">CHOOSE A TEMPLATE</h1>
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
                    className="w-full h-auto pb-4 hover:scale-105 transform transition-transform duration-300 hover:rounded-lg"
                  />
                  <h3 className="text-lg font-semibold text-[#444b88]">
                    {template.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}

export default Chooseportfolio
