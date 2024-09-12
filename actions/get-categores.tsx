import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`; // Removed the extra space

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json(); // Corrected to call .json() as a function
};

export default getCategories; // Corrected the export statement
