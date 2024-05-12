import React from "react";

const Loader = () => {
  console.log("Loading in loader");
  return (
    <div className="h-screen w-screen bg-yt-main text-slate-100 font-bold text-3xl flex justify-center items-center">
      Loading...
    </div>
  );
};

export default Loader;
