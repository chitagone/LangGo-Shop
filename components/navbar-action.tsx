"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hook/use-cart-";
import { useRouter } from "next/navigation";
const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();
  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center relative">
      <Button
        className="relative flex items-center justify-center rounded-full bg-white border border-gray-300 p-3 shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out"
        onClick={() => router.push("/cart")}
      >
        <ShoppingCart size={24} color="black" className="text-gray-600" />
        {cart.items.length > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center absolute -top-1 -right-1 shadow-md">
            {cart.items.length}
          </span>
        )}
      </Button>
    </div>
  );
};

export default NavbarActions;
