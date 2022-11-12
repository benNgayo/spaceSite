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
    <div className="flex-col items-center pt-32 lg:pl-32 bg-technologyDesktop bg-no-repeat bg-cover  min-h-full text-white">
      <div>
        <h1 className=" font-BarlowCondensed lg:font-Barlow text-base md:text-xl md:ml-4 md:mt-4 text-center md:text-left pb-[2rem] lg:text-xl uppercase lg:font-bold tracking-wide">
          <span className="opacity-25 mr-[1rem] ">03 </span> scace launch 101
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
          ({ name, images: { portrait, landscape }, description }) => {
            return (
              <SwiperSlide>
                <section className="flex flex-col lg:flex-row lg:justify-between justify-itenms-center  ">
                  <div className="order-2 lg:order-1 lg:flex ">
                    <div className="swiper-pagination3 pt-[2rem] lg:mr-4  lg:flex-col "></div>
                    <div className="flex flex-col  p-[2rem] justify-center mx-auto max-w-[458px]  ">
                      <h3 className="uppercase font-Barlow text-[#D0D6F9] text-base text-center lg:text-left ">
                        the terminology...
                      </h3>
                      <h1 className="font-body uppercase text-[1.5rem] md:text-4xl mb-4 font-normal text-center lg:text-left">
                        {name}
                      </h1>
                      <p className="text-[#D0D6F9] font-normal font-Barlow lg:w-[470px] text-center lg:text-left ">
                        {description}
                      </p>
                    </div>
                  </div>
                  <div className="order-1">
                    <img
                      src={landscape}
                      srcSet={`${landscape} 1024w,  ${portrait} 1025w `}
                      sizes="((max-width: 1024px) 768px, (min-width: 1025px ) 1025px"
                      alt="technology"
                      className="w-full lg:w-[515px] "
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
