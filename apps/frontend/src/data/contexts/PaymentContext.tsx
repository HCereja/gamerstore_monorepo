"use client";
import {
  OrderItem,
  Order,
  OrderDelivery,
  Status,
  PaymentType,
  CartItem,
} from "@gstore/core";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";
import useCart from "../hooks/useCart";
import useApi from "../hooks/useApi";

export interface PaymentContextProps {
  paymentType: PaymentType;
  delivery: Partial<OrderDelivery>;
  changePaymentType: (paymentType: PaymentType) => void;
  changeDelivery: (delivery: Partial<OrderDelivery>) => void;
  finalizeOrder: () => void;
}

const PaymentContext = createContext<PaymentContextProps>({} as any);

export const PaymentProvider = (props: any) => {
  const { httpPost } = useApi();
  const { items, totalPrice, clearCart } = useCart();
  const { saveItem, getItem } = useLocalStorage();
  const router = useRouter();

  const [paymentType, setPaymentType] = useState<PaymentType>(PaymentType.PIX);
  const [delivery, setDelivery] = useState<Partial<OrderDelivery>>({});

  const changePaymentType = (paymentType: PaymentType) => {
    saveItem("formaPagamento", paymentType);
    setPaymentType(paymentType);
  };

  const changeDelivery = (delivery: Partial<OrderDelivery>) => {
    saveItem("entrega", delivery);
    setDelivery(delivery);
  };

  const finalizeOrder = async () => {
    const order: Partial<Order> = {
      date: new Date(),
      paymentType: paymentType,
      fullValue: totalPrice,
      delivery: delivery as OrderDelivery,
      status: Status.RECIEVED,
      items: items.map(
        (item: CartItem) =>
          ({
            product: item.product,
            quantity: item.quantity,
            unityPrice: item.product.promotionalPrice,
          }) as OrderItem
      ),
    };

    await httpPost("/pedido", order);
    clearCart();
    router.push("/checkout/sucesso");
  };

  useEffect(() => {
    const delivery = getItem("entrega");
    const paymentType = getItem("formaPagamento");
    if (delivery) setDelivery(delivery);
    if (paymentType) setPaymentType(paymentType);
  }, [getItem]);

  return (
    <PaymentContext.Provider
      value={{
        delivery: delivery,
        paymentType: paymentType,
        changeDelivery,
        changePaymentType,
        finalizeOrder,
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
};

export default PaymentContext;
