import React, { useState, useEffect, useRef } from "react";
import { Switch } from "../components";

// icons
import { BiCircle } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

// options
const options = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
];

function Components() {
  // states
  const [optionsValue, setOptionsValue] = useState("");
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [error, setError] = useState(true);

  // refs
  const optionsRef = useRef(null);

  // useOnClickOutside
  useOnClickOutside(optionsRef, () => setOptionsOpen(false));

  return (
    <div className="flex w-full h-full items-start justify-start py-36 px-12">
      {/* buttons */}
      <div className="flex flex-col items-start space-y-2 border-r-2 px-10">
        {/* primary */}
        {/* regular */}
        <div className="text-lg">Buttons</div>
        <button className="bg-indigo-500 hover:-translate-y-1 rounded-lg font-medium tracking-wide text-white text-xl py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 disabled:opacity-50">
          Button
        </button>
        {/* icon rigth */}
        <button className="bg-indigo-500 hover:-translate-y-1 rounded-lg font-medium tracking-wide text-white text-xl py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 disabled:opacity-50">
          <span>
            <BiCircle className="text-xl mr-2" />
          </span>
          Button
        </button>
        {/* icon left */}
        <button className="bg-indigo-500 hover:-translate-y-1 rounded-lg font-medium tracking-wide text-white text-xl py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 disabled:opacity-50">
          Button
          <span>
            <BiCircle className="text-xl ml-2" />
          </span>
        </button>
        {/* disabled */}
        <button
          disabled
          className="bg-indigo-500 hover:-translate-y-1 rounded-lg font-medium tracking-wide text-white text-xl py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          Button
        </button>
        {/* pill */}
        <button className="disabled:opacity-50 rounded-full bg-indigo-500 hover:-translate-y-1 tracking-wide text-white  text-sm py-2 px-4 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-sm">
          Button
        </button>
        {/* secondary */}
        {/* regular */}
        <button className="disabled:opacity-50 bg-indigo-100 hover:-translate-y-1 rounded-lg font-medium tracking-wide text-gray-600 border border-gray-300 text-xl py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-sm">
          Button
        </button>
        {/* icon left */}
        <button className="disabled:opacity-50 bg-indigo-100 hover:-translate-y-1 rounded-lg font-medium tracking-wide text-gray-600 border border-gray-300 text-xl py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-sm">
          <span>
            <BiCircle className="text-xl mr-2" />
          </span>
          Button
        </button>
        {/* icon right */}
        <button className="disabled:opacity-50 bg-indigo-100 hover:-translate-y-1 rounded-lg font-medium tracking-wide text-gray-600 border border-gray-300 text-xl py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-sm">
          Button
          <span>
            <BiCircle className="text-xl ml-2" />
          </span>
        </button>
        {/* disabled */}
        <button
          disabled
          className="disabled:opacity-50 bg-indigo-100 hover:-translate-y-1 rounded-lg font-medium tracking-wide text-gray-600 border border-gray-300 text-xl py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-sm"
        >
          Button
        </button>
        {/* pill */}
        <button className="disabled:opacity-50 rounded-full bg-indigo-100 hover:-translate-y-1 tracking-wide text-gray-600 border border-gray-300 text-sm py-2 px-4 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 shadow-sm">
          Button
        </button>
      </div>
      {/* inputs */}
      <div className="flex flex-col items-start space-y-4 border-r-2 px-10">
        <div className="text-lg">Inputs</div>

        {/* switch */}
        <Switch />

        {/* regular */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400 mb-2">Label</label>
          <input
            className="px-4 py-2 text-lg border border-indigo-300 rounded-md outline-none text-gray-500"
            type="text"
            id="text"
            name="text"
          />
        </div>

        {/* custom dropdown */}
        <div className="flex flex-col relative">
          <label className="text-sm text-gray-400 mb-2">Label</label>
          <div className="flex border items-center">
            <input
              className="px-4 py-2 text-lg border border-indigo-300 rounded-md outline-none text-gray-500 select-none"
              type="text"
              id="name"
              name="name"
              value={optionsValue}
              onClick={() => setOptionsOpen(!optionsOpen)}
              onChange={(e) => setOptionsValue(e.target.value)}
            />
            <span className="-ml-10 rounded-full transition-all duration-300 ease-in-out cursor-pointer text-gray-400">
              {optionsOpen ? <MdExpandLess /> : <MdExpandMore />}
            </span>
          </div>

          {optionsOpen && (
            <ul
              ref={optionsRef}
              className="w-full max-h-60 bg-white absolute top-20 z-10 overflow-auto shadow-md shadow-gray-200 rounded-lg p-2"
            >
              {options.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center justify-start px-4 py-2 hover:bg-indigo-50 cursor-pointer transition-all duration-200 ease-in-out"
                  onClick={() => {
                    setOptionsOpen(false);
                    setOptionsValue(option);
                  }}
                >
                  <span className="bg-gray-200 p-2 rounded-full mr-6" />
                  <span className="text-sm text-gray-600">{option}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* date */}
        <div className="flex flex-col w-full">
          <label className="text-sm text-gray-400 mb-2">Label</label>
          <input
            className="px-4 py-2 text-lg border border-indigo-300 rounded-md outline-none text-gray-500"
            type="date"
            id="date"
            name="date"
          />
        </div>

        {/* error */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400 mb-2">Label</label>
          <input
            className={`px-4 py-2 text-lg border ${
              error ? "border-red-400" : "border-indigo-300"
            } rounded-md outline-none ${
              error ? "text-red-500" : "text-gray-500"
            }`}
            type="text"
            id="text"
            name="text"
          />
          {error && (
            <span className="text-red-500 text-sm italic mt-2 ml-2">
              Error message
            </span>
          )}
        </div>
      </div>
      {/* fabs */}
      <div className="flex flex-col items-start space-y-4 border-r-2 px-10">
        <div className="text-lg">Fabs</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-indigo-400 p-3 text-white rounded-full hover:bg-indigo-500 active:bg-indigo-600 transition-all duration-300 ease-in-out cursor-pointer">
            <BiCircle />
          </div>
          <div className="bg-indigo-400 p-3 text-white rounded-full hover:bg-indigo-500 active:bg-indigo-600 transition-all duration-300 ease-in-out cursor-pointer">
            <AiOutlineEdit />
          </div>
          <div className="bg-indigo-400 p-3 text-white rounded-full hover:bg-indigo-500 active:bg-indigo-600 transition-all duration-300 ease-in-out cursor-pointer">
            <FiMoreHorizontal />
          </div>
          <div className="bg-red-400 p-3 text-white rounded-full hover:bg-red-500 active:bg-red-600 transition-all duration-300 ease-in-out cursor-pointer">
            <AiOutlineDelete />
          </div>
        </div>
      </div>
      {/* alerts */}
      <div className="flex flex-col items-start space-y-4 border-r-2 px-10">
        <div className="text-lg">Alerts</div>
        <div className="bg-emerald-400 text-base py-2 px-4 rounded-lg text-white select-none">
          User added succuessfully
        </div>
        <div className="bg-orange-400 text-base py-2 px-4 rounded-lg text-white select-none">
          Changes were not saved
        </div>
        <div className="bg-red-400 text-base py-2 px-4 rounded-lg text-white select-none">
          Something went wrong
        </div>
      </div>
    </div>
  );
}

// hook
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default Components;
