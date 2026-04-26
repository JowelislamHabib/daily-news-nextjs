export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    {
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const getCategoriesNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const getNewsDetails = async (news_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data = res.json();
  return data;
};
