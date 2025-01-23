import React from "react";
import coinWorker from "../../assets/coinNav.png";
const Worker = ({ TopWorker }) => {
  const { name, photo, coin } = TopWorker || {};
  return (
    <div className="bg-gradient-to-r from-[#020710] to-[#1b2028] text-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:-translate-y-2 hover:shadow-xl duration-500">
      <div className="relative mb-4">
        <img
          src={photo}
          alt={name}
          className="w-28 h-28 mx-auto rounded-full border-4 border-gray-600"
        />
        <div className="absolute top-2 right-2 text-white text-xs font-bold px-2 py-1 rounded-full">
          <img className="w-8 h-8" src={coinWorker} alt="" />
          {coin}
        </div>
        <div className="py-4">
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <div className="mt-4">
          <button className="w-10 h-10 mx-auto bg-gray-600 hover:bg-accent text-white rounded-full flex items-center justify-center transition-colors">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Worker;
