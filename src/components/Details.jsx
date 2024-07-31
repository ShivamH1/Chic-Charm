import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";

export default function Details() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

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
        <Link className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-400">
          Edit
        </Link>
        <Link className="py-2 px-5 border rounded border-blue-200 text-red-400">
          Delete{" "}
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
