import React from "react";
import Link from "next/link";
import { FaArrowLeft, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { getNewsDetails } from "@/lib/data";
import Image from "next/image";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const singleNews = await getNewsDetails(id);
  const newsDetails = singleNews.data[0];
  const { title, image_url, details, author, rating, total_view, category_id } =
    newsDetails;

  return (
    <main className="min-h-screen bg-[#F3F3F3] pb-20">
      <div className="container mx-auto px-4 pt-8 mb-6">
        <Link
          href={`/category/${category_id}`}
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors font-medium"
        >
          <FaArrowLeft size={14} /> Back to Feed
        </Link>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-12 gap-10">
        <article className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-100 md:h-125 w-full">
              <Image
                src={image_url}
                alt={title}
                height={120}
                width={1200}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="badge badge-error text-white font-bold px-4 py-3">
                  LATEST NEWS
                </span>
              </div>
            </div>

            <div className="p-6 md:p-12">
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-6">
                {title}
              </h1>

              <div className="flex flex-wrap items-center justify-between gap-4 py-6 mb-8 border-y border-gray-100">
                <div className="flex items-center gap-3">
                  <Image
                    src={author.img}
                    alt={author.name}
                    className="w-12 h-12 rounded-full ring-2 ring-gray-100"
                    height={150}
                    width={150}
                  />
                  <div>
                    <p className="font-bold text-gray-900">{author.name}</p>
                    <p className="text-sm text-gray-500">
                      {author.published_date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaEye /> <span>{total_view}</span>
                  </div>
                  <FaRegBookmark className="cursor-pointer hover:text-primary" />
                  <FaShareAlt className="cursor-pointer hover:text-primary" />
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left">
                <p className="whitespace-pre-line">{details}</p>
              </div>
            </div>
          </div>
        </article>

        <aside className="col-span-12 lg:col-span-4 space-y-8">
          <section>
            <h3 className="text-xl font-bold border-l-4 border-red-600 pl-3 mb-6">
              Trending Now
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="w-24 h-20 bg-gray-200 rounded-lg shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gray-300 group-hover:scale-110 transition-transform">
                      <Image
                        src={image_url}
                        alt={title}
                        height={50}
                        width={150}
                        className="w-full h-full bg-gray-300 group-hover:scale-110 transition-transform"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm line-clamp-2 group-hover:text-red-600 transition-colors">
                      The impact of global policy changes on local markets in
                      2026
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">Apr 26, 2026</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-neutral text-neutral-content p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Weekly Briefing</h3>
            <p className="text-sm opacity-80 mb-6">
              Get the best of our journalism delivered to your inbox.
            </p>
            <input
              type="text"
              placeholder="Email Address"
              className="input input-bordered w-full mb-4 text-black"
            />
            <button className="btn btn-primary w-full">Subscribe</button>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default NewsDetailsPage;
