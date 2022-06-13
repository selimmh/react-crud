import React from "react";
import { Switch } from "../components";

function Page1() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Switch value={true} />
    </div>
  );
}

export default Page1;
