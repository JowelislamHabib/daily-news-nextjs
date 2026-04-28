import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const newsItems = [
    { _id: "n1", title: "🚀 Space-X successfully lands Mars rover prototype." },
    {
      _id: "n2",
      title: "📈 Tech stocks hit all-time high amid AI breakthrough.",
    },
    {
      _id: "n3",
      title: "🌍 Global summit reaches historic climate agreement.",
    },
    {
      _id: "n4",
      title: "🍎 New health study reveals the benefits of 5-minute walks.",
    },
  ];

  return (
    <div className="flex items-center bg-zinc-900 text-white overflow-hidden shadow-lg border-y border-zinc-700">
      <div className="relative z-10 flex items-center px-6 py-3 bg-red-600 font-bold uppercase tracking-widest italic">
        <span className="relative z-10">Breaking</span>
        <div className="absolute top-0 -right-4 h-full w-8 bg-red-600 skew-x-[-20deg] z-0"></div>
      </div>

      <Marquee gradient={false} speed={60} pauseOnHover={true} className="py-2">
        {newsItems.map((item) => (
          <div key={item._id} className="flex items-center mx-8">
            <span className="text-sm md:text-base font-medium hover:text-red-400 transition-colors cursor-pointer">
              {item.title}
            </span>
            <span className="ml-8 h-2 w-2 rounded-full bg-red-600"></span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
