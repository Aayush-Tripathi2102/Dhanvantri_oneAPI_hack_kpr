import React, { useState } from "react";
import HospitalCard from "./HospitalCard";
import HospitalsData from "../../../dataset/Hospitals.json";

const cities = [
  "Chennai",
  "Coimbatore",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Kolkata",
  "Pune",
  "Chandigarh",
  "Ahmedabad",
  "Gurugram",
  "Lucknow",
  "Indore",
  "Kochi",
  "Dehradun",
  "Jaipur",
  "Amritsar",
  "Assam",
  "Ranchi",
  "Visakhapatnam",
];

const Hospitals = () => {
  const [selectedCity, setSelectedCity] = useState("Coimbatore");

  // Filter hospitals based on the selected city
  const filteredHospitals = HospitalsData.filter(
    (hospital) => hospital.City === selectedCity
  );

  return (
    <>
      <div className="w-full lg:mt-[6.7rem] border-b border-n-6 py-3 text-6xl font-bold flex justify-center text-center">
        <h1 className="text-5xl py-2 font-extrabold gradient-text">
          Hospitals
        </h1>
      </div>
      <div className="flex border-b justify-center border-n-6">
        <div className="overflow-x-auto w-1/2 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-600 scrollbar-track-gray-300">
          <div className="flex gap-5 whitespace-nowrap">
            {cities.map((city) => (
              <button
                key={city}
                className={`border border-n-6 my-3 px-7 py-2 rounded-md transition duration-300 ease-in-out 
                  ${
                    selectedCity === city
                      ? "bg-n-6 text-white shadow-lg"
                      : "hover:bg-n-6 hover:text-white hover:shadow-lg"
                  }`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="px-10">
        {filteredHospitals.map((hospital, index) => (
          <HospitalCard key={index} hospital={hospital} />
        ))}
      </div>
    </>
  );
};

export default Hospitals;
