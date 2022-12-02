import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import brand1 from "../../../assets/image/huawei brand.jpg";
import brand2 from "../../../assets/image/realme brand.jpg";
import brand3 from "../../../assets/image/samsung brand.png";
import brand4 from "../../../assets/image/oppo brand.png";
import "swiper/css/bundle";
const Brands = () => {
  const brandsPhoto = [
    { id: 1, logo: brand1 },
    { id: 2, logo: brand2 },
    { id: 3, logo: brand3 },
    { id: 4, logo: brand4 },
    { id: 5, logo: brand2 },
    { id: 6, logo: brand4 },
    { id: 7, logo: brand1 },
  ];

  return (
    <div div className="container mx-auto my-5">
      <div className="my-10">
        <h2 className="text-center text-4xl font-bold my-5">Category</h2>
        <p className="w-2/3 mx-auto  mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-center">
          A mobile phone is a wireless handheld device that allows users to make and receive calls. While the earliest generation of mobile phones could only make and receive calls, today's mobile phones do a lot more, accommodating web browsers, games, cameras, video players and navigational systems
        </p>
      </div>
      <Swiper
        slidesPerView={8}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[#fff]">
          <img className="" src={brand1} alt="" />
        </SwiperSlide>

        {brandsPhoto.map((photo) => (
          <SwiperSlide key={photo.id} className="bg-[#fff]">
            <img src={photo.logo} alt="hello" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
