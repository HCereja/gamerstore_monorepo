import BuyingBanner from "@/components/product/BuyingBanner";
import PriceTracker from "@/components/product/PriceTracker";
import ProductInfo from "@/components/product/ProductInfo";
import ProductNotFound from "@/components/product/ProductNotFound";
import ProductTitle from "@/components/product/ProductTitle";
import SpecialistRating from "@/components/product/SpecialistRating";
import UserRating from "@/components/product/UserRating";
import { products } from "@gstore/core";

const ProductPage = (props: any) => {
  const id = +props.params.id;
  const product = products.find((prod) => prod.id === id);

  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInfo product={product} />
        <BuyingBanner product={product} />
        <PriceTracker product={product} />
        <UserRating product={product} />
        <SpecialistRating product={product} />
      </div>
    </div>
  ) : (
    <ProductNotFound />
  );
};

export default ProductPage;
