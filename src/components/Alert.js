import React, { useContext } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
} from "react-icons/ai";

function Alert({ type, message }) {
  return (
    <div className="fixed bottom-4 left-[50%] translate-x-[-50%] flex flex-col items-center justify-center animate-swipe-up">
      {/* content */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div
          className={`flex items-center rounded-lg shadow-xl py-4 px-8 z-50 relative ${
            type === "success"
              ? "bg-green-400"
              : type === "danger"
              ? "bg-red-400"
              : "bg-orange-400"
          }`}
        >
          <span className="text-white mr-2 text-xl">
            {type === "success" ? (
              <AiOutlineCheckCircle />
            ) : type === "danger" ? (
              <AiOutlineCloseCircle />
            ) : (
              <AiOutlineWarning />
            )}
          </span>
          <h1 className="text-white text-sm">{message}</h1>
        </div>
      </div>
    </div>
  );
}

export default Alert;
