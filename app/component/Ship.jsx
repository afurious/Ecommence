import React from "react";
import Shoppingcart from "./Shoppingcart";

const Ship = () => {
  return (
    <div>
      <div className="flex justify-around">
        <div>
          <form className="flex flex-col gap-3 text-lg font-semibold">
            <div>
              <p>Your email</p>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                required
                className="border w-[500px] h-10 bg-gray-200 rounded"
              />
              <br />
            </div>
            <div className="flex gap-2 mt-3">
              <input type="checkbox" name="" id="" />
              <p>Get update about new drops & exclusive offers</p>
            </div>
            <div>
              <p>Your full name</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="First_name"
                className="border w-[500px] h-10 bg-gray-200 rounded"
              />
            </div>
            <div>
              <p>Choose a wallet</p>
              <select
                name=""
                id=""
                required
                className="border w-[500px] h-10 bg-gray-200 rounded"
              ></select>
            </div>
            <div>
              <p>City</p>
              <select
                name=""
                id=""
                className="border w-[500px] h-10 bg-gray-200 rounded"
              ></select>
            </div>
            <div className=" flex gap-5">
              <div>
                <p>Country</p>
                <select
                  name=""
                  id=""
                  className="border w-[150px] h-10 bg-gray-200 rounded"
                ></select>
              </div>
              <div>
                <p>Postal code</p>
                <input
                  type="number"
                  name=""
                  id=""
                  required
                  placeholder="1100011"
                  className="border w-[30%] h-10 bg-gray-200 rounded"
                />
              </div>
            </div>
            <div>
              <p>Phone number</p>
              <input
                type="number"
                name=""
                id=""
                placeholder="08133774984"
                className="border w-[500px] h-10 bg-gray-200 rounded"
              />
            </div>
          </form>
        </div>
        <div>
          <Shoppingcart />
        </div>
      </div>
    </div>
  );
};

export default Ship;
