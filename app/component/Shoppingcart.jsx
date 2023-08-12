import React from "react";
import Shoptop from "./Shoptop";

const Shoppingcart = () => {
  return (
    <div className="flex flex-col gap-3">
      <Shoptop />
      <Shoptop />
      <Shoptop />
      <Shoptop />
      <Shoptop />
      <hr className=" m-9" />
      <div className="flex justify-around mb-9">
        <div className="flex flex-col gap-4 justify-center items-center">
          <button
            type="submit"
            className=" h-12 w-[15rem] bg-stone-950 text-white hover:bg-stone-500 active:bg-stone-700"
          >
            Proceed
          </button>
          <h4 className=" text-lg"> Continue Shopping </h4>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-10 text-lg">
            <h2>Products in cart:</h2>
            <h3 className=" font-bold">3items</h3>
          </div>
          <div className="flex gap-[92px] text-lg">
            <h2>Shopping:</h2>
            <h3 className=" font-bold">$2.50</h3>
          </div>
          <div className="flex gap-[110px] text-lg">
            <h2>Total:</h2>
            <h3 className=" font-bold">$114.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoppingcart;
