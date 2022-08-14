import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const { crew } = require("../../data.json");

const Crew = () => {
  return (
    <Swiper
      className="bg-crew text-white h-screen"
      modules={[Navigation, Pagination]}
      navigation
      pagination
    >
      <h1>hello</h1>
      {/* <SwiperSlide className=" flex justify-center items-center"> */}
      {crew.map(({ name, images: { png }, role, bio }) => {
        return (
          <SwiperSlide className=" flex justify-center items-center">
            <div>
              <h1>
                <span>02</span>meet your crew
              </h1>
              <h2>commander</h2>
              <h1>DOUGLAS HURLEY</h1>
              <p>
                Douglas Gerald Hurley is an American engineer, former Marine
                Corps pilot and former NASA astronaut. He launched into space
                for the third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
            <div>
              <img
                src="/assets/crew/image-douglas-hurley.png"
                alt="douglas hurley"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Crew;
