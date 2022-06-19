import React from "react";

function DeleteUser({ title, body, onCancel, onConfirm }) {
  return (
    <div className="flex flex-col py-4 px-4">
      <h1 className="text-lg text-center">{title}</h1>
      <p className="text-gray-500 text-xs italic mt-4">{body}</p>
      <div className="flex w-full justify-around mt-8">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm border  border-gray-300 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-4 py-2 text-sm rounded-md text-white bg-red-400 hover:bg-red-500 transition-all duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteUser;
