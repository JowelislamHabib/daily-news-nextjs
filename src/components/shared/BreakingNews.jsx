import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { getCategoriesNews } from "@/lib/data";

const BreakingNews = async () => {
  const newsData = await getCategoriesNews("01");
  const newsItems = newsData?.data || [];

  return (
    <div className="flex items-center bg-zinc-900 text-white overflow-hidden shadow-lg border-y border-zinc-700">
      <div className="relative z-10 flex items-center px-6 py-3 bg-red-600 font-bold uppercase tracking-widest italic shrink-0">
        <span className="relative z-10">Breaking</span>
        <div className="absolute top-0 -right-4 h-full w-8 bg-red-600 skew-x-[-20deg] z-0"></div>
      </div>

      <Marquee gradient={false} speed={70} pauseOnHover={true} className="py-2">
        {newsItems.length > 0 ? (
          newsItems.map((item) => (
            <Link
              href={`/news/${item._id}`}
              key={item._id}
              className="flex items-center mx-8 group"
            >
              <span className="text-sm md:text-base font-medium group-hover:text-red-400 transition-colors cursor-pointer">
                {item.title}
              </span>
              <span className="ml-8 h-2 w-2 rounded-full bg-red-600"></span>
            </Link>
          ))
        ) : (
          <span className="mx-8 text-zinc-500">
            Loading Breaking News headlines...
          </span>
        )}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
