import Link from "next/link";
import React from "react";

const Pay = () => {
  return (
    <div>
      <div className=" flex mb-10 gap-4 m-4">
        <div className="flex-grow-[3] ">
          <p className=" font-semibold text-lg m-5">Payment method</p>
          <div className=" border border-slate-200 h-[800px]">
            <form>
              <div className=" flex flex-col items-center gap-10 m-4 text-lg font-semibold font-serif">
                <div className=" flex gap-2">
                  <input type="checkbox" />
                  <h4> Select your wallet</h4>
                </div>
                <p className=" text-2xl">
                  Connect with one of our available wallet <br /> providers or
                  add and connect a new wallet.
                </p>
                <div>
                  <p> Wallet type </p>
                  <select
                    name=""
                    id=""
                    className=" w-[400px] h-11 bg-slate-200"
                  ></select>
                </div>
                <div>
                  <p> Key </p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className=" w-[400px] h-11 bg-slate-200"
                  />
                </div>

                <div className=" flex gap-10">
                  <div>
                    <p> Expiry date </p>
                    <input
                      type="date"
                      name=""
                      id=""
                      className=" w-[100px] h-11 bg-slate-200"
                    />
                  </div>
                  <div>
                    <p> CVV </p>
                    <input
                      type="password"
                      name=""
                      id=""
                      className=" w-[100px] h-11 bg-slate-200"
                    />
                  </div>
                </div>
                <div className=" flex gap-2">
                  <input type="checkbox" />
                  <h4>
                    Save my wallet details & information for future transaction
                  </h4>
                </div>
                <div>
                  <button
                    type="submit"
                    className="  bg-stone-800 w-[20rem] h-[35px] text-white hover:bg-slate-800 active:bg-gray-500"
                  >
                    <Link
                      href="/congrat"
                      className=" hover:text-black text-gray-400 active:text-red-400"
                    >
                      Confirm
                    </Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="d flex-grow-[2]">
          <div className="  h-[600px] mt-[5rem]">
            <p className=" font-semibold text-lg m-5">Payment summary</p>

            <hr className=" bg-slate-800" />
            <div className=" flex flex-col items-center gap-5 m-9">
              <div className=" flex gap-4 font-semibold">
                <h3> Metamask wallet:</h3>
                <h3>HHJ987667ppjhgf9887</h3>
              </div>
              <p> Actively linked to Yaba, Lagos Nigeria.</p>
              <hr className=" bg-slate-800" />
              <div>
                <div className=" flex gap-4 font-semibold">
                  <h3>Expected arrival date:</h3>
                  <h3>Between 22nd</h3>
                </div>
                <p>September and 26th September 2022.</p>
              </div>
              <hr className=" bg-slate-800" />
              <div className="flex flex-col gap-3">
                <div className=" flex gap-4 ">
                  <h3>Product in cart:</h3>
                  <h3 className=" font-semibold">6</h3>
                </div>
                <div className=" flex gap-4 ">
                  <h3>Shopping:</h3>
                  <h3 className=" font-semibold">$2.50</h3>
                </div>
                <div className=" flex gap-4 ">
                  <h3>Total:</h3>
                  <h3 className=" font-semibold">$114.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
