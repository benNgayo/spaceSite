import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./technology.css";
const { technology } = require("../../data.json");
const Technology = () => {
  return (
    <div>
      <div>
        <h1>
          <span>03 </span> scace launch 101
        </h1>
      </div>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination2",
          type: "bullets",
        }}
      >
        {technology.map(
          ({ name, images: { portrait, horizontal }, description }) => {
            return (
              <SwiperSlide>
                <section>
                  <div>
                    <div className="swiper-pagination3"></div>
                    <div>
                      <h3>the technnology...</h3>
                      <h1>{name}</h1>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={portrait} alt="technology" />
                    </div>
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
