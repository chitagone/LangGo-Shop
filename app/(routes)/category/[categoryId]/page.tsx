import getColors from "@/actions/colors";
import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-size";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "./components/mobile-filter";

export const revalidate = 0;

interface CateGoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
const CateGoryPage: React.FC<CateGoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();

  const color = await getColors();

  const catagory = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={catagory.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter sizes={sizes} colors={color} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={color} />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CateGoryPage;
