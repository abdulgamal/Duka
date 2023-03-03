import ProductContext from "@/context/ProductContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ProductContext>
      <Component {...pageProps} />
    </ProductContext>
  );
}
