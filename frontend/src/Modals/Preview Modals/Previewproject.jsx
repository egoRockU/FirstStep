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
      <div className="bg-white w-2/5 h-[80%] shadow-lg rounded-md">
        <div className="flex w-full justify-between items-center p-3 border-2">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl text-[#444B88] font-semibold">{title}</h1>
            <div className="flex gap-2">
              <h1 className="text-sm">{convertDateYear(startDate)}</h1>
              <p>-</p>
              <h1 className="text-sm">{convertDateYear(endDate)}</h1>
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
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper rounded-lg"
          >
            {previewImages.map((image, key) => (
              <SwiperSlide>
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-cover "
                  key={key}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-lg w-full flex justify-center">{subTitle}</div>
        <div className=" w-full mx-auto pt-3">
          <div className="w-3/4 mx-auto flex flex-col gap-8">
            <div className="flex w-full">
              <div className="border-2 border-gray-400 w-full rounded-md px-1 py-1">
                {description}
              </div>
            </div>
            <div className="flex w-full gap-4">
              {/* TODO fit the link inside the div  */}
              <div className="flex w-1/2 items-center border-2 border-gray-400 rounded-md">
                <div className="flex items-center px-1">
                  <FaGlobe size={25} />
                </div>
                <p className="w-full align-center whitespace-normal hover:underline">
                  {projectLink ? (
                    <a href={projectLink}>{projectLink}</a>
                  ) : (
                    "No Github Link yet..."
                  )}
                </p>
              </div>
              <div className="flex w-1/2 border-2 items-center border-gray-400 rounded-md">
                <div className="flex items-center px-1">
                  <FaGithub size={25} />
                </div>
                <p className="w-full align-center whitespace-normal hover:underline">
                  {githubLink ? (
                    <a href={githubLink}>{githubLink}</a>
                  ) : (
                    "No Github Link yet..."
                  )}
                </p>
              </div>
            </div>
            <div>
              <p>
                <span className="text-[#444B88] text-md italic p-1">
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
