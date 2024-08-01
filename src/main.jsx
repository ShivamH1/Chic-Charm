
// Importing the React library
import React from "react";

// Importing the ReactDOM library with the client method
import ReactDOM from "react-dom/client";

// Importing the App component from the current directory
import App from "./App.jsx";

// Importing the index.css file from the current directory
import "./index.css";

// Importing the BrowserRouter component from the react-router-dom library
import { BrowserRouter } from "react-router-dom";

// Importing the Context component from the utils directory
import Context from "./utils/Context.jsx";

// Importing the ToastContainer component from the react-toastify library
import { ToastContainer } from "react-toastify";

// Using the createRoot method from ReactDOM to create a root element
// and render the App component into it
ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrapping the App component with the Context component
  // This allows the App component to access the values provided by the Context component
  <Context>
    {/* // Wrapping the App component with the BrowserRouter component */}
    {/* // This allows the App component to handle routing and navigation */}
    <BrowserRouter>
      {/* // Rendering the App component */}
      <App />
      {/* // Rendering the ToastContainer component */}
      {/* // This component displays toast notifications */}
      <ToastContainer />
    </BrowserRouter>
  </Context>
);

