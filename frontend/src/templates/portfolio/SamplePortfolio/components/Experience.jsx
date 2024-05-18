import React from "react";

import html from "../../img/logohtml.png";
import  Reactjs from "../../img/logoreact.png";
import CSS from "../../img/logocss.png";
import Github from "../../img/logogithub.png";
import Tailwind from "../../img/logotailwind.png";
import Js from "../../img/logojs.png";



const Skills = () => {

    const techs = [
        {
            id:1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'

        },

        {
            id:2,
            src: Reactjs,
            title: 'ReactJs',
            style: 'shadow-blue-500'

        },

        {
            id:3,
            src: CSS,
            title: 'CSS',
            style: 'shadow-blue-500'

        },

        {
            id:4,
            src: Github,
            title: 'GITHUB',
            style: 'shadow-gray-500'

        },

        {
            id:5,
            src: Tailwind,
            title: 'Tailwindcss',
            style: 'shadow-sky-400'

        },

        {
            id:6,
            src: Js,
            title: 'JavaScript',
            style: 'shadow-white'

        },
    ]




  return (
    <div name= 'skills' className="h-screen w-full bg-gradient-to-b from-orange-50 to-orange-200">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-800">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-gray-900">Skills</p>
                <p className="py-6 font-semibold font text-lg"> These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techs.map(({ id, src, title, style}) =>(

                        <div key={id}
                          className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                        <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>

                    ))
                }
            </div>

        </div>
    </div>
  );
};

export default Skills