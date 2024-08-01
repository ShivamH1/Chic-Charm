import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

export default function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <a
        className="py-2 px-5 border rounded border-blue-200 text-blue-400"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%]"></hr>
      <h1 className="text-xl mb-3 w-[80%]">Category Filter</h1>
      {/* Since the parent container (<nav>) has a width of 15%, the 80% width of the <h1> & <ul> element will be calculated as 0.8 * 15% = 12%. This means the <h1> element will take up 12% of the total width of the screen. */}
      <div className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="flex items-center mb-3"
          >
            <span style={{ backgroundColor: color() }} className="rounded-full mr-2 w-[15px] h-[15px]"></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}
