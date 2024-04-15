import React from "react";
import {FaTwitter, FaFacebook, FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import Avatar from "../../img/avatar3.png";
const Home = () => {

  const SOCIAL =[
    {
      id: 1,
      link: "https://twitter.com",
      icon: <FaTwitter />,
    },

    {
      id: 2,
      link: "https://facebook.com",
      icon: <FaFacebook />,
    },

    {
      id: 3,
      link: "https://Github.com",
      icon: <FaGithub />,
    },

    {
      id: 4,
      link: "https://linkedin.com",
      icon: <FaLinkedin />,
    },
  ];

  window.addEventListener("scroll", function (){
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });
  

  return (
  <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
    <h2 className="text-5xl  text-emerald-500 font-bold">CLEO CLYADE</h2>
    <h3 className="py-3 text-2xl text-emerald-600">Web Developer</h3>
    <p className="max-w-xl font-semibold text-emerald-500">
      Hello <span className="animate-pulse text-4xl">👋</span>,
      Welcome to my Website.I create web pages with UI / UX user interface,
                    I have a experience and many project during my internship 
                    and my clients are happy with the project carried out.
    </p>

    {/*Social icon */}
    <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3 text-emerald-700">
      {SOCIAL.map(({id, link, icon}) => (
        <a href={link} 
        key={id}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer duration-300 hover:text-teal-400"
        >
          
          {icon}
        </a>
      ))}
        </div>
      <div>
        <img src={Avatar} alt= "avatar3" className="w-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-emerald-400 rounded-2xl pt-5"/>
       
        <a href="" download={true} className="flex items-center justify-center mt-10 bg-gradient-to-r from-emerald-500 to text-emerald-950 font-semibold uppercase py-2 rounded-lg">
          Resume 
        </a>
      </div>
      {}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-500 text-2xl animate-bounce"/>
      </div>

  </section>
  )
};

export default Home