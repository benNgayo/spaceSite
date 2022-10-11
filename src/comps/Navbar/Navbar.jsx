import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [closeBtn, setCloseBtn] = useState(false);
  let activeStyle = {
    borderBottom: "3px solid white",
  };

  const handleClick = (e) => {
    setCloseBtn(!closeBtn);
  };
  return (
    <div className=" p-6 md:py-6 md:px-16 fixed w-full ">
      <nav className=" flex justify-between items-center text-white">
        <div>
          <span>
            <img src="../../../assets/shared/logo.svg" alt="logo" />
          </span>
        </div>
        <div
          className="humbergur-icon w-[ 30px ] h-[30px] flex-col hover:cursor-pointer md:hidden "
          onClick={handleClick}
        >
          <div className="w-[30px] h-[2px] bg-white mb-[8px] " />
          <div className="w-[30px] h-[2px] bg-white mb-[8px]" />
          <div className="w-[30px] h-[2px] bg-white" />
        </div>
        <ul className="bg-gray-500/[.7] p-6 hidden md:flex ">
          <li className="ml-8 uppercase">
            <NavLink
              className="pb-6"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className=" mr-2 font-bold">00</span>HOME
            </NavLink>
          </li>
          <li className="ml-8 uppercase">
            <NavLink
              className="pb-6"
              to="/destination"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className=" mr-2 font-bold">00</span>Destination
            </NavLink>
          </li>
          <li className="ml-8 uppercase">
            <NavLink
              className="pb-6"
              to="/crew"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className=" mr-2 font-bold">00</span>Crew
            </NavLink>
          </li>
          <li className="ml-8 uppercase">
            <NavLink
              className="pb-6"
              to="/technology"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className=" mr-2 font-bold">00</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
