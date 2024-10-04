import React from "react";
import pfp from "../assets/hospital.jpg"; // You can replace this with the actual image URL from the JSON if needed

const HospitalCard = ({ hospital }) => {
  const { HospitalName, City, EmergencyHelplineNumber } = hospital; // Destructure hospital data

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <div key={index} className="material-symbols-outlined text-gold">
              star
            </div>
          ))}
        {halfStar ? (
          <div className="material-symbols-outlined text-gold">star_half</div>
        ) : null}
      </>
    );
  };

  return (
    <div className="py-5">
      <button className="bg-[#f7f6fa] hover:bg-[#eceae6] shadow-lg shadow-black transition-colors w-full rounded-lg">
        <div className="flex">
          <div className="p-5">
            <img
              src={pfp} // Use a relevant image here or from the hospital data
              alt="Hospital Image"
              width={400}
              className="rounded-md"
            />
          </div>
          <div className="p-5 w-full">
            <div className="text-start">
              <h1 className="text-4xl mb-2 text-black font-bold font-sans">
                {HospitalName} {/* Display hospital name */}
              </h1>
              <p className="text-green-500 flex align-text-bottom bg-green-100 px-2 border rounded border-green-600 w-fit text-[12px]">
                <div className="text-[19px] pr-2">4.3</div>{" "}
                {/* Replace with dynamic rating if available */}
                {generateStars(4.3)}{" "}
                {/* Replace with dynamic rating if available */}
              </p>
            </div>
            <div className="address text-start w-1/3 text-blue-500 font-bold text-[18px] py-5">
              {City} {/* Display city */}
            </div>
            <div className="text-red-500 text-[16px] font-bold py-2 text-right">
              Emergency Helpline: {EmergencyHelplineNumber}{" "}
              {/* Display emergency helpline number */}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default HospitalCard;
