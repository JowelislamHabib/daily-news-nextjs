import React from "react";
import { format } from "date-fns";
import { getCategories, getCategoriesNews } from "@/lib/data";
import {
  PiCalendarDotsDuotone,
  PiHashDuotone,
  PiNewspaperClippingDuotone,
} from "react-icons/pi";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";

const RightSidebar = async () => {
  const categoriesData = await getCategories();
  const categories = categoriesData?.data?.news_category || [];

  const trendingData = await getCategoriesNews("01");
  const trendingNews = trendingData?.data?.slice(0, 4) || [];

  return (
    <aside className="w-full space-y-8">
      <div className="flex w-full justify-center items-center">
        <div className="bg-red-900 btn border-2 border-red-900 text-white pr-4 z-10 rounded-r-none">
          <PiCalendarDotsDuotone size={24} /> Date :
        </div>
        <button className="btn -ml-3 border-2 border-l-0 border-red-900 text-gray-900 bg-white rounded-l-none">
          {format(new Date(), "EEEE, MMM dd, yyyy")}
        </button>
      </div>

      {/* Categories Navigation */}
      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900 border-l-4 border-red-900 pl-3">
          Explore Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.category_id}
              href={`/category/${category.category_id}`}
              className="px-4 py-2 bg-gray-100 hover:bg-red-900 hover:text-white transition-all rounded-md text-sm font-medium flex items-center gap-1"
            >
              <PiHashDuotone /> {category.category_name}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-2 border-red-900 rounded-lg p-6 bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Login With</h2>
        <div className="flex flex-col gap-3">
          <button className="btn btn-outline border-blue-500 text-blue-500 hover:bg-blue-50 flex items-center justify-center gap-2">
            <FaGoogle size={20} /> Google
          </button>
          <button className="btn btn-outline border-gray-700 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
            <FaGithub size={20} /> Github
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
          <PiNewspaperClippingDuotone className="text-red-900" size={24} />
          Latest in Category
        </h2>
        <div className="space-y-5">
          {trendingNews.map((news) => (
            <Link
              href={`/news/${news._id}`}
              key={news._id}
              className="flex gap-3 group items-start"
            >
              <img
                src={news.thumbnail_url}
                alt={news.title}
                className="w-20 h-16 object-cover rounded shadow-sm"
              />
              <div className="flex flex-col">
                <p className="text-sm font-semibold leading-tight group-hover:text-red-900 transition-colors line-clamp-2">
                  {news.title}
                </p>
                <span className="text-[10px] text-gray-500 mt-1 uppercase font-bold">
                  {news.author?.name || "Anonymous"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-linear-to-br from-red-900 to-red-700 rounded-lg p-8 text-center text-white">
        <h3 className="text-2xl font-bold">Create an Amazing Newspaper</h3>
        <p className="text-sm mt-4 mb-6 opacity-90">
          Discover thousands of options, easy to customize layouts and elements.
        </p>
        <button className="bg-white text-red-900 px-6 py-2 rounded font-bold hover:bg-gray-100 transition-colors">
          Learn More
        </button>
      </div>
    </aside>
  );
};

export default RightSidebar;
