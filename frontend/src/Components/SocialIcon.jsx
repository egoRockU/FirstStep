// SocialIcon.jsx
import React from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialIcon = ({ platform }) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return <FaFacebook />;
    case "youtube":
      return <FaYoutube />;
    case "twitter":
      return <FaTwitter />;
    case "linkedin":
      return <FaLinkedin />;
    default:
      return null;
  }
};

export default SocialIcon;
