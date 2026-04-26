export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const getCategoriesNews = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};
