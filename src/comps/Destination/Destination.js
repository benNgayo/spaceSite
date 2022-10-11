import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "./index.css";
const { destinations } = require("../../data.json");
const Destination = () => {
  let names = destinations.map(({ name }) => {
    let namesArr = [];
    name = name.toUpperCase();
    namesArr.push(name);
    return namesArr;
  });
  return (
    <section className="bg-destinationMobile md:bg-destinationTablet bg-no-repeat bg-cover text-white h-screen pt-[88px] md:pt-[136px] md:p-[38.5px] lg:p-36">
      <div>
        <div>
          <h2 className=" text-base lg:text-2xl uppercase leading-[19px] tracking-[2.7px] text-center md:text-left ">
            <span className="opacity-50">01</span> Pick your destination
          </h2>
        </div>
        <Swiper
          className="swiper1 box-border"
          modules={[Pagination]}
          pagination={{
            el: ".swiper-pagination1",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span  class="' + className + '">' + names[index] + "</span>"
              );
            },
          }}
        >
          {destinations.map((destination, index) => {
            const {
              name,
              images: { png },
              description,
              distance,
              travel,
            } = destination;

            return (
              <SwiperSlide
                className=" flex-row box-border"
                key={index}
                // id={`slide-${index}`}
              >
                <div className="mb-[26px] flex justify-center">
                  <img
                    src={png}
                    alt={name}
                    className=" w-[170px] md:w-[300px] lg:w-[22rem] pt-[32px]"
                  />
                </div>
                <div className="lg:w-[26rem] md:px-[98px] ">
                  <div className="swiper-pagination1"></div>

                  <h1 className="font-Bellefair font-serif text-center text-[56px] lg:text-8xl uppercase font-normal py-8 leading-[64px] ">
                    {name}
                  </h1>
                  <p className="pb-4 opacity-60 text-[15px] md:text-[16px] md:leading-[28px]  leading-[25px] text-center px-[24px] ">
                    {" "}
                    {description}
                  </p>
                  <hr className="opacity-25" />
                  <div className=" flex flex-col md:flex-row text-center justify-around pt-4">
                    <div className="mb-[32px]">
                      <span className="opacity-40 text-[14px] leading-[16.8px] tracking-[2.86px] ">
                        AVG. DISTANCE
                      </span>

                      <h2 className="text-[28px] leading-[32.09px] ">
                        {distance}
                      </h2>
                    </div>
                    <div>
                      <span className="opacity-40 text-[14px] leading-[16.8px] tracking-[2.36px] ">
                        EST TRAVEL TIME
                      </span>

                      <h2 className=" text-[28px] leading-[32.09px] ">
                        {travel}
                      </h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Destination;
