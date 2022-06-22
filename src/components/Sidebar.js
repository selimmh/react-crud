import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

// icons
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineMessage,
  AiOutlineBranches,
  AiOutlineSetting,
  AiOutlineInfoCircle,
  AiOutlineArrowLeft,
  AiOutlineCodeSandbox,
  AiOutlineLogout,
} from "react-icons/ai";
import { SiReact } from "react-icons/si";

const navitems = [
  {
    name: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    name: "Users",
    path: "/users",
    icon: <AiOutlineUserSwitch />,
  },
  {
    name: "Messages",
    path: "/messages",
    icon: <AiOutlineMessage />,
  },
  {
    name: "Branches",
    path: "/branches",
    icon: <AiOutlineBranches />,
  },
  {
    name: "Info",
    path: "/info",
    icon: <AiOutlineInfoCircle />,
  },
  {
    name: "Components",
    path: "/components",
    icon: <SiReact />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <AiOutlineSetting />,
  },
  {
    name: "Lorem",
    path: "/test",
    icon: <AiOutlineCodeSandbox />,
  },
  {
    name: "Ipsum dolor",
    path: "/test",
    icon: <AiOutlineCodeSandbox />,
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    // container
    <div className="absolute top-0 left-0 bottom-0 bg-white border-r z-10 w-20 group hover:w-80 transition-all duration-300 ease-in-out">
      {/* arrow */}
      <div className="absolute h-full  flex items-center justify-center right-0 translate-x-[50%]">
        <AiOutlineArrowLeft className="rounded-full bg-white w-12 h-12 p-2 group-hover:rotate-180 transition-all duration-300 ease-in-out border-r" />
      </div>
      {/* content */}
      <div className="flex flex-col w-full h-full items-center justify-between px-6 py-12">
        {/* logo */}
        <div className="mb-10 animate-spin-slow">
          <SiReact className="w-10 h-10" />
        </div>
        {/* items */}
        <ul className="flex flex-col w-full items-start justify-center space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          {navitems.map((nav, index) => (
            <li
              key={index}
              className={`rounded-lg flex whitespace-nowrap items-center w-full py-4 px-2 cursor-pointer hover:bg-indigo-50 space-x-2 text-xl transition-all duration-200 ease-in-out ${
                location.pathname === nav.path &&
                `border-l-4 border-indigo-500 bg-gray-100`
              }`}
              onClick={() => navigate(nav.path)}
            >
              <span>{nav.icon}</span>
              <span>{nav.name}</span>
            </li>
          ))}
        </ul>
        {/* logout */}
        <div className="rounded-lg flex whitespace-nowrap items-center w-full py-4 px-2 cursor-pointer hover:bg-indigo-50 space-x-2 text-xl transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100">
          <span>
            <AiOutlineLogout />
          </span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
