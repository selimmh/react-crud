import React, { useState, useContext } from "react";
import { Context } from "../context";

// api functions
import { addUser, updateUser } from "../api";

function UserForm({ userToUpdate }) {
  const { setOpen, setAlert, setUserToUpdate } = useContext(Context);

  //   initial values for form
  const [user, setUser] = useState(
    userToUpdate
      ? {
          id: userToUpdate.id,
          active: userToUpdate.active,
          name: userToUpdate.name,
          email: userToUpdate.email,
          phone: userToUpdate.phone,
        }
      : {
          active: true,
          name: "",
          email: "",
          phone: "",
        }
  );

  //   handle change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //   submit click listener
  const [clicked, setClicked] = useState(false);

  //   show errors
  const showErrors = () => {
    if (clicked) {
      if (!user.name.length) {
        return <p className="text-red-500 text-xs italic">Name is required</p>;
      } else if (!user.email.length) {
        return <p className="text-red-500 text-xs italic">Email is required</p>;
      } else if (!user.phone.length) {
        return <p className="text-red-500 text-xs italic">Phone is required</p>;
      } else if (!/^\S+@\S+\.\S+$/.test(user.email)) {
        return <p className="text-red-500 text-xs italic">Email is invalid</p>;
      } else if (!/^\+?\d{9,}$/.test(user.phone)) {
        return <p className="text-red-500 text-xs italic">Phone is invalid</p>;
      }
    }
  };

  //   handle submit
  const handleSubmit = () => {
    setClicked(true);
    if (
      user.name.length &&
      user.email.length &&
      user.phone.length &&
      /^\S+@\S+\.\S+$/.test(user.email) &&
      /^\+?\d{9,}$/.test(user.phone)
    ) {
      if (!userToUpdate) {
        addUser(user).then((res) => {
          setOpen(false);
          setAlert({
            type: "success",
            message: "User added successfully",
          });
        });
      } else {
        updateUser(user).then((res) => {
          setOpen(false);
          setUserToUpdate(null);
          setAlert({
            type: "success",
            message: "User updated successfully",
          });
        });
      }
    }
  };

  return (
    //   form
    <div className="flex flex-col py-8 px-4 space-y-4">
      {/* title */}
      <h1 className="text-lg text-center">
        {userToUpdate ? "Update user" : "Add new user"}
      </h1>
      {/* name */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-400 mb-1">Name</label>
        <input
          className="px-4 py-2 text-lg border border-indigo-300 rounded-md outline-none text-gray-500"
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      {/* Email */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-400 mb-1">Email</label>
        <input
          className="px-4 py-2 text-lg border border-indigo-300 rounded-md outline-none text-gray-500"
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      {/* Phone */}
      <div className="flex flex-col">
        <label className="text-sm text-gray-400 mb-1">Phone</label>
        <input
          className="px-4 py-2 text-lg border border-indigo-300 rounded-md outline-none text-gray-500"
          type="text"
          id="phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
      </div>
      {/* errors */}
      {showErrors()}
      {/* submit */}
      <button
        onClick={handleSubmit}
        className="bg-indigo-500 hover:-translate-y-1 rounded-md tracking-wide text-white text-lg py-3 px-6 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 disabled:opacity-50"
      >
        {userToUpdate ? "Update" : "Add"}
      </button>
    </div>
  );
}

export default UserForm;
