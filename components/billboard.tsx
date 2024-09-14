"use client";
import { Billboard as BillboardType } from "@/types";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface BillboardProp {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProp> = ({ data }) => {
  const router = useRouter();

  return (
    <div className="relative p-2 sm:p-4 lg:p-6 rounded-xl overflow-hidden transition-transform transform group h-48 sm:h-64 lg:h-80 mx-6 my-4">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl absolute inset-0 bg-cover bg-center transition-transform duration-500"
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center transition-opacity duration-300">
          <div className="text-white font-cursive text-xl sm:text-2xl lg:text-3xl p-2 sm:p-4 lg:p-6 shadow-lg max-w-xs sm:max-w-md">
            {data.label}
          </div>
          <div className="absolute bottom-5 right-3">
            <Button
              variant="secondary"
              className="bg-gradient-to-r from-orange-300 to-red-400 text-white rounded-full px-6 py-3 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 shadow-lg"
            >
              <p className="font-cursive2 text-lg">Order Now!</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
