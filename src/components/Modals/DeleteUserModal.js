import React, { useContext } from "react";
import { Context } from "../../context";

// api functions
import { deleteUser } from "../../api";

function DeleteUserModal({ userToDelete }) {
  const { setOpen, setNotification } = useContext(Context);
  return (
    <div className="flex flex-col py-4 px-4">
      <h1 className="text-lg text-center">Delete user #{userToDelete.id}</h1>
      <p className="text-gray-500 text-xs italic mt-4">
        Are you sure you want to delete this user?
      </p>
      <div className="flex w-full justify-around mt-8">
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="px-4 py-2 text-sm border  border-gray-300 rounded-md transition-all duration-300 ease-in-out hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setOpen(false);
            deleteUser(userToDelete.id);
            setNotification({
              type: "success",
              message: "User deleted successfully",
            });
          }}
          className="px-4 py-2 text-sm rounded-md text-white bg-red-400 hover:bg-red-500 transition-all duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteUserModal;
