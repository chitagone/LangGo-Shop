"use client";
import { Product } from "@/types";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{data.name}</h1>
      <p className="text-2xl text-gray-900 mb-6">
        <Currency value={data?.price} />
      </p>
      <hr className="border-gray-300 mb-6" />
      <div className="flex flex-col gap-y-4 mb-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-gray-800">Size:</h3>
          <div className="text-gray-700">{data?.size.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-gray-800">Colors:</h3>
          <div
            className="h-6 w-6 rounded-full border-2 border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <Button className="flex items-center gap-x-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
        Add to Cart
        <ShoppingCart />
      </Button>
    </div>
  );
};

export default Info;
