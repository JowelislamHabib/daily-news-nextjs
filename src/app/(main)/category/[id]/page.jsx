import LeftSidebar from "@/components/shared/homepage/news/LeftSidebar";
import NoNews from "@/components/shared/homepage/news/NoNews";
import RightSIdebar from "@/components/shared/homepage/news/RightSIdebar";
import NewsCard from "@/components/shared/homepage/NewsCard";
import { getCategories, getCategoriesNews } from "@/lib/data";
import React from "react";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const categoryPromise = await getCategories();
  const categories = categoryPromise.data.news_category;

  const news = await getCategoriesNews(id);
  console.log(news);

  return (
    <div className="container mx-auto px-4 grid grid-cols-12 gap-8 my-15">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className="col-span-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          News By Categories
        </h2>

        <div className="space-y-4">
          {news.data.length > 0 ? (
            news.data.map((n) => {
              return <NewsCard key={n._id} news={n}></NewsCard>;
            })
          ) : (
            <NoNews />
          )}
        </div>
      </div>
      <div className="col-span-3">
        <div>
          <RightSIdebar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
