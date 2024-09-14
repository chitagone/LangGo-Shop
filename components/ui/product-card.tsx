"use client";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "./icon-button";
import { Expand, Heart, ShoppingCart, HeartCrack } from "lucide-react"; // Import filled heart icon
import Currency from "./currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hook/use-preview-modal";
import useCart from "@/hook/use-cart-";
import useLike from "@/hook/use-like";
import { truncateText } from "@/lib/text-format";
import { Product } from "@/types";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();
  const { likedItems, toggleLike } = useLike();

  const isLiked = likedItems.some((item) => item.id === data.id); // Check if item is liked

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  const onAddLike: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    toggleLike(data); // Toggle like status
  };

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 relative overflow-hidden"
      onClick={handleClick}
    >
      <div className="transition absolute bottom-1 right-1">
        <IconButton
          onclick={onAddToCart}
          icon={<ShoppingCart size={30} className="text-white" />}
          className="bg-orange-300"
        />
      </div>

      <div className="transition absolute -top-5 right-0">
        <IconButton
          onclick={onAddLike}
          icon={isLiked ? <Heart size={20} color="red" /> : <Heart size={20} />}
          className="bg-white rounded-md border-none shadow-none"
        />
      </div>

      {/* Images and Actions */}
      <div className="aspect-square rounded-xl bg-gray-200 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt={data?.name || "Image"}
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
