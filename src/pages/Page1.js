import React, { useState, useEffect } from "react";
import { VscAdd } from "react-icons/vsc";

const headers = ["#", "Name", "Email", "Phone", "Actions"];

function Page1() {
  // filter
  const [query, setQuery] = useState("");

  // data
  const [data, setData] = useState([]);

  return (
    // container
    <div className="w-full h-full flex flex-col items-center">
      {/* content */}
      <div className="flex flex-col items-center justify-center w-[80%] h-full y-2">
        {/* searchbar and add button */}
        <div className="flex w-full justify-start py-8 space-x-4">
          <input
            className="px-4 text-sm border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 transition-all duration-300 ease-in-out"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-white  rounded-lg text-gray-500 text-sm py-2 px-4 border-gray-300 border-2 hover:border-gray-500 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2">
            <VscAdd />
            <span>Adauga pacient</span>
          </button>
        </div>
        {/* table */}
        <div className="w-full h-[80%] flex flex-col items-center overflow-auto shadow-xl rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            {/* head */}
            <thead className="text-sm text-gray-700 bg-gray-50 ">
              <tr>
                {headers.map((header, index) => (
                  <th key={index} scope="col" className="px-6 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {data
                .filter(
                  (patient) =>
                    patient.PRENUME.toLowerCase().includes(query) ||
                    patient.NUME.toLowerCase().includes(query)
                )
                .map((d, index) => (
                  <tr
                    key={d.id}
                    className="bg-white border-b  hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{d.name}</td>
                    <td className="px-6 py-4">{d.email}</td>
                    <td className="px-6 py-4">{d.phone}</td>
                    <td className="px-6 py-4">
                      <button className="bg-blue-400 px-3 py-1 text-white rounded-md hover:bg-blue-600 active:bg-blue-900 transition-all duration-300 ease-in-out">
                        Edit
                      </button>
                      <button className="bg-red-400 px-3 py-1 text-white rounded-md ml-2 hover:bg-red-600 active:bg-red-900 transition-all duration-300 ease-in-out">
                        Del
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* popup */}
    </div>
  );
}

export default Page1;
