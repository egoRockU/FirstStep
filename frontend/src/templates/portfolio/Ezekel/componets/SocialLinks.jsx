import React, { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { getSocialLinkAttrib } from "../utils/getAttribs.jsx";

const SocialLinks = ({ portfolioInfo }) => {
  const { email, socialLinks } = portfolioInfo;
  const [socialLinksArr, setSocialLinksArr] = useState([]);

  useEffect(() => {
    setSocialLinksArr(getSocialLinkAttrib(socialLinks));
  }, []);

  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socialLinksArr.map(({ child, href }, key) => (
          <li
            key={key}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black-500"
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferre"
            >
              {child}
            </a>
          </li>
        ))}
        <li
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black-500"
          }
        >
          <a
            href={`mailto:${email}`}
            className="flex justify-between items-center w-full text-white"
            target="_blank"
            rel="noreferre"
          >
            Mail <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
