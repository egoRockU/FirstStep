import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Contact = ({ portfolioInfo }) => {
  const { email, contactNum, address } = portfolioInfo || {};
  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-orange-100 to-orange-300
    p-4 text-gray-900"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-900">
            Contact
          </p>
          <p className="py-6 font-semibold font text-lg">
            Here is where you can reach me out.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className=" flex flex-col mb-10">
            <p className="flex text-2xl justify-start items-center">
              <MdEmail />
              {email}
            </p>
            <p className="flex text-2xl justify-start items-center">
              <FaLocationDot />
              {address}
            </p>
            <p className="flex text-2xl justify-start items-center">
              <IoIosCall /> {contactNum}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
