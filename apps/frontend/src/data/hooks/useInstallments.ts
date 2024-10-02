import { CalculateInstallment } from "@/core";

const useInstallment = (value: number, quantity: number = 12) => {
  const installment = new CalculateInstallment().execute(value, quantity);
  return installment;
};

export default useInstallment;
