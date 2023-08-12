import React from "react";
import Link from "next/link";

const Checkout = () => {
  return (
    <div>
      <div className=" relative z-10">
        <div className="flex gap-8 text-[20px] justify-center items-center m-12">
          <Link
            href="/marketplace/shoppingcart"
            className=" hover:text-black text-gray-400 active:text-red-400"
          >
            Shopping cart
          </Link>
          <Link
            href="/marketplace/shippingdetails"
            className=" hover:text-black text-gray-400 active:text-red-400"
          >
            Shipping details
          </Link>
          <Link
            href="/marketplace/paymentdetails"
            className=" hover:text-black text-gray-400 active:text-red-400"
          >
            Payment details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
