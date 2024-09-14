"use client";

import { Suspense } from "react";
import Container from "@/components/ui/container";
import useLike from "@/hook/use-like";
import LikeItem from "./components/like-card";

const FavoriteContent = () => {
  const { likedItems } = useLike();

  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Favorite Products</h1>
        <div className="mt-2 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {likedItems.length === 0 ? (
              <p className="text-neutral-500">No items you liked</p>
            ) : (
              <ul>
                {likedItems.map((item) => (
                  <LikeItem key={item.id} data={item} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const FavoritePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FavoriteContent />
    </Suspense>
  );
};

export default FavoritePage;
