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
  PiRightArrowDuotone,
} from "react-icons/pi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { LuBadgeHelp } from "react-icons/lu";

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900">Categories</h2>
      <ul className="flex flex-col gap-5">
        {categories.map((category) => {
          const name = category.category_name.toLowerCase();

          return (
            <li
              key={category.category_id}
              className={`${activeId === category.category_id && "font-bold text-red-900 bg-white p-2 rounded-lg"}`}
            >
              <Link
                href={`/category/${category.category_id}`}
                className="flex items-center gap-4 text-xl transition-all"
              >
                {name === "regular news" ? (
                  <PiNewspaperClippingDuotone size={24} />
                ) : name === "international news" ? (
                  <PiGlobeHemisphereWestDuotone size={24} />
                ) : name === "culture" ? (
                  <PiPresentationChartDuotone size={24} />
                ) : name === "arts" ? (
                  <PiPaletteDuotone size={24} />
                ) : name === "breaking news" ? (
                  <AiTwotoneThunderbolt size={24} fill="currentColor" />
                ) : name === "sports" ? (
                  <PiTrophyDuotone size={24} />
                ) : name === "entertainment" ? (
                  <PiFilmSlateDuotone size={24} />
                ) : name === "all news" ? (
                  <PiGradientDuotone size={24} />
                ) : (
                  <LuBadgeHelp size={24} />
                )}

                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
