"use client";
import Image from "next/image";
import { Product } from "@/types";
import React, { MouseEventHandler } from "react";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hook/use-preview-modal";
import useCart from "@/hook/use-cart-";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };
  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      {/*Images and Action */}
      <div className="aspect-square rounded-xl bg-gray-200 relative ">
        <Image
          src={data?.images?.[0]?.url}
          alt="Iamge"
          fill
          className="aspect-square object-cover rounded-s-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onclick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onclick={onAddtoCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/*Description */}
      <div>
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>

      {/**Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
