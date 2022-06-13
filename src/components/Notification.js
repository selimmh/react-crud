import React, { useContext } from "react";

function Notification({ type, message }) {
  return (
    <div className="fixed bottom-4 left-[50%] translate-x-[-50%] flex flex-col items-center justify-center animate-swipe-up">
      {/* content */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div
          className={`rounded-lg shadow-xl py-4 px-8 z-50 relative ${
            type === "success"
              ? "bg-green-400"
              : type === "danger"
              ? "bg-red-400"
              : "bg-gray-400"
          }`}
        >
          <h1 className="text-white text-sm">{message}</h1>
        </div>
      </div>
    </div>
  );
}

export default Notification;
