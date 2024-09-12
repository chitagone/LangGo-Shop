"use client";

import { Suspense } from "react";
import Container from "@/components/ui/container";
import useCart from "@/hook/use-cart-";
import CartItem from "./components/cart-items";
import Summary from "./components/summary";

const CartContent = () => {
  const cart = useCart();
  console.log(cart.items);

  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="mt-2 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {cart.items.length === 0 && (
              <p className="text-neutral-500">No Items added to the cart</p>
            )}
            <ul>
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  );
};

const CartPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartContent />
    </Suspense>
  );
};

export default CartPage;
