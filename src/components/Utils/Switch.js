import React, { useState } from "react";

function Switch({ type, checked, onChange, name, id, label }) {
  const [isToggled, setIsToggled] = useState(checked);
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
        name={name}
        id={id}
      />

      <div
        onClick={() => {
          setIsToggled(!isToggled);
        }}
        className={`cursor-pointer transition-all ease-in-out duration-500 w-16 h-8 rounded-full shadow-inner flex border items-center justify-between py-2 px-1 ${
          isToggled ? "bg-green-400" : "bg-gray-200"
        }`}
      >
        {/* toggles */}
        <div
          className={`w-6 h-6 rounded-full bg-white transition-all ease-in-out duration-500 shadow-lg ${
            isToggled ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`w-6 h-6 rounded-full bg-white transition-all ease-in-out duration-500 shadow-lg ${
            isToggled ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </label>
  );
}

export default Switch;
