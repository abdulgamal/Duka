import React, { createContext, useState } from "react";
export const AppContext = createContext();

function ProductContext({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchByCategory = (cat) => {
    fetch(`https://dummyjson.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((responseData) => {
        setProducts(responseData.products);
      });
  };
  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((responseData) => {
        setProducts(responseData.products);
      });
  };

  const toggleModal = () => setOpen(!open);

  const addProductToCart = (prod) => {
    const existingProduct = cart.findIndex((product) => product.id === prod.id);
    if (existingProduct === -1) {
      let newProduct = { ...prod, qty: 1 };
      setCart((prevProduct) => [...prevProduct, newProduct]);
    } else {
      const products = cart.map((product) =>
        product.id === prod.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart(products);
    }
  };

  const removeProductFromCart = (prod) => {
    const existingProduct = cart.findIndex((product) => product.id === prod.id);
    let product = cart[existingProduct];
    if (product?.qty > 1) {
      const products = cart.map((product) =>
        product.id === prod.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCart(products);
    } else {
      const products = cart.filter((product) => product.id !== prod.id);
      setCart(products);
    }
  };

  return (
    <AppContext.Provider
      value={{
        products,
        fetchByCategory,
        getProducts,
        addProductToCart,
        cart,
        open,
        toggleModal,
        removeProductFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ProductContext;
