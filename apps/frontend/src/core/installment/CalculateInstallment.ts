import { MAX_INSTALLMENTS, MONTHLY_INTEREST } from "../constants";
import Installment from "./Installment";

export default class CalculateInstallment {
  execute(
    value: number,
    numberInstallments: number = MAX_INSTALLMENTS,
    interest: number = MONTHLY_INTEREST
  ): Installment {
    if (numberInstallments < 2 || numberInstallments > MAX_INSTALLMENTS) {
      throw new Error(
        `Quantidade de parcelas deve ser maior que 2 e menor que ${MAX_INSTALLMENTS}`
      );
    }

    const totalWithInterest = this.calculateInterest(
      value,
      interest,
      numberInstallments
    );

    return {
      installmentPrice: this.withTwoDecimals(
        totalWithInterest / numberInstallments
      ),
      fullPrice: this.withTwoDecimals(totalWithInterest),
      installmentsNumber: numberInstallments,
      interest: interest,
    };
  }

  private calculateInterest(
    totalValue: number,
    interest: number,
    numberInstallments: number
  ) {
    return totalValue * Math.pow(1 + interest, numberInstallments);
  }

  private withTwoDecimals(value: number) {
    return Math.round(value * 100) / 100;
  }
}
