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
    <section className="md:h-screen bg-crew box-border">
      <Swiper
        className=" text-white h-[80vh] top-24 overflow-hidden"
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination2",
          type: "bullets",
        }}
      >
        {crew.map(({ name, images: { png }, role, bio }) => {
          return (
            <SwiperSlide className=" flex justify-between items-center px-16 py-0 box-border">
              <div>
                <h1 className="text-3xl uppercase font-Barlow font-normal">
                  <span className="mr-4 opacity-25">02</span>meet your crew
                </h1>
                <div className="pt-32 pb-28">
                  <h2 className="text-3xl font-body font-normal uppercase opacity-50">
                    {role}
                  </h2>
                  <h1 className="text-6xl uppercase font-body font-normal py-4">
                    {name}
                  </h1>
                  <p className="font-body text-lg font-normal text-[#D0D6F9] w-96">
                    {bio}
                  </p>
                </div>
                <div className="swiper-pagination2 text-white absolute bottom-0"></div>
              </div>
              <div>
                <img src={png} alt="douglas hurley" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Crew;
