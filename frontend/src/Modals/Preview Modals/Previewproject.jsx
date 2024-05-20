import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import img from "../../images/signBg.jpg";
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { convertDateYear } from "../../utils/convertDate";

function Previewproject({ onClose, project }) {
  const {
    title,
    startDate,
    endDate,
    previewImages,
    subTitle,
    description,
    githubLink,
    projectLink,
    technologiesUsed,
  } = project;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 py-5">
      <div className="bg-white overflow-y-scroll  w-4/5 lg:w-1/2 h-[80%] shadow-lg rounded-lg">
        <div className="flex w-full justify-between items-center p-3 border-2">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl text-[#444B88] font-semibold">{title}</h1>
            <div className="flex gap-2">
              <h1 className="text-base font-semibold">{convertDateYear(startDate)}</h1>
              <p className="text-base font-semibold">-</p>
              <h1 className="text-base font-semibold">{convertDateYear(endDate)}</h1>
            </div>
          </div>
          <div>
            <IoMdClose size={25} onClick={onClose} />
          </div>
        </div>
        <div className="flex w-3/4 h-[50%] p-4 mx-auto pt-8">
          {/* TODO change navigation button color to make it more visible */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            centeredSlides
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper rounded-lg"
          >
            {previewImages.map((image, key) => (
              <SwiperSlide>
                <img
                  src={image}
                  alt=""
                  className="w-full h-full object-cover "
                  key={key}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev bg-black bg-opacity-50 text-white"></div>
            <div className="swiper-button-next bg-black bg-opacity-50 text-white"></div>
          </Swiper>
        </div>
        <div className="text-base text-center w-full flex justify-center">{subTitle}</div>
        <div className=" w-full mx-auto pt-3">
          <div className="w-3/4 mx-auto flex flex-col gap-8">
            <div className="flex w-full">
              <div className="border-2 border-gray-400 w-full rounded-md px-1 py-1 text-center text-sm md:text-lg">
                {description}
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4 items-center text-center justify-center">
              {/* TODO fit the link inside the div  */}
              <div className="flex w-full md:w-1/2 px-2 items-center border-2 border-gray-400 rounded-md">
                <div className="flex items-center px-1">
                  <FaGlobe size={25} />
                </div>
                <p className="w-full align-center break-all hover:underline text-xs">
                  {projectLink ? (
                    <a href={projectLink}>{projectLink}</a>
                  ) : (
                    "No Project :Link yet..."
                  )}
                </p>
              </div>
              <div className="flex w-full md:w-1/2 px-2 border-2 items-center border-gray-400 rounded-md">
                <div className="flex items-center px-1">
                  <FaGithub size={25} />
                </div>

                <p className="w-full align-center break-all hover:underline text-xs">
                  {githubLink ? (
                    <a href={githubLink}>{githubLink}</a>
                  ) : (
                    "No Github Link yet..."
                  )}
                </p>
               {/* <p className="w-full align-center whitespace-normal hover:underline text-xs">
                  {githubLink ? (
                    <a
                      href={githubLink}
                      className="block max-w-full whitespace-nowrap overflow-hidden truncate"
                    >
                      {githubLink}
                    </a>
                  ) : (
                    "No Github Link yet..."
                  )}
                </p> */}
              </div>
            </div>
            <div>
              <p className="text-sm md:text-md text-center md:text-left">
                <span className="text-[#444B88] italic p-1">
                  Made using:
                </span>
                {technologiesUsed}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Previewproject;
