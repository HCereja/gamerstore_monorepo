import { Product } from "../product";

export default interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
  unityPrice: number;
}
