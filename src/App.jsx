import React from "react";
import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  const {search, pathname} = useLocation();

  return (
    <div className="h-screen w-screen flex">

      {(pathname != '/' || search.length > 0) && (
        <Link className="absolute left-[18%] top-[4%] text-red-400" to={'/'}>Home</Link>
      )}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
