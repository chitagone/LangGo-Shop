"use client";
import Image from "next/image";
import { X } from "lucide-react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hook/use-cart-";
import { Product } from "@/types";

interface CartItemProp {
  data: Product;
}

const CartItem: React.FC<CartItemProp> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data?.images[0]?.url}
          alt={data?.name || "Image"}
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onclick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data?.name}</p>
          </div>
          <div className="mt-1 flex items-center text-sm">
            <div className=" flex justify-center">
              <div
                style={{ backgroundColor: data.color.value }}
                className="h-6 w-6 rounded-full border border-gray-300 mr-2"
              />
              <p className="text-gray-500">{data?.color?.name}</p>
            </div>

            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data?.size?.value}
            </p>
          </div>
          <div className="mt-2 text-green-400 font-mono">
            <Currency value={data?.price} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
