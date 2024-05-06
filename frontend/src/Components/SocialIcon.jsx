// SocialIcon.jsx
import React from "react";
import { FaFacebook, FaYoutube,  FaLinkedin } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6'
const SocialIcon = ({ platform }) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return <FaFacebook />;
    case "youtube":
      return <FaYoutube />;
    case "twitter":
      return <FaXTwitter />;
    case "linkedin":
      return <FaLinkedin />;
    default:
      return null;
  }
};

export default SocialIcon;
