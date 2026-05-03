import React from "react";
import Link from "next/link";
import {
  PiGlobeHemisphereWestDuotone,
  PiNewspaperClippingDuotone,
  PiPresentationChartDuotone,
  PiPaletteDuotone,
  PiTrophyDuotone,
  PiFilmSlateDuotone,
  PiGradientDuotone,
  PiCaretRightBold,
} from "react-icons/pi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { LuBadgeHelp } from "react-icons/lu";

const iconMap = {
  "regular news": <PiNewspaperClippingDuotone size={22} />,
  "international news": <PiGlobeHemisphereWestDuotone size={22} />,
  culture: <PiPresentationChartDuotone size={22} />,
  arts: <PiPaletteDuotone size={22} />,
  "breaking news": (
    <AiTwotoneThunderbolt size={22} className="text-yellow-500" />
  ),
  sports: <PiTrophyDuotone size={22} />,
  entertainment: <PiFilmSlateDuotone size={22} />,
  "all news": <PiGradientDuotone size={22} />,
};

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div className="bg-white p-2">
      <h2 className="text-xl font-bold mb-6 px-4 text-gray-900 border-l-4 border-red-900">
        All Categories
      </h2>

      <nav>
        <ul className="flex flex-col gap-1">
          {categories.map((category) => {
            const isActive = activeId === category.category_id;
            const categoryName = category.category_name.toLowerCase();

            return (
              <li key={category.category_id}>
                <Link
                  href={`/category/${category.category_id}`}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 group
                    ${
                      isActive
                        ? "bg-red-50 text-red-900 font-bold"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`${isActive ? "text-red-900" : "text-gray-400 group-hover:text-red-900"}`}
                    >
                      {iconMap[categoryName] || <LuBadgeHelp size={22} />}
                    </span>
                    <span className="text-lg tracking-tight">
                      {category.category_name}
                    </span>
                  </div>

                  <PiCaretRightBold
                    size={14}
                    className={`transition-transform ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-10 p-4 bg-gray-50 rounded-xl border border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
          Need Help?
        </p>
        <p className="text-sm text-gray-600 mb-3">
          Can't find a specific topic? Contact our editorial desk.
        </p>
        <button className="text-sm font-bold text-red-900 hover:underline flex items-center gap-1">
          Contact Us <PiCaretRightBold size={12} />
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
