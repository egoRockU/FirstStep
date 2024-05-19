import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-orange-200 min-h-fit flex flex-col space-y-10 justify-start items-center py-16 px-5 text-center">
    
    <nav class="flex justify-center flex-wrap gap-6 text-gray-800 font-medium">
        <a class="hover:font-bold medium  text-gray-900" href="home">Home</a>
        <a class="hover:font-bold medium  text-gray-900" href="portfolio">Portfolio</a>
        <a class="hover:font-bold medium  text-gray-900" href="skills">Skills</a>
        <a class="hover:font-bold medium  text-gray-900" href="contact">Contact</a>
    </nav>


    <div class="flex justify-center space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/github--v2.png" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
    </div>


    <p className="max-w-xl font-medium text-emerald-600 mb-10">
    ©2022  Intern.CCL
    </p>
   </div>
  )
}

export default Footer