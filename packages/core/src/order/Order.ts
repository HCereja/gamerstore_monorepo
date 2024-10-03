import OrderDelivery from "./OrderDelivery";
import OrderItem from "./OrderItem";
import { PaymentType } from "./PaymentType";
import { Status } from "./Status";

export default interface Order {
  id: number;
  date: Date;
  items: OrderItem[];
  fullValue: number;
  status: Status;
  paymentType: PaymentType;
  delivery: OrderDelivery;
}
