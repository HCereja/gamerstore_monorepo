import { PaymentType } from "@gstore/core";

export interface SelectPaymentTypeProps {
  paymentType?: PaymentType;
  paymentTypeChanged?: (value: PaymentType) => void;
  className?: string;
}

const SelectPaymentType = (props: SelectPaymentTypeProps) => {
  function renderItem(label: string, type: PaymentType) {
    const selected = props.paymentType === type;
    return (
      <button
        className="flex items-center gap-3 bg-violet-dark rounded-lg h-12 px-7"
        onClick={() => props.paymentTypeChanged?.(type)}
      >
        <span
          className={`
                        ${selected ? "bg-emerald-500 border-emerald-500" : "bg-transparent border-white"}
                        w-5 h-5 border-2 rounded-full
                    `}
        ></span>
        <span>{label}</span>
      </button>
    );
  }

  return (
    <div className={`flex flex-col gap-3 ${props.className ?? ""}`}>
      <span className="px-7 pb-2 text-xl font-bold text-white/70">
        Forma de Pagamento
      </span>
      <div className="flex flex-col gap-3">
        {renderItem("Pagamento no PIX", PaymentType.PIX)}
        {renderItem("Boleto Bancário", PaymentType.CARD)}
      </div>
    </div>
  );
};

export default SelectPaymentType;
