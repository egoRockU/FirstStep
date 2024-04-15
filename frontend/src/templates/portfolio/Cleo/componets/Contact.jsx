import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import mobile from "../../img/mobile.jpg";

const Contact = () => {

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
        link: "https://linkedin.com",
        icon: <FaLinkedin />,
      },

    ]
  return (
    <section className="min-h-screen flex flex-col justify-start items-center py-10 text-center">
    <h2 className="text-4xl  text-emerald-500 font-bold">CONTACT 📞</h2>
    <p className="max-w-xl p-5 font-semibold text-emerald-500">
      These are the ways you can fet in touch with me. Hope to hear from you soon ^_^
      </p>

      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div><img src={mobile} alt="mobile info" className="w-32 h-32" /></div>
        <div>
          <p className= "max-w-xs md:max-w-lg font-medium text-emerald-500">
              I am open to talk regarding freelancing or full-time opportunities.
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl text-emerald-700">
            {SOCIAL.map(({id, link, icon}) => (
              <a href={link} target="_blank" rel="noopener noreferrer" className="duration-200 ease-in-out  hover:text-teal-400">
                {icon}</a>
            ))}
        </div>

            <div className="p-8 text-left w-full flex items-center justify-center">
              <form action="" method="POST">
                <div className="w-full">

                  <div className="flex flex-col my-2">
                    <label className="capitalize text-sm py-2 font-semibold text-emerald-500">name
                    </label>
                    <input type="text" name="name" className="border-2 rounded-lg p-3 flex focus:outline-none border-emerald-400
                    dark:bg-emerald-700 dark:text-white"/>
                  </div>

                  <div className="flex flex-col my-2">
                    <label className="capitalize text-sm py-2 font-semibold text-emerald-500">phone
                    </label>
                    <input type="text" name="phone" className="border-2 rounded-lg p-3 flex focus:outline-none border-emerald-400
                    dark:bg-emerald-700 dark:text-white"/>
                  </div>

                  <div className="flex flex-col my-2">
                    <label className="capitalize text-sm py-2 font-semibold text-emerald-500">email
                    </label>
                    <input type="text" name="email" className="border-2 rounded-lg p-3 flex focus:outline-none border-emerald-400
                    dark:bg-emerald-700 dark:text-white"/>
                  </div>

                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 font-semibold text-emerald-500">message
                    </label>
                    <textarea name="message" rows="10" className="border-2 rounded-lg p-3 flex focus:outline-none border-emerald-400
                     dark:bg-emerald-700 dark:text-white">
                     </textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 bg-gradient-to-r from-emerald-500 to text-emerald-950 px-6 py-3 font-semibold uppercase rounded-md tracking-wider cursor-pointer
                  hover:scale-105 duration-200">
                      send message
                  </button>

                </div>

              </form>
            </div>
      </div>


      </section>
  )
}

export default Contact