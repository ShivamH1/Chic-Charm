// This file exports a React component called Context. This component is a
// context provider that wraps its children and provides a product context.

// Importing necessary dependencies from React and axios
import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";

// Creating a new context using React's createContext function. This context
// will hold the product data and the function to update the product data.
export const ProductContext = createContext();  

// Defining a functional component called Context. This component is a context
// provider that wraps its children and provides a product context.
export default function Context({children}) {
  // Defining a state variable called products using the useState hook. This
  // variable will hold the product data retrieved from local storage. If there
  // is no data in local storage, the variable will be initialized to null.
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem('products')) || null
  );

  // Defining an async function called getProduct. This function is responsible
  // for fetching the product data from the server and updating the products
  // state variable.
  const getProduct = async () => {
    try {
      // Making a GET request to /products using axios.
      const {data} = await axios('/products');

      // Updating the products state variable with the data received from the
      // server.
      setProducts(data);
    } catch (err) {
      // Logging any error that occurs during the request.
      console.log(err);
    }
  }

  // Defining a useEffect hook. This hook runs the getProduct function
  // whenever the component mounts.
  useEffect(() => {
    getProduct();
  }, []);

  // Returning the JSX for the context provider. The value prop of the
  // ProductContext.Provider component is an array that holds the products state
  // variable and the setProducts function. The children prop holds the JSX that
  // will be wrapped by the context provider.
  return (
    <ProductContext.Provider value={[products, setProducts]}>
       {children} 
    </ProductContext.Provider>
  );
}