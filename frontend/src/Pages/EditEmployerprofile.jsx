import { useEffect, useState } from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import profile from "../images/profilee.png";
import banner from "../images/banner.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import SocialIcon from "../Components/SocialIcon";
function Editemployerprofilepage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const profileId = user.profileId;

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);

  const placeholderImage = { profile };

  useEffect(() => {
    getUserProfile();
    window.scrollTo(-10, 0);
  }, []);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [website, setWebsite] = useState("");

  const clickedit = (e) => {
    e.preventDefault();
    navigate("/editemployerabout");
  };

  const getUserProfile = () => {
    axios
      .post(
        "/api/employerprofile/retrieveone",
        { profileId },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        const profileObj = res.data;
        setFName(profileObj.firstName);
        setLName(profileObj.lastName);
        setEmail(profileObj.email);
        setContactNum(profileObj.contactNum);
        setAddress(profileObj.address);
        setCompanyName(profileObj.companyName);
        setBio(profileObj.bio);
        setAbout(profileObj.about);
        setSocialLinks(profileObj.socialLinks);
        setWebsite(profileObj.website);
        setSelectedImage(profileObj.profileImg);
        setSelectedBanner(profileObj.banner);
      });
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="bg-gray-100 mx-auto p-10 w-full min-h-screen">
        <div className="w-full lg:container mx-auto">
          <img
            src={selectedBanner || banner}
            alt=""
            className="w-full h-80 rounded-xl object-cover"
          />
        </div>
        <div className="flex mt-[-60px]">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-around gap-3 items-center">
              <div className="w-full lg:w-[40%] xl:w-[30%] h-full">
                <div className="mx-auto bg-white px-5 py-2 rounded-t-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-center xl:justify-start pl-5">
                      <label htmlFor="imageInput" className="cursor-pointer">
                        <img
                          src={selectedImage || placeholderImage.profile}
                          alt=""
                          className="w-40 h-40 rounded-full border-2 object-cover"
                        />
                      </label>
                    </div>
                    <div className="flex flex-col w-full p-5 space-y-2">
                      <div className="flex flex-col xl:flex-row items-center gap-2">
                        <h1 className="text-xl xl:text-2xl text-[#8B95EE]">
                          {fName} {lName}
                        </h1>
                        {companyName && (
                          <h1 className="text-sm lg:text-lg text-[#444B88]">
                            [{companyName}]
                          </h1>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <h1 className="underline text-[#8B95EE] break-all text-base">{email}</h1>
                        {address !== ", " && <p>{address}</p>}
                        <p>{contactNum}</p>
                      </div>
                      <div className="w-full break-words">{bio}</div>
                    </div>
                  </div>
                </div>

                <button
                  className="px-4 rounded-b-xl border text-white text-lg p-2 bg-[#444B88] w-full"
                  onClick={clickedit}
                >
                  Edit
                </button>
              </div>
              <div className="w-full lg:w-[55%]">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center gap-2 border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base text-sm md:text-xl">About</h1>
                    {/* <textarea
                      name="about"
                      id=""
                      cols="30"
                      rows="5"
                      placeholder="This user did not write anything yet."
                      className="w-full p-2"
                    ></textarea> */}
                    {!about && <p>This user did not write anything yet...</p>}
                    {about}
                  </div>
                  <div className="bg-white p-4 rounded-xl flex flex-col gap-2 items-center justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Website</h1>
                    <h1 className="text-sm md:text-lg break-all">{website}</h1>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-xl flex flex-col items-center gap-2 justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Socials</h1>
                    <div>
                    {socialLinks.map((social, index) => (
                          <div className="flex items-center gap-1" key={index}>
                            <SocialIcon platform={social.platform} />
                            <p className="break-all text-sm md:text-lg">{social.link}</p>
                          </div>
                        ))}
                      {/* <div className="flex items-center gap-1">
                        <FaLinkedin size={25} color="blue" />
                        <p>LinkIn@linkin.com</p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <FaSquareXTwitter size={25} />
                        <p>TwitterngPogi@twiiter.com</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Editemployerprofilepage;
