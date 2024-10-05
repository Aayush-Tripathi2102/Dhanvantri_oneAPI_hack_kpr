import React from "react";
import logo from "../assets/docLogo.png";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <>
      <div className="border border-n-6 shadow-lg shadow-black bg-[#faf9f6] hover:bg-[#f3f2ef] transition-colors rounded-md flex py-7 pr-3 pl-2 w-[500px]">
        <div>
          <div className="flex justify-center">
            <img
              src={logo}
              alt="docLogo"
              width={100}
              className="rounded-full mb-16"
            />
          </div>
          <Link
            to="/BookSpecialist"
            className="bg-[#84e4a8] hover:bg-[#7fdba2] transition-colors py-3  text-black font-bold mt-11 w-16 border-2 border-[#1022ac] rounded-md "
          >
            Book An {"\n"} Appointment
          </Link>
        </div>
        <div className="ml-3 pt-3">
          <div className="pb-3">
            <h1 className="text-black text-3xl pt-5 font-bold">
              {doctor.Name} {/* Display doctor's name */}
            </h1>
            <div className="address text-black text-right text-[12px]">
              {doctor.Qualification} {/* Display qualification */}
            </div>
          </div>
          <div className="flex justify-center">
            <span className="border-r-2 border-black pr-5">
              <div className="text-[#cccccc] text-[12.2px] text-center">
                Experience
              </div>
              <div className="text-[20.7] text-black font-thin">
                {doctor.Experience} Years {/* Display experience */}
              </div>
            </span>
            <span className="pl-5">
              <div className="text-[#cccccc] text-center text-[12.2px]">
                Fees
              </div>
              <div className="text-[20.7] text-black font-thin">
                &#8377; {doctor.ConsultancyFees} {/* Display fees */}
              </div>
            </span>
          </div>
          <div className="flex justify-center py-4">
            <div className="bg-[#fff6ea] text-black text-[13px] font-thin text-center rounded-md w-1/2">
              {doctor.HospitalName} {/* Display hospital name */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorCard;
