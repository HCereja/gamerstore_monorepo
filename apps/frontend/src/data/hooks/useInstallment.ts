import { CalculateInstallment } from "@gstore/core";

export default function useInstallment(value: number, quantity: number = 12) {
  const installment = new CalculateInstallment().execute(value, quantity);
  return installment;
}
