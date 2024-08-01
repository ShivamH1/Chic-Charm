// Importing necessary dependencies from react and other modules
import React, { useContext, useEffect, useState } from "react";

// Importing the Nav component from the ./Nav file
import Nav from "./Nav";

// Importing Link and useLocation from react-router-dom
import { Link, useLocation } from "react-router-dom";

// Importing the ProductContext from the ../utils/Context file
import { ProductContext } from "../utils/Context";

// Importing the Loading component from the ./Loading file
import Loading from "./Loading";

// Importing axios from the ../utils/axios file
import axios from "../utils/axios";

// Defining a functional component named Home
export default function Home() {
  // Getting the products array from the ProductContext using destructuring
  const [products] = useContext(ProductContext);

  // Getting the search query from the URL using useLocation hook
  const { search } = useLocation();

  // Decoding the category from the search query and assigning it to the category variable
  const category = decodeURIComponent(search.split("=")[1]);

  // Defining a state variable named filteredProduct using useState hook
  const [filteredProduct, setFilteredProduct] = useState(null);

  // Defining an async function named getProductCategory
  const getProductCategory = async () => {
    try {
      // Making a GET request to /products/category/{category} using axios
      const { data } = await axios.get(`/products/category/${category}`);

      // Setting the filteredProduct state with the data received from the server
      setFilteredProduct(data);
    } catch (err) {
      // Logging any error that occurs during the request
      console.log(err);
    }
  };

  // Defining a useEffect hook
  useEffect(() => {
    // If filteredProduct is null or category is 'undefined'
    if (!filteredProduct || category == "undefined") {
      // Setting the filteredProduct state with the products array from the ProductContext
      setFilteredProduct(products);
    }

    // If category is not 'undefined'
    if (category != 'undefined') {
      // Setting the filteredProduct state with the filtered products based on the category
      // setFilteredProduct(products.filter((p) => p.category == category));
      // TODO: Uncomment the above line and comment the line below when the backend is ready
      getProductCategory();
    }
  }, [category, products]);

  // Returning the JSX for the Home component
  return (
    // If products array is not null
    products ? (
      <>
        <Nav />
        <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
          {/* Mapping over the filteredProduct array and rendering each product */}
          {filteredProduct &&
            filteredProduct.map((p) => (
              <Link
                key={p.id}
                to={`/details/${p.id}`}
                className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
              >
                <div
                  className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${p.image})`,
                  }}
                ></div>
                <h1 className="hover:text-blue-500">{p.title}</h1>
              </Link>
            ))}
        </div>
      </>
    ) : (
      // If products array is null, rendering the Loading component
      <Loading />
    )
  );
}