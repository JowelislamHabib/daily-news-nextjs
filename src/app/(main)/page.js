import { redirect } from "next/navigation";

const defaultCatId = "01";
export default async function Home() {
  redirect(`/category/${defaultCatId}`);
}
