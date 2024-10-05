import React from "react";
import pfp from "../assets/medicine.jpg";

const Dawai = ({ name, price }) => {
  return (
    <div className="rounded-lg bg-slate-50">
      <div className="p-5 rounded-md">
        <img src={pfp} alt="medicine" width={250} className="rounded-lg" />
      </div>
      <div className="flex justify-between px-6">
        <div className="text-black font-bold text-lg">{name}</div>
        <div className="text-red-500 text-md">&#8377;{price}</div>
      </div>
      <button className="w-full bg-green-600 py-3 rounded-b-lg text-white font-bold hover:bg-green-700 transition-colors">
        Add To Cart
      </button>
    </div>
  );
};

export default Dawai;
