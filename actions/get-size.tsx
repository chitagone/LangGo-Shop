import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`; //s Removed the extra space

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.statusText}`);
  }

  return res.json(); // Corrected to call .json() as a function
};

export default getSizes; // Corrected the export statement
