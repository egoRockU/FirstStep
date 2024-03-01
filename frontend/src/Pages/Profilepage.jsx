import { useState } from "react";
import banner from "../images/signBg.jpg";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import profile from "../images/profilee.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Create() {
  const [selectedImage, setSelectedImage] = useState(null);
  const placeholderImage = { profile };

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
                    <div className="flex justify-around w-auto">
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
                          className="absolute inset-0 cursor-pointer"
                          style={{ zIndex: 1 }}
                        ></div>
                      )}
                      <div className="flex justify-center items-center">
                        <button className="p-1 px-4 rounded-2xl border border-[#444B88] bg-[#8B95EE]">
                          Message
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col w-full p-5 space-y-2">
                      <div className="flex">
                        <h1 className="text-2xl text-[#8B95EE]">
                          Firstname Lastname
                        </h1>
                      </div>
                      <div className="flex flex-col">
                        <h1 className="underline text-[#8B95EE]">
                          Email.devs.jpg@gmail.com
                        </h1>
                        <p>City, Country</p>
                        <p>0999-999-9112</p>
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque architecto saepe dignissimos doloribus obcaecati
                        officiis pariatur quas consequuntur totam numquam
                        placeat, dolorem voluptate id ea.
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <FaLinkedin size={25} color="blue" />
                          <p>LinkIn@linkin.com</p>
                        </div>
                        <div className="flex gap-1 items-center">
                          <FaSquareXTwitter size={25} />
                          <p>TwitterngPogi@twiiter.com</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-xl">Skills:</h1>
                        <div className="grid grid-cols-3 gap-1">
                          <p className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap">
                            Python
                          </p>
                          <p className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap">
                            Node
                          </p>
                          <p className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap">
                            Tailwind css
                          </p>
                          <p className="p-1 bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center overflow-hidden whitespace-nowrap">
                            PHP
                          </p>
                        </div>
                        <h1 className="text-xl">Industry</h1>
                        <div className="grid grid-cols-3 gap-1">
                          <p className=" bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center">
                            Software Engineering
                          </p>
                          <p className="bg-[#BAD2FF] border border-[#8B95EE] rounded-full text-center">
                            Node
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[800px]">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-white p-4 rounded-xl flex flex-col items-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base text-xl">About</h1>
                    <textarea name="about" id="" cols="30" rows="5" placeholder="This user did not write anything yet." className="w-full"></textarea>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-xl flex justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Education</h1>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-xl flex justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Activities and Involvements</h1>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-xl flex justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Projects</h1>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-xl flex justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Awards</h1>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-xl flex justify-center border-2 border-gray-300">
                    <h1 className="text-[#444B88] font-base">Certificates</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Create;
