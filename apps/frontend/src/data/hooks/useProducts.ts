import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

const useProducts = () => useContext(ProductContext);
export default useProducts;
