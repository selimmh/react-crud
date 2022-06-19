import React, { useContext } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Context } from "../context";

function Modal({ children }) {
  const { setOpen, setUserToUpdate, setUserToDelete, setAlert } =
    useContext(Context);
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center opacity-100 animate-fade-in">
      {/* backdrop */}
      <div
        onClick={() => {
          setOpen(false);
          setUserToUpdate(null);
          setUserToDelete(null);
          setAlert({
            type: "warning",
            message: "Your changes have not been saved.",
          });
        }}
        className="fixed inset-0 bg-black bg-opacity-50 transition-all"
      />
      {/* content */}
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="bg-white rounded-lg shadow-xl p-4 z-50 relative ">
          <button
            onClick={() => {
              setOpen(false);
              setUserToUpdate(null);
              setUserToDelete(null);
              setAlert({
                type: "warning",
                message: "Your changes have not been saved.",
              });
            }}
            className="absolute top-0 right-0 m-4 opacity-100"
          >
            <RiCloseLine className="h-6 w-6 fill-gray-500 hover:fill-red-500 transition-all duration-300 ease-in-out" />
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
