"use client";

import { Suspense } from "react";
import Container from "@/components/ui/container";
import useLike from "@/hook/use-like";

import ProductList from "@/components/products-list";

const FavoriteContent = () => {
  const { likedItems } = useLike();

  return (
    <Container>
      <div className="space-y-10 pb-10 pt-6">
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Your Favorit Products" items={likedItems} />
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
