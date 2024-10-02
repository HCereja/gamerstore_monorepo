import { Product } from "@gstore/core";
import Image from "next/image";
import Specs from "./Specs";

export interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return product ? (
    <div className="flex items-center bg-violet-dark rounded-xl p-5">
      <div className="flex-1 relative flex justify-center h-96">
        <Image
          src={product.image!}
          fill
          className="object-cover p-7"
          alt="Imagem do Produto"
        />
      </div>
      <Specs product={product!} />
    </div>
  ) : null;
};

export default ProductInfo;
