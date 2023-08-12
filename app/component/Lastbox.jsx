import { images } from "@/next.config";
import React from "react";

const Lastbox = () => {
  return (
    <div>
      <div className=" h-[200px] w-[80%] border border-gray-800 mt-[100px] ml-[10%] flex justify-center items-center mb-12 ">
        <div>
          <h2 className="flex justify-center items-center font-serif text-2xl ">
            NEWSLETTER
          </h2>
          <h5 className=" font-serif text-xl">
            Subscribe to get daily updates on new drops & exciting deals
          </h5>
          <div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className=" border border-slate-600 w-[300px] items-center m-5"
                required
              />
              <button
                type="submit"
                className=" border border-gray-800 w-[150px] bg-slate-950 text-white"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* bottom */}

      <div className="flex justify-between items-center mr-[90px] ml-[90px] mb-12">
        <div className=" font-bold text-3xl ">DA-FURIOUS.</div>
        <div className="flex flex-col gap-5">
          <h4>Home</h4>
          <h4>Marketplace</h4>
          <h4>Auctions</h4>
          <h4>Drop</h4>
        </div>
        <div className="flex flex-col gap-5">
          <h4>Blog</h4>
          <h4>Wallets</h4>
          <h4>Rates</h4>
          <h4>High bids</h4>
        </div>
        <div className="flex flex-col gap-5">
          <h4>dafuriousstudios@gmail.com</h4>
          <h4>Lagos,Nigeria</h4>
        </div>
      </div>
      <div className="flex justify-center items-center mb-12">
        <h3>Dafuriousstudios@2022.All Right Reserved.</h3>
      </div>
    </div>
  );
};

export default Lastbox;
