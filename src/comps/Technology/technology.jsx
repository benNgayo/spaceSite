import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./technology.css";
const { technology } = require("../../data.json");
const Technology = () => {
  let nums = [1, 2, 3];
  return (
    <div className="flex-col items-center pt-32 pl-32 bg-technologyDesktop bg-no-repeat bg-cover h-screen text-white">
      <div>
        <h1 className="font-barlow text-xl uppercase font-bold tracking-wide">
          <span className="opacity-25">03 </span> scace launch 101
        </h1>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination3",
          renderBullet: function (index, className) {
            return (
              '<span  class="' + className + '">' + nums[index] + "</span>"
            );
          },
        }}
      >
        {technology.map(
          ({ name, images: { portrait, horizontal }, description }) => {
            return (
              <SwiperSlide>
                <section className="flex justify-between content-center ">
                  <div className="flex justify-between  ">
                    <div className="swiper-pagination3 "></div>
                    <div className="">
                      <h3 className="uppercase font-Barlow text-[#D0D6F9] text-base ">
                        the terminology...
                      </h3>
                      <h1 className="font-body uppercase text-[56px] font-normal ">
                        {name}
                      </h1>
                      <p className="text-[#D0D6F9] font-normal font-Barlow w-[470px] ">
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className="w-1/3 h-1/3">
                    <img
                      src={portrait}
                      alt="technology"
                      className="aspect-square"
                    />
                  </div>
                </section>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
};

export default Technology;
