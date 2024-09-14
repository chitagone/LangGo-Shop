import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/products-list";
import Container from "@/components/ui/container";
import { SearchBar } from "@/components/ui/search-bar";

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("31c6f6e9-71d6-49c7-b5f9-4cf1bfc380c5");
  return (
    <Container>
      <div className="flex-grow flex justify-center">
        <SearchBar />
      </div>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured" items={products} />
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
