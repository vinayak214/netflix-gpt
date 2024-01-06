import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[30%]">
      <h1 className="font-bold text-5xl text-red-500">{title}</h1>
      <p className="w-5/12 py-4 text-lg">{overview}</p>
      <div className="">
        <button className="text-black border font-bold border-gray-500 px-12 p-4 rounded-lg bg-white text-xl  hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="text-white border font-bold border-gray-500  p-4 px-12 rounded-lg bg-gray-500 bg-opacity-50 text-xl ml-4 hover:bg-opacity-90">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
