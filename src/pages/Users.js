import React, { useContext, useEffect, useState } from "react";

// components
import { Modal, UserForm, DeleteUser } from "../components";

// context
import { Context } from "../context";

// api functions
import { getUsers, deleteUser } from "../api";

// icons
import { VscAdd } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

function Users() {
  // context
  const {
    open,
    setOpen,

    userToUpdate,
    setUserToUpdate,

    userToDelete,
    setUserToDelete,

    alert,
    setAlert,
  } = useContext(Context);

  const [activeModal, setActiveModal] = useState(null);

  // get users
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => setUsers(res));
  }, [open]);

  // refetch users on close
  useEffect(() => {
    if (!open) {
      getUsers().then((res) => setUsers(res));
    }
  }, [open]);

  // sort users
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const sortUsers = (users) => {
    if (sortBy === "name") {
      // sort by name
      return sortOrder === "asc"
        ? users?.sort((a, b) => a.name.localeCompare(b.name))
        : users?.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "email") {
      // sort by email
      return sortOrder === "asc"
        ? users?.sort((a, b) => a.email.localeCompare(b.email))
        : users?.sort((a, b) => b.email.localeCompare(a.email));
    } else if (sortBy === "phone") {
      // sort by phone
      return sortOrder === "asc"
        ? users?.sort((a, b) => a.phone.localeCompare(b.phone))
        : users?.sort((a, b) => b.phone.localeCompare(a.phone));
    } else if (sortBy === "active") {
      // sort by active
      return sortOrder === "asc"
        ? users?.sort((a, b) => a.active - b.active)
        : users?.sort((a, b) => b.active - a.active);
    }
  };

  // sort users by name
  const handleSort = (e) => {
    const { name } = e.target;
    if (sortBy === name) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(name);
      setSortOrder("asc");
    }
  };
  // sort users by name
  const sortedUsers = sortUsers(users);

  // table headers
  const headers = ["#", "Name", "Email", "Phone", "Status", "Actions"];

  return (
    // container
    <div className="h-full w-full p-12 pl-32">
      {/* content */}
      <div className="w-full h-full flex flex-col px-6 space-y-12">
        {/* title */}
        <h1 className="text-3xl">Users</h1>
        {/* searchbar and add button */}
        <div className="flex justify-between">
          <input
            className="py-3 px-10 hover:-translate-y-1 focus:px-4 w-[24rem] text-sm border-2 border-indigo-300 rounded-lg outline-none transition-all duration-300 ease-in-out"
            type="text"
            placeholder={"Search..."}
          />
          <button
            onClick={() => {
              setOpen(true);
              setActiveModal("add");
            }}
            className="bg-indigo-500 hover:-translate-y-1 text-base rounded-lg font-medium tracking-wide text-white py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            <VscAdd className="text-lg" />
            <span>Add new user</span>
          </button>
        </div>

        {/* table */}
        <div className="h-auto max-h-full flex flex-col items-center overflow-auto shadow-xl rounded-lg">
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
              {sortedUsers?.map((user, index) => (
                <tr
                  key={user.id}
                  className="bg-white border-b border-b-gray-200 hover:bg-gray-50 transition-all duration-300 ease-in-out"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`text-white px-2 py-1 rounded-full ${
                        user.active ? "bg-green-300" : "bg-red-400"
                      }`}
                    >
                      {user.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  {/* actions */}
                  <td className="px-6 py-4 flex">
                    <button
                      onClick={() => {
                        setOpen(true);
                        setActiveModal("edit");
                        setUserToUpdate(user);
                      }}
                      className="bg-gray-300 p-3 text-black rounded-full hover:bg-blue-300 transition-all duration-300 ease-in-out"
                    >
                      <AiOutlineEdit className="" />
                    </button>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setActiveModal("delete");
                        setUserToDelete(user);
                      }}
                      className="bg-gray-300 p-3 text-black rounded-full ml-2 hover:bg-red-300 transition-all duration-300 ease-in-out"
                    >
                      <AiOutlineDelete className="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* modals */}
        {open && (activeModal === "add" || activeModal === "edit") && (
          <Modal children={<UserForm userToUpdate={userToUpdate} />} />
        )}
        {open && activeModal === "delete" && (
          <Modal
            children={
              <DeleteUser
                title={`Delete user #${userToDelete.id}`}
                body="Are you sure you want to delete this user?"
                onCancel={() => {
                  setOpen(false);
                  setAlert(
                    "danger",
                    `User #${userToDelete.id} was not deleted.`
                  );
                }}
                onConfirm={() => {
                  setOpen(false);
                  deleteUser(userToDelete.id);
                  setAlert({
                    type: "success",
                    message: `User #${userToDelete.id} deleted successfully`,
                  });
                }}
              />
            }
          />
        )}
      </div>
    </div>
  );
}

export default Users;
