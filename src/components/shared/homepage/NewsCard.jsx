import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaRegStar,
  FaStar,
  FaRegEye,
  FaShareAlt,
  FaRegBookmark,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, _id, details, total_view, rating, image_url } = news;

  return (
    <div className="card bg-base-100 border border-gray-200 rounded-lg overflow-hidden mb-8">
      <div className="flex items-center justify-between bg-gray-50 px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src={author.img}
            alt="Reporter"
            height={10}
            width={10}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800 text-sm">
              {author.name || "Unknown Author"}
            </p>
            <p className="text-xs text-gray-500">
              {author.published_date?.split(" ")[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4">
        <h2 className="card-title text-xl font-bold mb-4 text-gray-800 leading-snug">
          {title}
        </h2>

        <figure className="mb-4">
          <Image
            src={image_url}
            alt={title}
            height={72}
            width={1200}
            className="w-full h-72 object-cover rounded-md"
          ></Image>
        </figure>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <Link
                href={`/news/${_id}`}
                className="text-red-900 font-semibold cursor-pointer ml-1"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        <hr className="my-4 border-gray-200" />

        {/* Footer: Rating and Views */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              {/* Simple rating display */}
              {[...Array(5)].map((_, i) =>
                i < Math.floor(rating.number) ? (
                  <FaStar key={i} />
                ) : (
                  <FaRegStar key={i} />
                ),
              )}
            </div>
            <span className="text-gray-600 font-medium">{rating?.number}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaRegEye className="text-lg" />
            <span className="font-medium">{total_view || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
