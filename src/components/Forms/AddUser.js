import React, { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //   submit button state
  const [submitState, setSubmitState] = useState("default");

  //   form validation
  const [valid, setValid] = useState(false);

  //   click listener
  const [clicked, setClicked] = useState(false);

  //   handle submit
  const handleSubmit = () => {
    setClicked(true);
    if (name.length && email.length && phone.length) {
      console.log("valid");

      //   loading on submit
      setSubmitState("success");
      setTimeout(() => {
        setSubmitState("default");
      }, 1000);
    } else {
      console.log("invalid");
      setSubmitState("fail");
      setTimeout(() => {
        setSubmitState("default");
      }, 1000);
    }
  };

  return (
    //   form
    <div className="flex flex-col py-8 px-4 space-y-2">
      {/* title */}
      <h1 className="text-lg text-center">New user</h1>
      {/* name */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 transition-all duration-300 ease-in-out "
        type="text"
        placeholder="Name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* errors */}
      {/* required */}
      {!name && clicked && (
        <p className="text-red-500 text-xs italic">Name is required</p>
      )}
      {/* too long */}
      {name && name.length > 25 && clicked && (
        <p className="text-red-500 text-xs italic">Name is too long</p>
      )}
      {/* email */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* errors */}
      {/* required */}
      {!email && clicked && (
        <p className="text-red-500 text-xs italic">Email is required</p>
      )}
      {/* invalid */}
      {email && !/^\S+@\S+\.\S+$/.test(email) && clicked && (
        <p className="text-red-500 text-xs italic">Email is not valid</p>
      )}
      {/* phone */}
      <input
        className="px-4 py-2 text-lg border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400 transition-all duration-300 ease-in-out"
        type="text"
        placeholder="Phone"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {/* errors */}
      {/* required */}
      {!phone && clicked && (
        <p className="text-red-500 text-xs italic">Phone is required</p>
      )}
      {/* invalid */}
      {phone && !/^\+?\d{9,}$/.test(phone) && clicked && (
        <p className="text-red-500 text-xs italic">Phone is not valid</p>
      )}

      {/* submit */}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className={`px-4 py-2 text-lg border border-gray-300 rounded-sm hover:bg-gray-100 active:border-gray-400 focus:border-gray-500 transition-all duration-300 ease-in-out ${
          // color change when success
          submitState === "default"
            ? ""
            : submitState === "success"
            ? "bg-green-300 hover:bg-green-300 tracking-wider translate-y-1"
            : submitState === "fail"
            ? "bg-red-300 hover:bg-red-300 tracking-wider translate-y-1"
            : null
        }`}
      >
        {/* triple turnery function */}
        {submitState === "default"
          ? "Submit"
          : submitState === "success"
          ? "Success"
          : submitState === "fail"
          ? "Failed"
          : null}
      </button>
    </div>
  );
}

export default AddUser;
