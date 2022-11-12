import React from "react";
import "./index.css";
const Home = () => {
  return (
    <>
      <div className=" bg-backgroundHomeMobile -z-40 mix-blend-multiply bg-no-repeat bg-cover md:backgroundHomeTablet lg:bg-hero-pattern h-screen font-body">
        <div
          className="flex md:justify-between lg:flex-row lg:justify-between w-full flex-col  md:px-24 items-center absolute box-border top-[12rem] mb-12 md:mb-0 "
          id="home"
        >
          <div className="text-white">
            <h3 className="md:text-2xl text-base font-normal text-[#D0D6F9] text-center tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.725px] leading-4 md:text-[1.25rem] md:leading-[1.5rem] lg:leading-[2rem]">
              SO, YOU WANT TO TRAVEL TO
            </h3>
            <h1 className="md:text-9xl text-7xl text-center leading-[6.25rem] md:leading-[9.375rem] lg:leading-[10.75rem] font-normal py-[1rem] md:py-2">
              SPACE
            </h1>
            <p className="text-[#D0D6F9] py-[1rem] px-[1.25rem] text-base md:text-base leading-[1.25rem] md:leading-[1.5rem] lg:leading-[2rem] text-center font-normal lg:w-[26rem]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div
            className="bg-white w-[9.375rem] h-[9.375rem] md:w-[15.125rem] md:h-[15.125rem] lg:w-[17.125rem] lg:h-[17.125rem] flex justify-center items-center home-icon lg:mt-0 "
            style={{
              borderRadius: "50%",
              marginTop: "4rem ",
              hover: { boxShadow: "3.75rem 3.75rem white", cursor: "pointer" },
            }}
          >
            <h1 className="font-Bellefair text-[1.15rem] text-center tracking-[1.25px] leading-[1.25rem]  md:text-[2rem] lg:text-2xl font-normal tracking-[2px] md:leading-[2.15rem] ">
              EXPLORE
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
