import React from "react";
import { format } from "date-fns";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <>
      <div>
        <div className="flex w-full justify-center items-center">
          <div className="bg-red-900 btn border-2 border-red-900 text-white pr-4 z-10">
            <PiCalendarDotsDuotone size={24} /> Date :
          </div>
          <button className="btn -ml-3 border-2 border-l-0  border-red-900 text-gray-900">
            {format(new Date(), "EEEE, MMM dd, yyyy")}
          </button>
        </div>
        <div className="border-2 border-red-900 rounded-sm text-center my-10 p-5">
          <div className="">
            <h2 className="text-2xl font-semibold m-2 text-gray-900">
              Login With
            </h2>
            <div className="flex flex-col gap-2">
              <button className="btn border-blue-500 text-blue-500">
                <FaGoogle size={24} /> Login With Google
              </button>
              <button className="btn border-gray-700 text-gray-700">
                <FaGithub size={24} /> Login With Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
