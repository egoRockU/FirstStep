import { useState } from "react";
import Man from "../images/tommy.png";
import banner from "../images/signBg.jpg";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import google from "../images/google.png";
import Footer from "../Components/Footer";

function Create() {
  const [selectedImage, setSelectedImage] = useState(null);
  const placeholderImage = "placeholder.jpg"; // Provide your placeholder image URL here

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
      <div className="relative">
        <div
          style={{
            background: "linear-gradient(to bottom, #ffffff,#87ceeb)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
        ></div>
        <div className="h-full relative">
          <img
            src={banner}
            alt=""
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>
        <div className="w-full flex mb-20">
          <div className=" bg-white md:left-[60px] lg:left-[100px] xl:left-[192px] mt-[-40px] absolute w-2/5 lg:w-1/3 xl:w-1/5 rounded-2xl">
            <div className="p-4 flex flex-col items-center">
              <div style={{ position: "relative", display: "inline-block" }}>
                <input
                  type="file"
                  id="imageInput"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label htmlFor="imageInput" className="cursor-pointer">
                  <img
                    src={selectedImage || placeholderImage}
                    alt=""
                    className="w-60 h-60 rounded-full border-4 border-white mb-4 md:mb-0 md:mr-4"
                  />
                </label>
                {!selectedImage && (
                  <div
                    onClick={() =>
                      document.getElementById("imageInput").click()
                    }
                    className="absolute inset-0 cursor-pointer"
                    style={{ zIndex: 1 }}
                  >
                  </div>
                )}
              </div>
              <form>
                <div class="space-y-2">
                  <input
                    type="text"
                    placeholder="Type name here"
                    class="text-2xl rounded-xl border-2 p-0 md::p-2"
                  />
                  <div class="flex items-center">
                    <div>
                      <img src={google} alt="Facebook" class="w-8 h-8" />
                    </div>
                    <div>
                      <img src={google} alt="Twitter" class="w-8 h-8" />
                    </div>
                    <div>
                      <img src={google} alt="Instagram" class="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="Bio"
                      id="bio"
                      cols="30"
                      rows="5"
                      class="border-2 rounded-xl p-2"
                    ></textarea>
                  </div>
                </div>
              </form>

              <div className="bg-gray-100 p-3 rounded-lg shadow-md mt-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-32 h-16 rounded-full flex items-center justify-center">
                    <span className="text-small font-medium">
                      Preferred Jobs
                    </span>
                  </div>
                </div>
                <button className="text-2xl bg-[#FFCECE] w-full rounded-full">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <form className="md:w-[430px] lg:w-[570px] xl:w-[1000px] h-[300px] mt-[-40px] rounded-xl p-2 bg-white relative md:left-[500px] lg:left-[540px] xl:left-[600px]">
              <div className="w-full ">
                <div className="flex justify-between mx-5 items-center">
                  <h2 className="text-3xl font-semibold mb-4">Summary</h2>
                  <button className="text-2xl">+</button>
                </div>
              </div>
            </form>
            <div className="relative md:w-[430px] lg:w-[580px] xl:w-[1000px] h-[300px] rounded-xl p-2 bg-white md:left-[500px] lg:left-[540px] xl:left-[600px]">
              <div className="flex justify-between mx-5 items-center">
                <h3 className="text-3xl font-semibold mb-2 ">
                  Academic Achievements
                </h3>
                <button className="text-2xl">+</button>
              </div>
            </div>
            <div className="relative md:w-[430px] lg:w-[580px] xl:w-[1000px] h-[300px] rounded-xl p-2 bg-white md:left-[500px] lg:left-[540px] xl:left-[600px]">
              <div className="flex justify-between mx-5 items-center">
                <h3 className="text-3xl font-semibold mb-2 ">
                  Activities and Inovements
                </h3>
                <button className="text-2xl">+</button>
              </div>
            </div>
            <div className="relative md:w-[430px] lg:w-[580px] xl:w-[1000px] h-[300px] rounded-xl p-2 bg-white md:left-[500px] lg:left-[540px] xl:left-[600px]">
              <div className="flex justify-between mx-5 items-center">
                <h3 className="text-3xl font-semibold mb-2 ">Projects</h3>
                <button className="text-2xl">+</button>
              </div>
            </div>
            <div className="relative md:w-[430px] lg:w-[580px] xl:w-[1000px] h-[200px] rounded-xl p-2 bg-white md:left-[500px] lg:left-[540px] xl:left-[600px]">
              <div className="flex justify-between mx-5 items-center">
                <h3 className="text-3xl font-semibold mb-2 ">Certificates</h3>
                <button className="text-2xl">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Create;
