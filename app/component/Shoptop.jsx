import React from "react";
import Image from "next/image";

const Shoptop = () => {
  return (
    <div>
      <hr className=" font-extrabold m-10 " />
      <div className="flex justify-around">
        <div className=" flex gap-3">
          <Image src="/images/slide/3.png" width={100} height={250} />

          <div className=" text-xl flex flex-col gap-2">
            <h3>Philomena `22 </h3>
            <h5 className=" text-gray-400">Clearamena </h5>
            <h6 className=" text-gray-400">Size: 200 ft </h6>
            <div className=" flex gap-6">
              <p> - </p> <p> 1 </p> <p> + </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-9 font-bold justify-center items-center">
          <p>x</p>
          <p>$35.50</p>
        </div>
      </div>
    </div>
  );
};

export default Shoptop;
