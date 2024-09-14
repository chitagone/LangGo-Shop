"use client";
import { ListFilter, Search } from "lucide-react";
import * as React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import getProducts from "@/actions/get-products";
import Image from "next/image";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const toggleDialog = () => {
    setOpen((prev) => !prev);
  };

  const router = useRouter();

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await getProducts({ isArchived: true });
        console.log("Fetched Products:", fetchedProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleItemClick = (productId: string) => {
    console.log("Clicked product ID:", productId);
    router.push(`/product/${productId}`);
    setOpen(false);
  };

  return (
    <>
      <div className="flex bg-gray-50 rounded-full overflow-hidden w-full mx-6 items-center h-12">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-l-full flex items-center space-x-2 flex-grow h-full"
          onClick={toggleDialog}
        >
          <div className="flex items-center space-x-2">
            <Search size={20} className="text-gray-600" />
            <span className="text-sm flex-grow">
              What are you looking for ?
            </span>
          </div>
        </button>

        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-r-full border-l border-gray-300 flex items-center space-x-2 h-full ">
          <ListFilter size={20} />
        </button>
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="p-4 bg-white rounded-lg  border-none shadow-none">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Search Products
            </h2>
          </div>
          <CommandInput
            placeholder="Type a command or search..."
            className="border rounded-lg p-2 w-full focus:ring-2 focus:ring-gray-400"
          />
          <CommandList className="mt-2">
            {loading ? (
              <CommandEmpty>Loading...</CommandEmpty>
            ) : error ? (
              <CommandEmpty>{error}</CommandEmpty>
            ) : products.length > 0 ? (
              <CommandGroup heading="Products">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleItemClick(product.id)}
                    className="cursor-pointer"
                  >
                    <CommandItem className="flex items-center space-x-4 hover:bg-gray-100 rounded-lg transition-colors duration-200 p-2">
                      <Image
                        src={product.images[0]?.url || "/default-image.png"}
                        alt={product.name}
                        width={48}
                        height={48}
                        className="object-cover rounded-full"
                      />
                      <span className="text-gray-800 font-medium">
                        {product.name}
                      </span>
                    </CommandItem>
                  </div>
                ))}
              </CommandGroup>
            ) : (
              <CommandEmpty>No products found.</CommandEmpty>
            )}
          </CommandList>
        </div>
      </CommandDialog>
    </>
  );
}
