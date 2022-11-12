import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [closeBtn, setCloseBtn] = useState(true);
  let activeStyle = {
    borderBottom: "3px solid white",
  };

  const handleClick = (e) => {
    setCloseBtn(!closeBtn);
  };
  return (
    <div className="  md:py-6 md:px-16 absolute z-40 opacity-100 w-full ">
      <nav className="flex justify-between text-white relative ">
        <div className="m-4">
          <span>
            <img src="../../../assets/shared/logo.svg" alt="logo" />
          </span>
        </div>

        <div>
          <div
            className={`${
              closeBtn ? "flex" : "hidden"
            } humbergur-icon m-4 w-[ 30px ] h-[30px] ml-auto  flex-col hover:cursor-pointer md:hidden`}
            onClick={handleClick}
          >
            <div className="w-[30px] h-[2px] bg-white mb-[8px] " />
            <div className="w-[30px] h-[2px] bg-white mb-[8px]" />
            <div className="w-[30px] h-[2px] bg-white" />
          </div>
        </div>
        <div
          className={` mix-blend-multiply bg-gray-500 md:bg-gray-500/[.7]  md:blur-none opacity-1] h-screen ${
            closeBtn ? "hidden" : "flex"
          } md:right-[1rem] md:h-auto md:flex flex-col w-1/2 md:w-auto `}
        >
          <div
            className="w-[40px] h-[40px] p-8 ml-auto hover:cursor-pointer md:hidden"
            onClick={handleClick}
          >
            <div className="w-[30px] h-[2px] bg-white mb-[8px] rotate-45 bg-white " />
            <div className="w-[30px] h-[2px] bg-white mb-[8px] -rotate-45 -translate-y-2.5 bg-white " />
          </div>
          <ul className="p-6 flex flex-col  md:flex-row font-BarlowCondensed ">
            <li
              className=" pb-[2rem] md:pb-0 md:ml-8 uppercase"
              onClick={handleClick}
            >
              <NavLink
                className="pb-6"
                to="/"
                style={({ isActive, closeBtn }) =>
                  isActive ? activeStyle : undefined
                }
              >
                <span className=" mr-2 font-bold ">00</span>HOME
              </NavLink>
            </li>
            <li
              className=" pb-[2rem] md:pb-0  md:ml-8 uppercase"
              onClick={handleClick}
            >
              <NavLink
                className="pb-6"
                to="/destination"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className=" mr-2 font-bold">00</span>Destination
              </NavLink>
            </li>
            <li
              className=" pb-[2rem] md:pb-0  md:ml-8 uppercase"
              onClick={handleClick}
            >
              <NavLink
                className="pb-6"
                to="/crew"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className=" mr-2 font-bold">00</span>Crew
              </NavLink>
            </li>
            <li
              className=" pb-[2rem] md:pb-0  md:ml-8 uppercase"
              onClick={handleClick}
            >
              <NavLink
                className="pb-6"
                to="/technology"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className=" mr-2 font-bold">00</span> Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
