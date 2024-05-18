import React from "react";
import avatar from "../../img/avatar.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub} from "react-icons/fa";
const Home = () => {
  
    const SOCIAL = [

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
            link: "https://github.com",
            icon: <FaGithub />,
        },
    
        {
            id: 4,
            link: "https://linkedin.com",
            icon: <FaLinkedin />,
        },
    
     ];
  
    return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-orange-50 to-orange-200">
      
       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
       md:flex-row">

            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-black">
                    I'm Software Engineer
                </h2>
                <p className="text-gray-900 py-4 max-w-md">
                    I have experience being Intern as sofware development,
                    Currently, I love to work on web application using 
                    technologies like, React js, JavaScript, CSS
                </p>

                <div className="flex justify-evenly py-6 lg:py-15 text-2xl w-full md:w1/2">
                    {SOCIAL.map(({id, link, icon}) => (
                        <a href={link} key={id} target="_blank" rel="nooper noreferrer"
                        className="cursor-pointer duration-400 hover:text-gray-700">
                            {icon}
                        </a>
                     ))}
                </div>
                
                <div>
                    <button className="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md
                    bg-gradient-to-r from-orange-100 to-orange-300">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300"> 
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span> 
                    </button>
                </div>
                 </div>

            <div>
                <img src={avatar} alt="my picture"
                   className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                
            </div>

       </div>
    </div>
  );
};

export default Home