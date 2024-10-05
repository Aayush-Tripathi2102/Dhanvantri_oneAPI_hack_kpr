import React from "react";
import Dawai from "./Dawai";
import Medicines from "../../../dataset/Medicines.json";

const Pharmacy = () => {
  return (
    <>
      <div className="w-full lg:mt-[6.7rem] py-3 border-b border-n-6 text-6xl font-bold flex justify-center text-center ">
        <h1 className="text-5xl py-2 font-extrabold gradient-text">Pharmacy</h1>
      </div>
      <div className="flex flex-wrap gap-5 p-5 justify-center">
        {Medicines.map((medicine, index) => (
          <Dawai
            key={index}
            name={medicine.MedicineName}
            price={medicine.Price}
          />
        ))}
      </div>
    </>
  );
};

export default Pharmacy;
