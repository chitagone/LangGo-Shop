import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`; // Removed the extra space

const getProducts = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.statusText}`);
  }

  return res.json(); // Corrected to call .json() as a function
};

export default getProducts; // Corrected the export statement
