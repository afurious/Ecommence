import React from "react";
import Link from "next/link";

const Drop = () => {
  return (
    <div>
      <div className=" flex gap-3 text-[20px] ml-[4rem] text-gray-900 mt-10 mb-10">
        <Link
          href="/"
          className=" hover:text-black active:text-gray-300 hover:scale-105"
        >
          Home
        </Link>
        <p>/</p>
        <Link
          href=""
          className=" hover:text-black active:text-gray-300 hover:scale-105"
        >
          {" "}
          Auction
        </Link>
        <p>/</p>
        <Link
          href=""
          className=" hover:text-black active:text-gray-300 hover:scale-105"
        >
          {" "}
          Live bid
        </Link>
        <p>/</p>
        <Link
          href="/drop"
          className=" hover:text-black active:text-gray-300 hover:scale-105"
        >
          Drop
        </Link>
      </div>
    </div>
  );
};

export default Drop;
