import React from "react";
import { format } from "date-fns";
import { getCategories, getCategoriesNews } from "@/lib/data";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import Link from "next/link";

const RightSidebar = async () => {
  const categoriesData = await getCategories();
  const categories = categoriesData?.data?.news_category || [];

  const trendingData = await getCategoriesNews("01");
  const trendingNews = trendingData?.data?.slice(0, 4) || [];

  return (
    <aside className="w-full space-y-10">
      <div className="border-b-2 border-gray-100 pb-4">
        <div className="flex items-center gap-2 text-red-900 mb-1">
          <PiCalendarDotsDuotone size={20} />
          <span className="text-xs font-bold uppercase tracking-widest">
            Today's Edition
          </span>
        </div>
        <p className="text-xl font-serif font-bold text-gray-900">
          {format(new Date(), "EEEE, MMM dd, yyyy")}
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5 flex items-center gap-2 text-gray-900 border-l-4 border-red-900 pl-3">
          Explore Topics
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category.category_id}
              href={`/category/${category.category_id}`}
              className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:bg-red-900 hover:text-white transition-all rounded text-xs font-bold uppercase tracking-tight"
            >
              # {category.category_name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-5 flex items-center gap-2 text-gray-900 border-l-4 border-red-900 pl-3">
          Top Headlines
        </h2>
        <div className="space-y-6">
          {trendingNews.map((news) => (
            <Link
              href={`/news/${news._id}`}
              key={news._id}
              className="flex gap-4 group items-start"
            >
              <div className="relative shrink-0">
                <img
                  src={news.thumbnail_url}
                  alt={news.title}
                  className="w-20 h-20 object-cover rounded-md shadow-sm grayscale-[30%] group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[15px] font-bold leading-snug group-hover:text-red-900 transition-colors line-clamp-3 italic font-serif">
                  "{news.title}"
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-4 h-[1px] bg-red-900"></span>
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">
                    {news.author?.name || "Staff Reporter"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden bg-gray-900 rounded-xl p-8 text-center group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/20 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
        <h3 className="text-xl font-bold text-white relative z-10">
          Weekly Insights
        </h3>
        <p className="text-xs mt-3 mb-6 text-gray-400 relative z-10 leading-relaxed">
          Get our premium newsletter and stay ahead of the curve with exclusive
          tech analysis.
        </p>
        <button className="w-full bg-red-900 text-white py-3 rounded-lg font-bold text-sm hover:bg-red-800 transition-colors relative z-10">
          Subscribe Now
        </button>
      </div>
    </aside>
  );
};

export default RightSidebar;
