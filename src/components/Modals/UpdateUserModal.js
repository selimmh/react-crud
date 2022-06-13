import React, { useContext, useState } from "react";
import { Context } from "../../context";

import Switch from "../Utils/Switch";

// api functions
import { updateUser } from "../../api";

function UpdateUserModal({ userToUpdate }) {
  const { setOpen, open, setNotification } = useContext(Context);

  //   initial values for form
  const [user, setUser] = useState({
    id: userToUpdate.id,
    active: userToUpdate.active,
    name: userToUpdate.name,
    email: userToUpdate.email,
    phone: userToUpdate.phone,
  });

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
      updateUser(user).then((res) => {
        setOpen(false);
        setNotification({
          type: "success",
          message: "User updated successfully",
        });
      });
    }
  };

  const handleSwitch = (e) => {
    setUser({ ...user, active: e.target.checked });
  };

  return (
    //   form
    <div className="flex flex-col py-8 px-4 space-y-2">
      {/* title */}
      <h1 className="text-lg text-center">Update user #{user.id}</h1>

      {/* active */}
      <label className="text-sm text-gray-400">Active</label>
      <Switch
        checked={user.active}
        onChange={handleSwitch}
        name="active"
        id="active"
      />

      {/* name */}
      <label className="text-sm text-gray-400 ">Name</label>
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all duration-300 ease-in-out "
        type="text"
        placeholder="Name"
        id="name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      {/* email */}
      <label className="text-sm text-gray-400">Email</label>
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all duration-300 ease-in-out "
        type="text"
        placeholder="Email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      {/* phone */}
      <label className="text-sm text-gray-400">Phone</label>
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 transition-all duration-300 ease-in-out "
        type="text"
        placeholder="Phone"
        id="phone"
        name="phone"
        value={user.phone}
        onChange={handleChange}
      />
      {/* errors */}
      {showErrors()}
      {/* submit */}
      <button
        onClick={handleSubmit}
        className="px-4 py-3 text-sm border  border-gray-300 rounded-md text-white bg-blue-400 hover:bg-blue-500 transition-all duration-300 ease-in-out"
      >
        Update
      </button>
    </div>
  );
}

export default UpdateUserModal;
