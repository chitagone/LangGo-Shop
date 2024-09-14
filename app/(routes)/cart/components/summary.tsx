"use client";
import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";

import useCart from "@/hook/use-cart-";
import toast from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckOut = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );
      window.location.href = response.data.url; // Make sure the URL is correct
    } catch (error) {
      toast.error("Checkout failed. Please try again.");
      console.error("Checkout error:", error); // Log the error for debugging
    }
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-x-4">
        <div className="flex items-center justify-between border-t border-x-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        className="w-full mt-6 bg-orange-400 text-white font-bold"
        onClick={onCheckOut}
      >
        Check Out
      </Button>
    </div>
  );
};

export default Summary;
