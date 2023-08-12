import Image from "next/image";
import React from "react";

const Congrat = () => {
  return (
    <div>
      <div className=" absolute -top-[200px] -left-[150px] -z-10">
        <div className=" h-[600px] w-[600px] rounded-full bg-sky-700 flex justify-center items-center">
          <div className=" h-[560px] w-[560px] rounded-full bg-white flex justify-center items-center">
            <div className="  h-[400px] w-[400px] rounded-full bg-amber-200 flex justify-center items-center">
              <div className="  h-[360px] w-[360px] rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center mt-[5rem]">
        <div>
          <Image src="/images/bg/1.png" width={250} height={500} />
        </div>
        <div className="items-center justify-center flex flex-col mt-10">
          <h1 className=" font-bold text-2xl ">
            Hey Samuel, thank you for your purchase.
          </h1>
          <h5 className=" font-serif mt-4">
            You are amazing. Cheers to being.
            <span className=" text-sky-600">Da-furious 🎇🎇</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Congrat;
