import React from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaEye,
  FaShareAlt,
  FaRegBookmark,
  FaStar,
} from "react-icons/fa";
import { getCategoriesNews, getNewsDetails } from "@/lib/data";
import Image from "next/image";
import { format } from "date-fns";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetails(id);
  const newsItem = news?.data?.[0];

  return {
    title: newsItem?.title || "News Details",
    description:
      newsItem?.details?.substring(0, 160) || "Read the latest news updates.",
  };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const singleNews = await getNewsDetails(id);

  if (!singleNews?.data?.[0])
    return <div className="text-center py-20">News not found</div>;

  const newsDetails = singleNews.data[0];
  const { title, image_url, details, author, rating, total_view, category_id } =
    newsDetails;

  // Fetch related news for the sidebar dynamically
  const relatedNewsData = await getCategoriesNews(category_id);
  const relatedNews = relatedNewsData?.data?.slice(0, 5) || [];

  return (
    <main className="min-h-screen bg-[#F9F9F9] pb-20">
      {/* 1. Improved Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 pt-8 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 uppercase font-bold tracking-wider">
          <Link href="/" className="hover:text-red-900 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href={`/category/${category_id}`}
            className="hover:text-red-900 transition-colors"
          >
            Category Feed
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 grid grid-cols-12 gap-10">
        {/* Main Article Content */}
        <article className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Main Feature Image */}
            <div className="relative h-100 md:h-125 w-full">
              <Image
                src={image_url}
                alt={title}
                height={120}
                width={1200}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-14">
              {/* Headline */}
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-8">
                {title}
              </h1>

              {/* Author & Stats Bar */}
              <div className="flex flex-wrap items-center justify-between gap-6 py-6 mb-10 border-y border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={author.img}
                      alt={author.name}
                      fill
                      className="rounded-full object-cover grayscale-[20%]"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 hover:text-red-900 cursor-pointer transition-colors">
                      {author.name || "Staff Writer"}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                      {author.published_date
                        ? format(
                            new Date(author.published_date),
                            "MMM dd, yyyy",
                          )
                        : "Recent"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-1.5 text-yellow-500">
                    <FaStar size={14} />{" "}
                    <span className="font-bold text-gray-700">
                      {rating?.number}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaEye />{" "}
                    <span className="font-medium">{total_view || 0}</span>
                  </div>
                  <div className="flex gap-4 border-l pl-6 border-gray-200">
                    <FaRegBookmark className="cursor-pointer hover:text-red-900 transition-colors" />
                    <FaShareAlt className="cursor-pointer hover:text-red-900 transition-colors" />
                  </div>
                </div>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif">
                {/* Custom styling for drop-cap and whitespace */}
                <div
                  className="whitespace-pre-line text-lg md:text-xl selection:bg-red-100 
                  first-letter:text-7xl first-letter:font-bold first-letter:text-red-900 
                  first-letter:mr-3 first-letter:float-left first-letter:mt-2"
                >
                  {details}
                </div>
              </div>

              {/* Article Footer Tags */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex gap-2">
                <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded">
                  #Journalism
                </span>
                <span className="text-xs font-bold bg-gray-100 px-3 py-1 rounded">
                  #BreakingNews
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-4 space-y-10">
          <section>
            <h3 className="text-xl font-bold border-l-4 border-red-900 pl-3 mb-6">
              More from this Category
            </h3>
            <div className="space-y-6">
              {relatedNews
                .filter((item) => item._id !== id)
                .map((news) => (
                  <Link
                    href={`/news/${news._id}`}
                    key={news._id}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <div className="w-24 h-20 relative shrink-0 overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={news.thumbnail_url}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-bold text-sm leading-snug line-clamp-2 group-hover:text-red-900 transition-colors font-serif">
                        {news.title}
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-2 font-bold">
                        {news.author?.published_date?.split(" ")[0] || "Today"}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>

          {/* Consistent Newsletter - Matches Right Sidebar style */}
          <div className="bg-gray-900 text-white p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-900/20 rounded-full -mr-12 -mt-12"></div>
            <h3 className="text-2xl font-bold mb-2 relative z-10">
              Weekly Briefing
            </h3>
            <p className="text-sm opacity-70 mb-6 relative z-10">
              Get the best of our journalism delivered to your inbox every
              Friday.
            </p>
            <div className="space-y-3 relative z-10">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-900 text-white"
              />
              <button className="w-full bg-red-900 hover:bg-red-800 py-3 rounded-lg font-bold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default NewsDetailsPage;
