"use client";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import CartItem from "@/components/checkout/cart/CartItem";
import EmptyCart from "@/components/checkout/cart/EmptyCart";
import CartTotal from "@/components/checkout/cart/CartTotal";
import useCart from "@/data/hooks/useCart";

const CartPage = () => {
  const {
    items,
    itemQuantity,
    totalPrice,
    addItem,
    removeItem,
    removeProduct,
  } = useCart();

  return (
    <div className="flex flex-col gap-5 container">
      <CheckoutHeader step="carrinho" />
      <div className="flex flex-col gap-4">
        {items.length === 0 && <EmptyCart />}
        {items.map((item: any) => (
          <CartItem
            key={item.product.id}
            item={item}
            addItem={() => addItem(item.product)}
            removeItem={() => removeItem(item.product)}
            removeProduct={() => removeProduct(item.product)}
          />
        ))}
      </div>
      <CartTotal itemQuantity={itemQuantity} totalValue={totalPrice} />
    </div>
  );
};

export default CartPage;
