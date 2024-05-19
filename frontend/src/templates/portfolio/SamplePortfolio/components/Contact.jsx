import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="h-screen w-full bg-gradient-to-b from-orange-100 to-orange-300
    p-4 text-gray-900"> 
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-900">Contact</p>
          <p className="py-6 font-semibold font text-lg">Submit the form below to get in touch with me</p>
        </div>
          <div className="flex justify-center items-center">
            <from method="POST" className="flex flex-col w-full md:w-1/2">
              <input type="text" name="name" placeholder="Enter your name:" className="p-2 bg-transparent border-2 rounded-md
              text-black focus:outline-black">
                      </input>

                      <input  type="text" name="email" placeholder="Enter your email:" 
                      className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none">
                      </input>
              
                    <textarea name="message" placeholder ="Enter your message"rows="10" className="p-2 bg-transparent border-2 rounded-md text-black focus:outline">
                </textarea>
                <button className="text-black font-semibold bg-gradient-to-r from-orange-100 to-orange-300 px-6 py-3 my-8 
                mx-auto flex-items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
            </from>
          </div>
      </div>
    </div>
  );
};

export default Contact