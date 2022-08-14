import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
// import "./index.css";
const { destinations } = require("../../data.json");
const Destination = () => {
  let names = destinations.map(({ name }) => {
    let namesArr = [];
    name = name.toUpperCase();
    namesArr.push(name);
    return namesArr;
  });
  return (
    <section className="bg-destination text-white max-h-screen max-w-screen p-36">
      <div>
        <div>
          <h2 className="text-2xl uppercase">
            <span className="opacity-50">01</span> Pick your destination
          </h2>
        </div>
        <Swiper
          className="max-h-screen w-auto"
          modules={[Pagination]}
          pagination={{
            el: ".swiper-pagination",
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
                className="flex justify-between  w-[90%] h-[472px]"
                key={index}
                // id={`slide-${index}`}
              >
                <div className="w-[22rem]">
                  <img src={png} alt={name} className="w-full" />
                </div>
                <div className="w-[26rem] relative">
                  <div className="swiper-pagination"></div>

                  <h1 className="font-Bellefair font-serif text-8xl uppercase font-normal py-8 ">
                    {name}
                  </h1>
                  <p className="pb-4 opacity-60"> {description}</p>
                  <hr className="opacity-25" />
                  <div className="flex justify-between pt-4">
                    <div>
                      <span className="opacity-40">AVG. DISTANCE</span>

                      <h2>{distance}</h2>
                    </div>
                    <div>
                      <span className="opacity-40">EST TRAVEL TIME</span>

                      <h2>{travel}</h2>
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
