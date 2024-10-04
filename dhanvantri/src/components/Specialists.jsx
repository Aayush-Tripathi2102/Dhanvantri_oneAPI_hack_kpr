import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import specialistsData from "../../../dataset/Speciality.json"; // Import the JSON data

const Specialists = () => {
  const [selectedCity, setSelectedCity] = useState("Coimbatore");
  const [doctorType, setDoctorType] = useState("Paediatrician");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

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

  // Filter doctors whenever the selected city or doctor type changes
  useEffect(() => {
    const filtered = specialistsData.filter(
      (doctor) =>
        doctor.City === selectedCity && doctor.Specialty === doctorType
    );
    setFilteredDoctors(filtered);
  }, [selectedCity, doctorType]);

  return (
    <>
      <div className="w-full lg:mt-[6.7rem] border-b border-n-6 py-3 text-6xl font-bold flex justify-center text-center">
        <h1 className="text-5xl py-2 font-extrabold gradient-text">
          Specialists
        </h1>
      </div>
      <div className="flex border-b border-n-6">
        <div className="pr-52 pl-5 my-auto">
          <div className="text-center py-2">Type</div>
          <div>
            <select
              className="px-2 py-1 rounded-md border border-blue-500"
              value={doctorType}
              onChange={(e) => setDoctorType(e.target.value)}
            >
              <option value="Paediatrician">Paediatrician</option>
              <option value="Ophthalmologist">Opthalmologist</option>
              <option value="Oncologist">Oncologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Rheumatologist">Rheumatologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="ENT">ENT</option>
              <option value="Orthopaedic">Orthopaedic</option>
            </select>
          </div>
        </div>
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

      <div className="py-8 flex flex-wrap gap-5 justify-center">
        <h2 className="w-full text-center text-3xl font-bold">
          Showing {doctorType}s in {selectedCity}
        </h2>
        {/* Render DoctorCard components based on filteredDoctors */}
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))
        ) : (
          <p>No doctors available in this category.</p>
        )}
      </div>
    </>
  );
};

export default Specialists;
