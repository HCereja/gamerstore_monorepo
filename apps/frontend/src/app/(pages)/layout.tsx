import Page from "@/components/template/Page";
import { CartProvider } from "@/data/contexts/CartContext";
import { PaymentProvider } from "@/data/contexts/PaymentContext";
import { ProductProvider } from "@/data/contexts/ProductContext";

const Layout = (props: any) => {
  return (
    <ProductProvider>
      <CartProvider>
        <PaymentProvider>
          <Page>{props.children}</Page>
        </PaymentProvider>
      </CartProvider>
    </ProductProvider>
  );
};

export default Layout;
