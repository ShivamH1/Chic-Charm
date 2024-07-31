import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

export const ProductContext = createContext();  

export default function Context({children}) {
  const [products, setProducts] = useState(null);

  const getProduct = async () => {
    try {
        const {data} = await axios('/products');
        setProducts(data);
    }catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
       {children} 
    </ProductContext.Provider>
  );
}
