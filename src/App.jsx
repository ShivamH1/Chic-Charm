
// Importing the necessary dependencies from the React Router package
import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";

// Importing the components from the ./components directory
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

// Defining a functional component named App
function App() {
  // Using the useLocation hook from React Router to get the current URL information
  const {search, pathname} = useLocation();

  // Returning the JSX for the App component
  return (
    // Creating a div element with the CSS classes for a full screen layout
    <div className="h-screen w-screen flex">

      {/* If the current path is not the root path or the search query is not empty,
      display a link to the root path */}
      {(pathname != '/' || search.length > 0) && (
        <Link className="absolute left-[18%] top-[4%] text-red-400" to={'/'}>Home</Link>
      )}

      {/* Defining the routes for the application */}
      <Routes>

        {/* Defining a route for the root path */}
        <Route path="/" element={<Home />}></Route>

        {/* Defining a route for the create path */}
        <Route path="/create" element={<Create />}></Route>

        {/* Defining a route for the details path with a parameter for the product id */}
        <Route path="/details/:id" element={<Details />}></Route>

        {/* Defining a route for the edit path with a parameter for the product id */}
        <Route path='/edit/:id' element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

// Exporting the App component as the default export
export default App;

