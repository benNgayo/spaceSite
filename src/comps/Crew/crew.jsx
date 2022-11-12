import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./crew.css";
const { crew } = require("../../data.json");

const Crew = () => {
  return (
    <section className=" bg-crew bg-no-repeat bg-cover box-border  -z-40 ">
      <Swiper
        className=" text-white h-screen overflow-hidden"
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination2",
          type: "bullets",
        }}
      >
        {crew.map(({ name, images: { png }, role, bio }) => {
          return (
            <SwiperSlide className="  px-4 pt-12 md:mt-24 lg:px-16 lg:py-0 box-border h-full ">
              
              <h1 className=" text-base md:text-xl text-center md:text-left mb-[2rem] lg:text-3xl uppercase font-Barlow font-normal">
                <span className="mr-4 opacity-25">02</span>meet your crew
              </h1>
              <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-center align-center">
                <div className="relative md:flex-col-reverse lg:justify-left ">
                  <div className=" lg:pb-28 flex  flex-col justify-center lg:justify-start py-[2rem] px-[1.5rem] ">
<div className="lg:pl-4 lg:mb-4 " >


                    <h2 className="lg:text-3xl md:text-2xl p-2 font-body text-base font-normal uppercase opacity-50 text-center lg:text-left ">
                      {role}
                    </h2>
                    <h1 className="lg:text-6xl md:text-4xl text-2xl uppercase font-body font-normal py-4 lg:py-0 text-center lg:text-left lg:whitespace-nowrap ">
                      {name}
                    </h1>
</div>

                    <p className="font-body leading-6 lg:leading-2 text-base lg:text-lg font-normal text-[#D0D6F9] lg:w-96 md:mx-40 lg:mx-4 text-center lg:text-left ">
                      {bio}
                    </p>

                  <div className="swiper-pagination2 text-white top-0 md:top-full md:p-4 lg:top-80 flex justify-center lg:justify-start "></div>
                  </div>
                </div>

                <div className="my-[1.5rem] mx-[2rem] flex justify-center border-b-2 lg:flex-1 lg:my-0  md:border-none md:pt-10 lg:pt-0">
                  <img src={png} alt={`${name}`} className="w-44  md:w-auto lg:w-auto lg:max-w-sm" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Crew;
