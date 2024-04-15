import React from "react";

import html from "../../img/logohtml.png";
import PHP from "../../img/logo php.png";
import Reactjs from "../../img/logoreact.png";
import CSS from "../../img/logocss.png";
import Github from "../../img/logogithub.png";
import Tailwind from "../../img/logotailwind.png";

const Skills = () => {

    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-700'

        },

        {
            id:2,
            src: PHP,
            title: 'PHP',
            style: 'shadow-purple-600'

        },

        {
            id:3,
            src: Reactjs,
            title: 'ReactJs',
            style: 'shadow-blue-500'

        },

        {
            id:4,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-700'

        },

        {
            id:5,
            src: Github,
            title: 'GITHUB',
            style: 'shadow-gray-400'

        },

        {
            id:6,
            src: Tailwind,
            title: 'Tailwindcss',
            style: 'shadow-sky-700'

        },

    ]




  return (
    
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        
        <h2 className="text-4xl  text-emerald-500 font-bold p-10">MY SKILLS 👩‍💻</h2>
    <p className="max-w-xl font-semibold text-emerald-500">
      Here are all my skills
    </p>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techs.map(({ id, src, title, style}) =>(

                        <div key={id}
                          className={` flex flex-col items-center justify-center p-5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                        <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4 text-xl font-semibold text-emerald-600">{title}</p>
                    </div>

                    ))
                }
            </div>
            </section>

       
  );
};

export default Skills