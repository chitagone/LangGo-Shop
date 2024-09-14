import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  isArchived?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  // Use qs.stringifyUrl to create the query string
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
      isArchived: query.isArchived,
    },
  });

  try {
    const res = await fetch(url);

    // Check if the response is okay
    if (!res.ok) {
      const text = await res.text(); // Read the response as text first
      try {
        const json = JSON.parse(text); // Try to parse it as JSON
        throw new Error(json.message || "Failed to fetch products.");
      } catch {
        // If it fails to parse as JSON, throw an error with the text
        throw new Error(`API Error: ${text}`);
      }
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    // Return an empty array or handle the error as needed
    return [];
  }
};

export default getProducts;
