import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    borderBottom: "3px solid white",
  };
  return (
    <div className="py-6 px-16 fixed w-full">
      <nav className=" flex justify-between items-center text-white">
        <div>
          <span>
            <img src="../../../assets/shared/logo.svg" alt="logo" />
          </span>
        </div>
        <ul className="flex bg-gray-500/[.7] p-6">
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
