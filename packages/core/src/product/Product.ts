import Priceable from "./Priceable";
import Specs from "./Specs";

export default interface Product extends Priceable {
  id: number;
  name: string;
  description: string;
  brand: string;
  model: string;
  image: string;
  rating: number;
  videoReview: string;
  tags: string[];
  specs: Specs;
}
