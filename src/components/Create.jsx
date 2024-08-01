import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// This is a functional component called Create that allows users to add new products to the
// website. It uses React hooks to manage state and context.
function Create() {
  // Access the products array from the ProductContext and use it to update the state
  const [products, setProducts] = useContext(ProductContext);
  
  // Initialize the state variables for each input field
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Access the navigate function from React Router to redirect the user after adding a product
  const navigate = useNavigate();

  // This function is triggered when the user submits the form to add a new product
  const AddProductHandler = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Check if any of the input fields are empty
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      // Display an alert message if any field is empty
      alert("Please fill all the fields");
      return;
    }

    // Create a new product object with the input values
    const product = {
      id: nanoid(), // Generate a unique ID using nanoid
      title,
      image,
      category,
      price,
      description,
    };

    // Update the products state by appending the new product to the existing array
    setProducts([...products, product]);

    // Store the updated products array in local storage
    localStorage.setItem("products", JSON.stringify([...products, product]));

    // Redirect the user to the home page after adding a new product
    navigate("/");

    // Display a success message to the user using react-toastify
    toast.success("New Product Added!");

    // Log the new product object to the console
    console.log(product);
  };

  // Render the form that allows the user to add a new product
  return (
    <form
      onSubmit={AddProductHandler} // Attach the AddProductHandler function to the form's submit event
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl">Add New Product</h1>

      {/* Render each input field */}
      <input
        type="url"
        placeholder="Product Image"
        className="text-1xl bg-zinc-100 rounded p-3 w-2/4 mb-3"
        onChange={(e) => setImage(e.target.value)} // Update the image state when the user types in the input field
        value={image} // Set the input field's value to the image state
      />
      <input
        type="text"
        placeholder="Product Name"
        className="text-1xl bg-zinc-100 rounded p-3 w-2/4 mb-3"
        onChange={(e) => setTitle(e.target.value)} // Update the title state when the user types in the input field
        value={title} // Set the input field's value to the title state
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Product Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)} // Update the category state when the user types in the input field
          value={category} // Set the input field's value to the category state
        />
        <input
          type="number"
          placeholder="Product Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setPrice(e.target.value)} // Update the price state when the user types in the input field
          value={price} // Set the input field's value to the price state
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-2/4 mb-3"
        placeholder="Enter Product Description here ..."
        onChange={(e) => setDescription(e.target.value)} // Update the description state when the user types in the textarea
        value={description} // Set the textarea's value to the description state
        rows={10}
      />
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-400">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
