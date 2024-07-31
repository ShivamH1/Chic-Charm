import React from "react";

export default function Nav() {
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
      <ul className="w-[80%]">
        <li className="flex items-center mb-3">
          <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-100"></span>{" "}
          Cat
        </li>
        <li className="flex items-center mb-3">
          <span className="rounded-full mr-2 w-[15px] h-[15px] bg-green-100"></span>{" "}
          Cat
        </li>
        <li className="flex items-center mb-3">
          <span className="rounded-full mr-2 w-[15px] h-[15px] bg-red-100"></span>{" "}
          Cat
        </li>
      </ul>
    </nav>
  );
}
