import React from "react";

function Info() {
  return (
    // container
    <div className="h-full w-full p-12 pl-32">
      {/* content */}
      <div className="w-full h-full flex flex-col px-6 space-y-12 border-2">
        {/* title */}
        <h1 className="text-3xl">Info</h1>
        {/* main */}
        <div className="w-full h-full flex items-center justify-center border">
          Info
        </div>
      </div>
    </div>
  );
}

export default Info;
