"use client";

import Link from "next/link";
import Image from "next/image";
import { Currency, Product } from "@gstore/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import ReviewRating from "../shared/ReviewRating";
import useCart from "@/data/hooks/useCart";

export interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addItem } = useCart();
  return (
    <Link
      href={`/produto/${product.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      {/* Nota do produto */}
      <div className="absolute flex justify-end top-2.5 right-2.5">
        <ReviewRating rating={product.rating} />
      </div>
      {/* Foto do produto */}
      <div className="w-full h-48 relative">
        <Image
          src={product.image}
          fill
          className="object-contain"
          alt="Imagem do produto"
        />
      </div>

      <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{product.name}</span>
        {/* Spec em destaque */}
        <div className="self-start text-sm border-b border-dashed">
          {product.specs.featured}
        </div>
        <div className="flex-1"></div>
        {/* Preço */}
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {Currency.format(product.basePrice)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {Currency.format(product.promotionalPrice)}
          </span>
          {/* <span className="text-zinc-400 text-xs">
                        até {parcelamento.qtdeParcelas}x de{' '}
                        {Moeda.formatar(parcelamento.valorParcela)}
                    </span> */}
        </div>
        {/* Adicionar no carrinho */}
        <button
          className="
                      flex justify-center items-center gap-2 h-8
                      bg-violet-700 hover:border-2 border-emerald-500 rounded-full
                    "
          onClick={(e) => {
            e.preventDefault();
            addItem(product);
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductItem;
