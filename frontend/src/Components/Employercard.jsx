import React from "react";
import { IoClose, IoLogoTwitter } from "react-icons/io5";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";



const SocialCard = ({ socialLinks, onDelete }) => {
  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <FaFacebook />;
      case "twitter":
        return <IoLogoTwitter />;
      case "youtube":
        return <FaYoutube />;
      case "linkedin":
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center">
        {socialLinks.map((link, index) => (
          <div key={index} className="flex items-center py-1 justify-center">
            <div>{link.platform && getPlatformIcon(link.platform)}</div>
            <div>
              <a href={link.link}>{link.link}</a>
            </div>
            <div>
              <button onClick={() => onDelete(index)}>
                <IoClose size={30} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export {SocialCard};