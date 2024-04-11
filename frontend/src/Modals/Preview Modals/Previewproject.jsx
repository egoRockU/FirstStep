import { IoMdClose } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import img from "../../images/signBg.jpg"
import { FaGlobe } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



function Previewproject() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 py-5">
      <div className="bg-white w-2/5 h-[80%] shadow-lg rounded-md">
        <div className="flex w-full justify-between items-center p-3 border-2">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl text-[#444B88] font-semibold">
              Project Title
            </h1>
            <div className="flex gap-2">
              <h1 className="text-sm">Start Date</h1>
              <p>-</p>
              <h1 className="text-sm">End Date</h1>
            </div>
          </div>
          <div>
            <IoMdClose size={25} />
          </div>
        </div>
        <div className="flex w-3/4 h-[50%] p-4 mx-auto pt-8">
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
            <SwiperSlide><img src={img} alt="" className="h-full w-full object-cover " /></SwiperSlide>
            <SwiperSlide><img src={img} alt="" className="h-full w-full object-cover " /></SwiperSlide>
            <SwiperSlide><img src={img} alt="" className="h-full w-full object-cover " /></SwiperSlide>
            <SwiperSlide><img src={img} alt="" className="h-full w-full object-cover " /></SwiperSlide>
            <SwiperSlide><img src={img} alt="" className="h-full w-full object-cover " /></SwiperSlide>
          </Swiper>
        </div>
        <div className="text-lg w-full flex justify-center">Subtitle</div>
        <div className=" w-full mx-auto pt-3">
        <div className="w-3/4 mx-auto flex flex-col gap-8">
        <div className="flex w-full">
          <textarea name="Description" id="" className="border-2 border-gray-400 w-full rounded-md px-1 py-1" placeholder="Description"></textarea>
        </div>
        <div className="flex w-full gap-4">
            <div className="flex w-1/2 border-2 border-gray-400 rounded-md">
            <div className="flex items-center px-1">
            <FaGlobe size={25}/>
            </div>
            <input type="text" className="w-full h-10 outline-none px-1 " />
            </div>
            <div className="flex w-1/2 border-2 border-gray-400 rounded-md">
            <div className="flex items-center px-1">
            <FaGithub size={25}/>
            </div>
            <input type="text" className=" w-full h-10 outline-none px-1" />
            </div>
        </div>
        <div >
            <p><span className="text-[#444B88] text-md italic p-1">Made using:</span>Technologies Used</p>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Previewproject;
