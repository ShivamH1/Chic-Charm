// Importing necessary dependencies from react and other packages
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import axios from "../utils/axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

// Define a functional component named Details
export default function Details() {
  // Get the navigate function from the react-router-dom package
  const navigate = useNavigate();

  // Get the products and setProducts from the ProductContext
  const [products, setProducts] = useContext(ProductContext);
  // Initialize the product state to null
  const [product, setProduct] = useState(null);
  // Get the id from the URL parameters
  const { id } = useParams();

  // This useEffect hook is used to fetch a single product from the server
  // when the component mounts. It is currently commented out.
  // useEffect(() => {
  //   const getSingleProduct = async () => {
  //     try {
  //       const { data } = await axios.get(`/products/${id}`);
  //       setProduct(data);
  //     } catch (err) {
  //       console.error("Error fetching product:", err);
  //     }
  //   };
  //   getSingleProduct();
  // }, []);

  // This useEffect hook is used to set the product state to the product with
  // the matching id from the products state array. It is triggered when the
  // product state is null.
  useEffect(() => {
    if(!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  // This function is called when the delete button is clicked. It filters out
  // the product with the matching id from the products state array and updates
  // the products state. It also navigates to the home page.
  const ProductDeleteHandler = (id) => {
    const FilteredProducts = products.filter((p) => p.id !== id);
    setProducts(products);
    localStorage.setItem('products', JSON.stringify(FilteredProducts));
    navigate('/');
  }

  // Render the product details if the product state is not null
  return product ? (
    <div className="w-[80%] flex items-center justify-between h-full m-auto p-[10%]">
      <img
        className="object-contain h-[95%] w-[45%]"
        src={`${product.image}`}
        alt=""
      />

      <div className="content w-[60%] mt-5 ml-[6%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-500 my-4">{product.category}</h3>
        <h2 className="text-red-400 mb-2">$ {product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        {/* Link to the edit page for the current product */}
        <Link to={`/edit/${product.id}`} className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-400">
          Edit
        </Link>
        {/* Button to delete the current product */}
        <button onClick={() => ProductDeleteHandler(product.id )} className="py-2 px-5 border rounded border-blue-200 text-red-400">
          Delete{" "}
        </button>
      </div>
    </div>
  ) : (
    // If the product state is null, render a loading component
    <Loading />
  );
}

