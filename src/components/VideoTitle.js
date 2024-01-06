import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-5xl text-red-500">{title}</h1>
      <p className="w-6/12 py-4 text-lg">{overview}</p>
      <div className="">
        <button className="text-black border font-bold border-gray-500 px-12 p-4 rounded-lg bg-white text-xl ">
          ▶️ Play
        </button>
        <button className="text-black border font-bold border-gray-500  p-4 px-12 rounded-lg bg-gray-500 bg-opacity-40 text-wrap ml-4">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
