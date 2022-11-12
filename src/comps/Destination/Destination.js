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
    <section className="bg-destinationMobile md:bg-destinationTablet bg-no-repeat bg-cover text-white  pt-[5.5rem] md:pt-[8.5rem] h-screen ">
      <div>
        <div>
          <h2 className=" text-base lg:text-2xl uppercase leading-[1.5rem] tracking-[2.7px] text-center md:text-left md:pl-[2rem] ">
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
                key={index}
                // id={`slide-${index}`}
              >
                <div className="mb-[2rem]  flex justify-center max-w-[10rem] md:max-w-[18rem] lg:max-w-[22rem] text-center mx-auto pt-4 ">
                  <img src={png} alt={name} className=" w-full h-fit lg:my-auto " />
                </div>
                <div className="lg:max-w-[26rem] md:px-[6rem]">
                  <div className="swiper-pagination1"></div>

                  <h1 className="font-Bellefair font-serif text-center text-[3.5rem] lg:text-8xl uppercase font-normal py-4 leading-[4rem] ">
                    {name}
                  </h1>
                  <p className="pb-4 opacity-60 text-[1rem] md:text-[1rem] md:leading-[1.75rem]  leading-[1.75rem] text-center px-[1.5rem] ">
                    {" "}
                    {description}
                  </p>
                  <hr className="opacity-25" />
                  <div className=" flex flex-col md:flex-row text-center justify-around">
                    <div className="mb-[2rem]">
                      <span className="opacity-40 text-[1rem] leading-[1rem] tracking-[2.86px] ">
                        AVG. DISTANCE
                      </span>

                      <h2 className="text-[1.75rem] leading-[2rem] ">
                        {distance}
                      </h2>
                    </div>
                    <div>
                      <span className="opacity-40 text-[1rem] leading-[1rem] tracking-[2.36px] ">
                        EST TRAVEL TIME
                      </span>

                      <h2 className=" text-[1.75rem] leading-[2rem] ">
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
