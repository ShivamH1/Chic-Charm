import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <div className="h-screen w-screen flex">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
