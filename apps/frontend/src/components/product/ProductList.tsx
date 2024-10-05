"use client";
import { products } from "@gstore/core";
import useProducts from "@/data/hooks/useProducts";
import ProductItem from "./ProductItem";
import ProductNotFound from "./ProductNotFound";

const ProductList = () => {
  const { products } = useProducts();
  return products.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product, key) => (
        <ProductItem key={key} product={product} />
      ))}
    </div>
  ) : (
    <ProductNotFound noReturnButton />
  );
};

export default ProductList;
