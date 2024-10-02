import ProductList from "@/components/product/ProductList";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-5 py-10 container">
      <ProductList />
    </div>
  );
}
