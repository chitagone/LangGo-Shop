import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array if there is an error
  }
};

export default getAllProducts;
