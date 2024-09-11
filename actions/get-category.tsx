import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`; // Removed the extra space

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.statusText}`);
  }

  return res.json(); // Corrected to call .json() as a function
};

export default getCategory; // Corrected the export statement
