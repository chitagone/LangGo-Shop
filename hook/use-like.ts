import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";
import { Product } from "@/types";

interface LikeStore {
  likedItems: Product[];
  toggleLike: (data: Product) => void;
}

const useLike = create(
  persist<LikeStore>(
    (set, get) => ({
      likedItems: [],
      toggleLike: (data: Product) => {
        const currentLikes = get().likedItems;
        const isLiked = currentLikes.some((item) => item.id === data.id);

        if (isLiked) {
          set({
            likedItems: currentLikes.filter((item) => item.id !== data.id),
          });
          toast.success("Item removed from likes.");
        } else {
          set({ likedItems: [...currentLikes, data] });
          toast.success("Item added to likes.");
        }
      },
    }),
    {
      name: "like-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLike;
