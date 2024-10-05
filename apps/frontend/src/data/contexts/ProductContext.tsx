"use client";
import { createContext, useCallback, useEffect, useState } from "react";
import { Product, FilterProducts } from "@gstore/core";
import useApi from "../hooks/useApi";

export interface ProductContextProps {
  products: Product[];
  search: string;
  setSearch: (search: string) => void;
  productById: (id: number) => Product | null;
}

const ProductContext = createContext<ProductContextProps>({} as any);

export function ProductProvider(props: any) {
  const { httpGet } = useApi();
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);

  const loadProducts = useCallback(async () => {
    const products = await httpGet("/product");
    setProducts(products ?? []);
  }, [httpGet]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <ProductContext.Provider
      value={{
        search: search,
        get products() {
          if (!search) return products;
          return new FilterProducts().execute(search, products);
        },
        setSearch: setSearch,
        productById: (id: number) =>
          products.find((product) => product.id === id) ?? null,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
