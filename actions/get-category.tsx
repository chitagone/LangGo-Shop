import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`; // Removed the extra space

const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json(); // Corrected to call .json() as a function
};

export default getCategory; // Corrected the export statement
