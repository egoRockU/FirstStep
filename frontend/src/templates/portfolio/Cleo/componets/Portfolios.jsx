import React from 'react'
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import p3 from "../../img/p3.jpg";
import p4 from "../../img/p4.jpg";
import p5 from "../../img/p5.jpg";
import p6 from "../../img/p6.jpg";

const Portfolios = () => {

    const project = [
        { 
            id: 1,
            image: p1,
            title: "Best App",
            github: "https://github.com",
            demo:"https://reactjs.org/en/"
        },

        { 
            id: 2,
            image: p2,
            title: "Best App",
            github: "https://github.com",
            demo:"https://reactjs.org/en/"
        },

        { 
            id: 3,
            image: p3,
            title: "Best App",
            github: "https://github.com",
            demo:"https://reactjs.org/en/"
        },

        { 
            id: 4,
            image: p4,
            title: "Age of Empires",
            github: "https://github.com",
            demo:"https://reactjs.org/en/"
        },

        { 
            id: 5,
            image: p5,
            title: "Best App",
            github: "https://github.com",
            demo:"https://reactjs.org/en/"
        },

        { 
            id: 6,
            image: p6,
            title: "Best App",
            github: "https://github.com",
            demo:"https://reactjs.org/en/"
        },
    ]
  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
    <h2 className="text-4xl  text-emerald-500 font-bold">PORTFOLIO 🗒</h2>
    <p className="max-w-xl p-5 font-semibold text-emerald-500">
      These are all the projects that i have worked on. Some of them I have a worked before I gained some experience
      in my Interneship, So gentle on them.
    </p> 

    <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 text-emerald-400">
        
        {project.map(({id, image, title, github, demo}) => (
            <div key={id} className="max-w-lg flex shadow-lg shadow-emerald-600 rounded-2xl overflow-hidden">
                <img src={image} alt={title} className="w-2/3" />
                <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                    <h2 className=" text-emerald-500 font-semibold">{title}</h2>

                    <a className="text-2xl cursor-pointer duration-150 hover:scale-110" href={github} target="_blank" rel="noopener noreferrer">
                        <FaGithub /></a>

                    <a  className="text-2xl cursor-pointer duration-150 hover:scale-110" href={demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkSquareAlt /></a>
                </div>
            </div>
        ))}

    </div>

    </section>
  )
}

export default Portfolios