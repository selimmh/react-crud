import React, { useContext, useEffect, useState } from "react";

// components
import {
  Popup,
  AddUserModal,
  DeleteUserModal,
  UpdateUserModal,
} from "../components";

// context
import { Context } from "../context";

// api functions
import { getUsers } from "../api";

// icons
import { VscAdd } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

function Home() {
  const { open, setOpen } = useContext(Context);
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

  // user to delete
  const [userToDelete, setUserToDelete] = useState(null);

  // user to update
  const [userToUpdate, setUserToUpdate] = useState(null);

  // sort users by name
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const sortUsers = (users) => {
    if (sortBy === "name") {
      // sort by name
      return sortOrder === "asc"
        ? users.sort((a, b) => a.name.localeCompare(b.name))
        : users.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "email") {
      // sort by email
      return sortOrder === "asc"
        ? users.sort((a, b) => a.email.localeCompare(b.email))
        : users.sort((a, b) => b.email.localeCompare(a.email));
    } else if (sortBy === "phone") {
      // sort by phone
      return sortOrder === "asc"
        ? users.sort((a, b) => a.phone.localeCompare(b.phone))
        : users.sort((a, b) => b.phone.localeCompare(a.phone));
    } else if (sortBy === "active") {
      // sort by active
      return sortOrder === "asc"
        ? users.sort((a, b) => a.active - b.active)
        : users.sort((a, b) => b.active - a.active);
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
    <div className="w-full h-full flex flex-col items-center pt-20 pb-10">
      {/* searchbar and add button */}
      <div className="flex w-4/5 justify-between space-x-4 my-10">
        <input
          className="py-3 px-10 hover:-translate-y-2 focus:px-4 w-[24rem] text-sm border-2 border-gray-300 rounded-lg focus:outline-none transition-all duration-300 ease-in-out"
          type="text"
          placeholder={"Search..."}
        />
        <button
          onClick={() => {
            setOpen(true);
            setActiveModal("add");
          }}
          className="bg-white hover:-translate-y-2 rounded-lg text-gray-500 text-sm py-2 px-4 border-gray-300 border-2 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2"
        >
          <VscAdd />
          <span>Add new user</span>
        </button>
      </div>

      {/* filters and sort */}
      <div className="flex w-4/5 justify-between space-x-4 my-10 text-sm">
        <button onClick={handleSort} name="name">
          name
        </button>
        <button onClick={handleSort} name="email">
          email
        </button>
        <button onClick={handleSort} name="phone">
          phone
        </button>
        <button onClick={handleSort} name="active">
          active
        </button>
      </div>

      {/* table */}
      <div className="w-4/5 h-auto max-h-full flex flex-col items-center overflow-auto shadow-xl rounded-lg">
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
                className="bg-white border-b border-b-gray-200 hover:bg-gray-50 hover:translate-x-2 transition-all duration-300 ease-in-out"
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
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      setOpen(true);
                      setActiveModal("edit");
                      setUserToUpdate(user);
                    }}
                    className="bg-blue-300 p-3 text-white rounded-full hover:bg-blue-600 active:bg-blue-900 transition-all duration-300 ease-in-out"
                  >
                    <AiOutlineEdit className="" />
                  </button>
                  <button
                    onClick={() => {
                      setOpen(true);
                      setActiveModal("delete");
                      setUserToDelete(user);
                    }}
                    className="bg-red-400 p-3 text-white rounded-full ml-2 hover:bg-red-600 active:bg-red-900 transition-all duration-300 ease-in-out"
                  >
                    <AiOutlineDelete className="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* pagination */}
        </table>
      </div>
      {/* modals */}
      {open && activeModal === "add" && <Popup children={<AddUserModal />} />}
      {open && activeModal === "delete" && (
        <Popup
          children={
            <DeleteUserModal
              userToDelete={userToDelete}
              onDelete={userToDelete.id}
            />
          }
        />
      )}
      {open && activeModal === "edit" && (
        <Popup children={<UpdateUserModal userToUpdate={userToUpdate} />} />
      )}
    </div>
  );
}

export default Home;
