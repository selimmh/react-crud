import React, { useContext } from "react";
import { Popup, AddUser } from "../components";
import { Context } from "../context";

function Home() {
  const { open, setOpen } = useContext(Context);
  return (
    <div className="flex w-full h-full items-center justify-center">
      <button onClick={() => setOpen(true)}>Open Popup</button>
      {open && <Popup children={<AddUser />} />}
    </div>
  );
}

export default Home;
