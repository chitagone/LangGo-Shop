"use client";
import Image from "next/image";
import { Product } from "@/types";
import React, { MouseEventHandler } from "react";
import IconButton from "./icon-button";
import { Expand, Heart, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hook/use-preview-modal";
import useCart from "@/hook/use-cart-";
import { truncateText } from "@/lib/text-format";

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
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative overflow-hidden"
      onClick={handleClick}
    >
      <div className="transition absolute bottom-1 right-1 ">
        <IconButton
          onclick={onAddtoCart}
          icon={<ShoppingCart size={30} className="text-white" />}
          className="bg-orange-300"
        />
      </div>

      <div className="transition absolute -top-5 right-0 ">
        <IconButton
          onclick={onAddtoCart}
          icon={<Heart size={20} className="text-red-500" />}
          className="bg-white rounded-md border-none shadow-none"
        />
      </div>
      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-200 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="transition absolute top-1 left-2">
          <IconButton
            onclick={onPreview}
            icon={<Expand size={15} className="text-gray-600" />}
          />
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="text-sm text-gray-500">
          {truncateText(data?.details || "", 25)}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center justify-between font-bold">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
