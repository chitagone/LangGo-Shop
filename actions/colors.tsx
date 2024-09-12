import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`; //s Removed the extra space

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json(); // Corrected to call .json() as a function
};

export default getColors; // Corrected the export statement
