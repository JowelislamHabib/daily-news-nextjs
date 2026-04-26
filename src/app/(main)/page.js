import LeftSidebar from "@/components/shared/homepage/news/LeftSidebar";

const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    { cache: "no-store" },
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export default async function Home() {
  const categoryPromise = await getCategories();
  const categories = categoryPromise.data.news_category;

  return (
    <div className="container mx-auto px-4 grid grid-cols-12 gap-8 my-15">
      <div className="col-span-3">
        <LeftSidebar categories={categories} />
      </div>

      <div className="col-span-6">News Content</div>
      <div className="col-span-3">Socials</div>
    </div>
  );
}
