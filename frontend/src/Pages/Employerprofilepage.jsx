import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Navbar from "../Components/Newnavbar";
import Footer from "../Components/Footer";
import profile from "../images/profile.svg";
import defbanner from "../images/signBg.jpg";
import SocialIcon from "../Components/SocialIcon";
import axios from "axios";

function Employerprofilepage() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { id } = useParams();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [profileImg, setProfileImg] = useState();
  const [banner, setBanner] = useState();
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [socialLinks, setSocialLinks] = useState([]);
  const [website, setWebsite] = useState("");

  useEffect(() => {
    getEmployer();
  }, []);

  const getEmployer = () => {
    axios
      .post(
        "/api/employerprofile/retrieveone",
        { profileId: id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const data = res.data;
        setFName(data.firstName);
        setLName(data.lastName);
        setProfileImg(data.profileImg);
        setBanner(data.banner);
        setEmail(data.email);
        setContactNum(data.contactNum);
        setAddress(data.address);
        setCompanyName(data.companyName);
        setBio(data.bio);
        setAbout(data.about);
        setWebsite(data.website);
        setSocialLinks(data.socialLinks);
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
      });
  };

  const message = () => {
    const state = {
      rName: `${fName} ${lName}`,
      rProfileImg: profileImg,
      rId: id,
      rType: "employer",
    };
    navigate("/message", { state });
  };

  return (
    <>
      {user ? <NavbarLoggedIn /> : <Navbar />}
      <div className="bg-gray-100 mx-auto h-[1000px]">
        <div className="container mx-auto">
          <img
            src={banner ? banner : defbanner}
            alt="banner"
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
                      <label htmlFor="orofileImg">
                        <img
                          src={profileImg ? profileImg : profile}
                          alt="profileImg"
                          className="w-40 h-40 rounded-full border-2"
                        />
                      </label>
                    </div>
                    <div className="flex flex-col w-full p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl text-[#8B95EE]">
                          {`${fName} ${lName}`}
                        </h1>
                        <h1 className="text-lg text-[#444B88]">
                          [{companyName}]
                        </h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="underline text-[#8B95EE]">{email}</h1>
                        {address !== ", " && <p>{address}</p>}
                        <p>{contactNum}</p>
                      </div>
                      <div className="">
                        <p className="break-words">{bio}</p>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <button
                        className="px-4 rounded-full border border-[#444B88] bg-[#8B95EE]"
                        onClick={message}
                      >
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[800px]">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center gap-2">
                    <h1 className="text-[#444B88] font-base text-xl">About</h1>
                    {about ? (
                      <p>{about}</p>
                    ) : (
                      <p>This user did not write anything yet.</p>
                    )}
                  </div>
                  <div className="bg-white p-4 rounded-xl flex flex-col gap-2 items-center justify-center">
                    <h1 className="text-[#444B88] font-base">Website</h1>
                    {website ? (
                      <a href={website}>
                        <p className="hover:underline">{website}</p>
                      </a>
                    ) : (
                      <p>This user did not put anything yet...</p>
                    )}
                  </div>
                  <div className="bg-white p-4 rounded-xl text-xl flex flex-col items-center gap-2 justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Social</h1>
                    <div>
                      {socialLinks.map((social, index) => (
                        <div className="flex items-center gap-1" key={index}>
                          <SocialIcon platform={social.platform} />
                          <p>{social.link}</p>
                        </div>
                      ))}
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

export default Employerprofilepage;
