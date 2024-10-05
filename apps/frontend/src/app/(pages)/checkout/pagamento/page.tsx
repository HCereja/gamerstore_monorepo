"use client";

import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import DeliveryForm from "@/components/checkout/payment/DeliveryForm";
import PaymentSummary from "@/components/checkout/payment/PaymentSummary";
import SelectPaymentType from "@/components/checkout/payment/SelectPayentType";
import useCart from "@/data/hooks/useCart";
import usePayment from "@/data/hooks/usePayment";

const PaymentPage = () => {
  const { intallment, itemQuantity, totalPrice, fullTotalPrice } = useCart();
  const {
    delivery,
    paymentType,
    changeDelivery,
    changePaymentType,
    finalizeOrder,
  } = usePayment();

  return (
    <div className="flex flex-col gap-7 container">
      <CheckoutHeader step="pagamento" />
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <SelectPaymentType
            paymentType={paymentType}
            paymentTypeChanged={changePaymentType}
          />
          <DeliveryForm delivery={delivery} deliveryChanged={changeDelivery} />
        </div>
        <PaymentSummary
          itemQuantity={itemQuantity}
          totalPrice={totalPrice}
          fullTotalPrice={fullTotalPrice}
          installment={intallment}
          finalizeOrder={finalizeOrder}
          className="mt-12"
        />
      </div>
    </div>
  );
};

export default PaymentPage;
