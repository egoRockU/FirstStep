import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import { FaCamera } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const placeholderImage =
  "https://imgs.search.brave.com/q02hpLETIRmEBEpeaZkCKOUDubZ65X3ccxNLb1WxvY0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"; // Provide your placeholder image URL here
import Footer from "../Components/Footer";
import AddSocial from "../Modals/EditEmployer Profile/Addsocial";
import { updateAccountProfileValues } from "../utils/updateAccountProfileValues";
import { useDispatch } from "react-redux";
import { updateUser } from "../slices/userSlice";
import { toast } from "react-toastify";
import { uploadBanner, uploadImage } from "../utils/imageEmpUpload";
import { getDownloadURL } from "firebase/storage";
import { SocialCard } from "../Components/Employercard";
import { ImSpinner } from "react-icons/im";
import { setProfile } from "../utils/setProfile";

function CreateEmployerpage() {
  // TODO add change alert to toast

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedBannerFile, setSelectedBannerFile] = useState(null);
  const [loading, setLoading] = useState(false);
  //image
  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    // Show preview of the image
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(imageFile);

    // Set the selected image file in state
    setSelectedImageFile(imageFile);
  };
  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    setSelectedBannerFile(file);

    // Show preview of the image
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedBanner(reader.result);
    };
    reader.readAsDataURL(file);
  };

  //social
  const [isAddSocialModalOpen, setAddSocialModalOpen] = useState(false);
  const [socialLinks, setSocialLinks] = useState([]);
  const onSubmitSocialMedia = (formData) => {
    if (!formData.platform || !formData.link) {
      toast.error("Please provide both platform and link");
      return;
    }
    console.log("Submitted formData:", formData);
    setSocialLinks([...socialLinks, formData]);
    closeAddSocialModal();
  };
  const openAddSocialModal = () => {
    setAddSocialModalOpen(true);
  };

  const closeAddSocialModal = () => {
    setAddSocialModalOpen(false);
  };
  const editSocialLink = (index) => {
    const editedSocialLinks = [...socialLinks];
    const newPlatform = prompt("Enter new platform:");
    const newLink = prompt("Enter new link:");
    if (newPlatform && newLink) {
      editedSocialLinks[index] = { platform: newPlatform, link: newLink };
      setSocialLinks(editedSocialLinks);
    }
  };
  const deleteSocialLink = (index) => {
    const updatedSocialLinks = [...socialLinks];
    updatedSocialLinks.splice(index, 1);
    setSocialLinks(updatedSocialLinks);
  };

  //getting all inputs
  let userObj = JSON.parse(localStorage.getItem("user"));
  let userId = userObj.id;
  let userEmail = userObj.email;
  let userAccountType = userObj.accountType;

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState(userEmail);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [inputs, setInputs] = useState({});

  const createProfile = async () => {
    setLoading(true);
    let profileImageURL = "";
    let bannerImageURL = "";

    if (selectedImageFile) {
      try {
        profileImageURL = await uploadImage(selectedImageFile, getDownloadURL);
      } catch (err) {
        setLoading(false);
        return;
      }
    }

    if (selectedBannerFile) {
      try {
        bannerImageURL = await uploadBanner(selectedBannerFile, getDownloadURL);
      } catch (err) {
        setLoading(false);
        return;
      }
    }

    setSelectedImage(profileImageURL);
    setSelectedBanner(bannerImageURL);
    const updatedInputs = {
      ...inputs,
      profileImg: profileImageURL,
      banner: bannerImageURL,
    };
    axios
      .post("/api/employerprofile/create", updatedInputs, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status == true) {
          toast.success(res.data.message);
          updateAccountProfileValues(
            res.data._id,
            "employer",
            userAccountType,
            userEmail
          ).then((newUserData) => {
            setLoading(false);
            dispatch(updateUser(newUserData));
            setProfile(res.data._id, "employer");
            navigate("/editemployer");
          });
        }
        if (res.data.status == false) {
          setLoading(false);
          alert("Employer profile not created");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert(err.response.data.message);
        console.log(err.response.data.errorMessage);
      });
  };

  const goback = () => {
    navigate("/");
  };

  useEffect(() => {
    setInputs({
      profileImg: selectedImage,
      banner: selectedBanner,
      accountId: userId,
      firstName: fName,
      lastName: lName,
      email,
      contactNum,
      address: `${city}, ${country}`,
      companyName,
      bio,
      socialLinks: socialLinks,
      website,
    });
  }, [
    selectedImage,
    selectedBanner,
    fName,
    lName,
    email,
    contactNum,
    city,
    country,
    bio,
    socialLinks,
    website,
  ]);

  return (
    <>
      <div className="bg-gray-200">
        <NavbarLoggedIn />
        <div className="max-w-screen-2xl mx-auto px-4 w-full lg:w-[70%] xl:w-1/2">
          <div className="w-full" style={{ position: "relative" }}>
            <div>
              <input
                type="file"
                id="imageInputbanner"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleBannerChange}
              />
              <label
                htmlFor="imageInputbanner"
                className="cursor-pointer mt-10"
              >
                <img
                  src={selectedBanner}
                  alt=""
                  className="w-full h-60 bg-blue-200 object-cover"
                />
              </label>
              {!selectedBanner && (
                <button
                  onClick={() =>
                    document.getElementById("imageInputbanner").click()
                  }
                  className="absolute cursor-pointer text-lg bg-white p-2 rounded-full"
                  style={{ zIndex: 1, bottom: 20, right: 30 }}
                >
                  <FaCamera />
                </button>
              )}
            </div>
          </div>
          <div className="bg-white h-full mb-10 shadow-lg">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="flex flex-col justify-center items-center w-full lg:w-1/4">
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label htmlFor="imageInput" className="cursor-pointer pt-10">
                  <img
                    src={selectedImage || placeholderImage}
                    alt=""
                    className="w-40 h-40 rounded-full border-4 border-black object-cover"
                  />
                </label>
                {!selectedImage && (
                  <div
                    onClick={() =>
                      document.getElementById("imageInput").click()
                    }
                    className="inset-0 cursor-pointer"
                    style={{ zIndex: 1 }}
                  ></div>
                )}
                <div className="w-full h-full mt-5"></div>
              </div>
              <div className="p-5 w-full lg:w-3/4 space-y-5">
                <div>
                  <h1 className="text-xl">
                    Initialize your Profile{" "}
                    <span className="text-blue-300 text-lg">Employer</span>
                  </h1>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-4">
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">First Name</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      required
                      onChange={(e) => setFName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <h1 className="text-lg">Last Name</h1>
                    <input
                      type="text"
                      name="name"
                      id=""
                      className="text-base border-2 border-[#444B88] p-2"
                      required
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Email Address</h1>
                  <input
                    type="text"
                    name="name"
                    value={email}
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Contact Number</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setContactNum(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">City</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Country/Region</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Company Name</h1>
                  <input
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2"
                    required
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Bio</h1>
                  <textarea
                    type="text"
                    name="name"
                    id=""
                    className="text-base border-2 border-[#444B88] p-2 h-40"
                    placeholder="Tell me something about yourself.."
                    required
                    onChange={(e) => setBio(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <h1 className="text-lg">Social Links</h1>
                  <div className=" border-2 py-2 border-[#444B88] flex flex-col items-center">
                    <div className="flex flex-col items-center">
                      {" "}
                      <SocialCard
                        socialLinks={socialLinks}
                        onDelete={deleteSocialLink}
                      />
                    </div>
                    <button
                      className="p-2 px-5 bg-[#8B95EE]"
                      onClick={openAddSocialModal}
                    >
                      + Add Social link
                    </button>
                  </div>
                  {isAddSocialModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                      <div className="bg-white p-4 rounded-md">
                        <AddSocial
                          onClose={closeAddSocialModal}
                          onSubmit={onSubmitSocialMedia}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-lg">Website</h1>
                  <input
                    type="text"
                    className="text-base border-2 border-[#444B88] p-2 w-full"
                    required
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-5 w-full justify-end px-4 py-2">
              <button
                className="text-lg border border-black px-2"
                onClick={goback}
              >
                Cancel
              </button>
              {loading ? (
                <button
                  className="text-lg bg-[#8B95EE] border border-[#444B88] hover:bg-blue-600 px-2"
                  disabled
                >
                  <ImSpinner className="animate-spin mr-2" />
                </button>
              ) : (
                <button
                  className="text-lg bg-[#8B95EE] border border-[#444B88] hover:bg-blue-600 px-2"
                  onClick={createProfile}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CreateEmployerpage;
