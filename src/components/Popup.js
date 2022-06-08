import React, { useContext } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Context } from "../context";

function Popup({ children }) {
  const { setOpen } = useContext(Context);
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center opacity-100 animate-fade-in">
      {/* backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-50 transition-all`}
      ></div>
      {/* content */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="bg-white rounded-lg shadow-xl p-4 z-50 relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-0 right-0 m-2 opacity-0"
          >
            <RiCloseLine className="h-8 w-8 fill-gray-500 hover:fill-red-500 transition-all duration-300 ease-in-out" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Popup;
