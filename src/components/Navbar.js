import React from "react";
import { useNavigate, useLocation } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <ul className="flex w-full text-xl bg-transparent border select-none">
        <li
          className={`py-6 cursor-pointer flex justify-center basis-1/4 transition-all duration-300 ease-in-out active:bg-gray-300 hover:bg-gray-200 ${
            location.pathname === "/" && `bg-gray-200`
          }`}
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className={`py-6 cursor-pointer flex justify-center basis-1/4 transition-all duration-300 ease-in-out active:bg-gray-300 hover:bg-gray-200 ${
            location.pathname === "/page1" && `bg-gray-200`
          }`}
          onClick={() => navigate("/page1")}
        >
          Page1
        </li>
        <li
          className={`py-6 cursor-pointer flex justify-center basis-1/4 transition-all duration-300 ease-in-out active:bg-gray-300 hover:bg-gray-200 ${
            location.pathname === "/page2" && `bg-gray-200`
          }`}
          onClick={() => navigate("/page2")}
        >
          Page2
        </li>
        <li
          className={`py-6 cursor-pointer flex justify-center basis-1/4 transition-all duration-300 ease-in-out active:bg-gray-300 hover:bg-gray-200 ${
            location.pathname === "/page3" && `bg-gray-200`
          }`}
          onClick={() => navigate("/page3")}
        >
          Page3
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
