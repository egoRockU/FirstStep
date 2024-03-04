import { useEffect, useState } from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import profile from "../images/profilee.png";
import banner from "../images/signBg.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function Editemployerprofilepage() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  //const profileId = JSON.parse(localStorage.getItem("user")).profileId;
  const profileId = user.profileId;

  const [selectedImage, setSelectedImage] = useState(null);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      });
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="bg-gray-100 mx-auto h-[1000px]">
        <div className="container mx-auto">
          <img
            src={banner}
            alt=""
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>
        <div className="flex mt-[-60px]">
          <div className="container mx-auto">
            <div className="flex justify-around">
              <div className="w-[500px] h-full">
                <div className="mx-auto bg-white px-5 py-2 rounded-lg">
                  <div className="flex flex-col">
                    <div className="flex justify-start pl-5">
                      <input
                        type="file"
                        id="imageInput"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <label htmlFor="imageInput" className="cursor-pointer">
                        <img
                          src={selectedImage || placeholderImage.profile}
                          alt=""
                          className="w-40 h-40 rounded-full border-2"
                        />
                      </label>
                      {!selectedImage && (
                        <div
                          onClick={() =>
                            document.getElementById("imageInput").click()
                          }
                          className="absolute cursor-pointer"
                          style={{ zIndex: 1 }}
                        ></div>
                      )}
                    </div>
                    <div className="flex flex-col w-full p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl text-[#8B95EE]">
                          {fName} {lName}
                        </h1>
                        <h1 className="text-lg text-[#444B88]">
                          [{companyName}]
                        </h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="underline text-[#8B95EE]">{email}</h1>
                        <p>{address}</p>
                        <p>{contactNum}</p>
                      </div>
                      <div>{bio}</div>
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
              <div className="w-[800px]">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center gap-2">
                    <h1 className="text-[#444B88] font-base text-xl">About</h1>
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
                  <div className="bg-white p-4 rounded-xl flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-[#444B88] font-base">Website</h1>
                    <h1 className="text-lg">{website}</h1>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-xl flex flex-col items-center gap-2 justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Social</h1>
                    <div>
                      {socialLinks.map((social, index) => (
                        <div className="flex items-center gap-1" key={index}>
                          <p>{social.platform}</p>
                          <p>{social.link}</p>
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
