import React from "react";
import { FaRegNewspaper, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const NoNews = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 p-8 text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
      <div className="bg-white p-6 rounded-full shadow-sm mb-6">
        <FaRegNewspaper className="text-6xl text-gray-300" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        No News Found in this Category
      </h2>

      <p className="text-gray-500 max-w-md mb-8">
        It looks like there aren't any articles available here right now. Try
        checking a different category or come back later for updates.
      </p>

      <Link
        href="/"
        className="btn bg-gray-900 text-white gap-2 normal-case px-8"
      >
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};

export default NoNews;
