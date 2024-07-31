import React from "react";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        <div className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: "url(https://picsum.photos/200/300?random=1)",
            }}
          ></div>
          <h1 className="hover:text-blue-500">Lorem Ipsum Lorem</h1>
        </div>
      </div>
    </>
  );
}
