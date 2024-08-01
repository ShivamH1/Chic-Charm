// Importing necessary dependencies and components
import React, { useContext, useEffect, useState } from "react"; // React and its hooks
import { ProductContext } from "../utils/Context"; // ProductContext from Context.jsx
import { nanoid } from "nanoid"; // for generating unique IDs
import { useNavigate, useParams } from "react-router-dom"; // for navigation
import { toast } from "react-toastify"; // for displaying toast messages

// Edit component
function Edit() {
  // Accessing the products array from the ProductContext and use it to update the state
  const [products, setProducts] = useContext(ProductContext);

  // Getting the product ID from the URL params
  const { id } = useParams();

  // Initializing the state variables for each input field
  const [product, setProduct] = useState({
    title : '',
    description : '',
    image : '',
    category : '',
    price : '',
  });

  // Function to handle input changes
  const ChangeHandler = (e) => {
    // Updating the state with the new value of the input field
    setProduct({...product, [e.target.name]: e.target.value });
  }

  // Getting the navigate function from React Router
  const navigate = useNavigate();

  // UseEffect to set the product state when the component loads
  useEffect(() => {
    // Filtering the products array to find the product with the matching ID
    // and updating the product state with that product
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  // Function to handle form submission
  const AddProductHandler = (e) => {
    e.preventDefault();

    // Checking if any of the input fields are empty
    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.length < 1 ||
      product.description.trim().length < 5
    ) {
      // Displaying an alert message if any field is empty
      alert("Please fill all the fields");
      return;
    }

    // Finding the index of the product in the products array
    const pidx = products.findIndex((p) => p.id == id);

    // Creating a copy of the products array
    const cpydata = [...products];

    // Updating the product at the found index with the updated product values
    cpydata[pidx] = {...products[pidx], ...product};

    // Updating the products state with the updated array
    setProducts(cpydata);

    // Storing the updated products array in local storage
    localStorage.setItem("products", JSON.stringify(cpydata));

    // Navigating back to the previous page
    navigate(-1);

    // Displaying a success message to the user using react-toastify
    toast.success("Product Updated!");
  };

  // JSX code for the form
  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input
        type="url"
        placeholder="Product Image"
        className="text-1xl bg-zinc-100 rounded p-3 w-2/4 mb-3"
        onChange={ChangeHandler}
        name="image"
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="Product Name"
        className="text-1xl bg-zinc-100 rounded p-3 w-2/4 mb-3"
        onChange={ChangeHandler}
        name="title"
        value={product && product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Product Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={ChangeHandler}
          name="category"
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="Product Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={ChangeHandler}
          name="price"
          value={product && product.price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-2/4 mb-3"
        placeholder="Enter Product Description here ..."
        onChange={ChangeHandler}
        name="description"
        value={product && product.description}
        rows={10}
      />
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-400">
          Edit Product
        </button>
      </div>
    </form>
  );
}

// Exporting the Edit component
export default Edit;
