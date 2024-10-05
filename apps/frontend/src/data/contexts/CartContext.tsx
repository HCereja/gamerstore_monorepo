"use client";
import {
  CalculateInstallment,
  Cart,
  CartItem,
  Installment,
  Product,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface CartContextProps {
  items: CartItem[];
  itemQuantity: number;
  fullTotalPrice: number;
  totalPrice: number;
  intallment: Installment;
  addItem: (product: Product) => void;
  removeItem: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({} as any);

export const CartProvider = (props: any) => {
  const { saveItem, getItem } = useLocalStorage();
  const [cart, setCart] = useState<Cart>(new Cart());

  const addItem = (product: Product) => {
    changeCart(cart.addItem(product));
  };

  const removeItem = (product: Product) => {
    changeCart(cart.removeItem(product));
  };

  const removeProduct = (product: Product) => {
    changeCart(cart.removeProduct(product));
  };

  const clearCart = () => {
    changeCart(cart.clear());
  };

  const changeCart = (cart: Cart) => {
    saveItem("carrinho", cart.items);
    setCart(cart);
  };

  useEffect(() => {
    const savedItems: CartItem[] = getItem("carrinho");
    if (savedItems) setCart(new Cart(savedItems));
  }, [getItem]);

  return (
    <CartContext.Provider
      value={{
        items: cart.items,
        itemQuantity: cart.quantityItems,
        totalPrice: cart.totalValue,
        fullTotalPrice: cart.fullTotalValue,
        intallment: new CalculateInstallment().execute(cart.totalValue),
        addItem,
        removeItem,
        removeProduct,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
