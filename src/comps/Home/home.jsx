import React from "react";
const Home = () => {
  return (
    <>
      <div className="bg-hero-pattern h-screen p-8   font-body justify-center flex flex-col w-screen">
        <div
          className="flex justify-between  px-24 items-center absolute bottom-28 w-11/12 box-border"
          id="home"
        >
          <div className="text-white max-w-sm ">
            <h3 className="text-2xl font-normal text-[#D0D6F9] tracking=[4.725px] leading-[34px]">
              SO, YOU WANT TO TRAVEL TO
            </h3>
            <h1 className="text-[150px] leading-[172px] font-normal py-6">
              SPACE
            </h1>
            <p className="text-[#D0D6F9] text-[18px] leading-[32px] font-normal">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
            <div class="flex space-x-2 justify-center"></div>
          </div>
          <div
            className="bg-white flex justify-center items-center"
            style={{ borderRadius: "50%", width: "274px", height: "274px" }}
          >
            <h1 className="font-Bellefair text-2xl font-normal tracking-[2px]">
              EXPLORE
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
