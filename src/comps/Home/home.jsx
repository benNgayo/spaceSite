import React from "react";
import "./index.css";
const Home = () => {
  return (
    <>
      <div className=" bg-backgroundHomeMobile bg-no-repeat bg-cover md:backgroundHomeTablet lg:bg-hero-pattern h-screen md:p-8   font-body justify-center flex flex-col  w-screen">
        <div
          className="flex justify-center md:justify-around lg:flex-row flex-col  md:px-24 items-center absolute  md:w-11/12 box-border top-[12rem] "
          id="home"
        >
          <div className="text-white mb-[48px] ">
            <h3 className="md:text-2xl text-base font-normal text-[#D0D6F9] text-center tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.725px] leading-4 md:text-[20px] md:leading-[24px] lg:leading-[34px]">
              SO, YOU WANT TO TRAVEL TO
            </h3>
            <h1 className="md:text-[150px] text-[80px] text-center leading-[100px] md:leading-[150px] lg:leading-[172px] font-normal py-[16px] md:py-6">
              SPACE
            </h1>
            <p className="text-[#D0D6F9] py-[16px] px-[24px] text-[15px] md:text-[18px] leading-[25px] md:leading-[28px] lg:leading-[32px] text-center font-normal lg:w-[450px] ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
            {/* <div class="flex space-x-2 justify-center"></div> */}
          </div>

          <div
            className="bg-white w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] flex justify-center items-center home-icon"
            style={{
              borderRadius: "50%",

              hover: { boxShadow: "60px 60px white", cursor: "pointer" },
            }}
          >
            <h1 className="font-Bellefair text-[20px] text-center tracking-[1.25px] leading-[23px]  md:text-[32px] lg:text-2xl font-normal tracking-[2px] md:leading-[36.67px] ">
              EXPLORE
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
