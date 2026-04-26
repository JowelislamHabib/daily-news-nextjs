import React from "react";
import {
  LucideZap,
  LucideTrophy,
  LucideFilm,
  LucideCircleHelp,
  LucideGlobe,
  LucideNewspaper,
  LucidePresentation,
  LucidePalette,
  LucideRss,
} from "lucide-react";
import Link from "next/link";

const LeftSidebar = ({ categories }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-amber-900">Categories</h2>
      <ul className="flex flex-col gap-5">
        {categories.map((category) => {
          const name = category.category_name.toLowerCase();
          const isBreaking = name === "breaking news";

          return (
            <li key={category.category_id}>
              <Link
                href={`/category/${category.category_id}`}
                className={`flex items-center gap-4 text-xl transition-all ${
                  isBreaking ? "text-red-900 font-bold" : "text-gray-800"
                } hover:text-red-900`}
              >
                {name === "regular news" ? (
                  <LucideNewspaper size={24} />
                ) : name === "international news" ? (
                  <LucideGlobe size={24} />
                ) : name === "culture" ? (
                  <LucidePresentation size={24} />
                ) : name === "arts" ? (
                  <LucidePalette size={24} />
                ) : name === "breaking news" ? (
                  <LucideZap size={24} fill="currentColor" />
                ) : name === "sports" ? (
                  <LucideTrophy size={24} />
                ) : name === "entertainment" ? (
                  <LucideFilm size={24} />
                ) : name === "all news" ? (
                  <LucideRss size={24} />
                ) : (
                  <LucideCircleHelp size={24} />
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
