import Image from "next/image";
import React from "react";

const Boxicon = () => {
  return (
    <div>
      <div className="h-[520px] w-auto mt-8 bg-gradient-to-r from-[#4693ED] via-[#79c2D2] to-[#c056097D]">
        <div className="flex flex-col ml-40">
          <h3 className="text-[20px] text-white">
            See Upcoming Auction And Exhibition
          </h3>
          <hr className="w-[500px]  " />
        </div>
        <div className="flex justify-center items-center mt-5 flex-col">
          <div
            className="w-[80%] h-[400px] justify-end flex flex-col"
            style={{
              backgroundImage: "url(/images/bg/bgimg.png)",
              backgroundSize: "contain",
            }}
          >
            <div className=" justify-end m-10 text-white">
              <div className="box_1 ">MONALISA REDEFINED IN STYLE</div>
              <div className="flex gap-5 ">
                <div className="text-[40px] text-white">01</div>
                <h3 className="mt-5 ">START ON: 08:00GTS. MONDAY</h3>
              </div>
              <div className="flex justify-between ">
                <p className="ml-[65px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Soluta, est inventore qui sit, quae quibusdam tenetur <br />
                  assumenda vero ad nobis natus non temporibus illo in possimus
                  <br />
                  aliquam vitae labore consequatur.
                </p>
                <div>
                  <p>See more </p>
                  <hr />
                </div>
                <button className="border border-slate-300 w-[152px] h-[32px] rounded-full cursor-pointer">
                  Set a reminder
                </button>
              </div>
            </div>
          </div>

          <div className="flex w-[80%] justify-between mt-3">
            <div className=" w-[300px] h-[10px] bg-gray-200 border rounded mt-4">
              <div className=" w-[100px] h-[10px] bg-white border rounded"></div>
            </div>
            <div className="flex gap-3">
              <div className="border border-gray-500 rounded-full w-10 h-10 items-center justify-center flex cursor-pointer">
                ‹
              </div>
              <div className="border border-gray-500 rounded-full w-10 h-10 items-center justify-center flex cursor-pointer">
                ›
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[25px] mt-2">
        <hr />
        <div className="flex justify-between ml-8">
          <h3>Explore marketplace</h3>
          <div className="border border-gray-200 rounded-full w-[40px] h-[40px] justify-center items-center flex mr-8 cursor-pointer">
            &rarr;
          </div>
        </div>
        <hr />
        <div className="flex justify-between ml-8">
          <h3>See Auction</h3>
          <div className="border border-gray-200 rounded-full w-[40px] h-[40px] justify-center items-center flex mr-8 cursor-pointer">
            &rarr;
          </div>
        </div>
        <hr />
      </div>
      <div className=" h-[500px] w-[auto] bg-gray-200 relative -z-[2] mt-10">
        <div
          className=" h-[500px] w-[50%] absolute left-[25%] top-20 -z-[1]"
          style={{
            backgroundImage: " url(images/Lady/L1.png)",
            backgroundSize: "contain",
          }}
        ></div>

        <div className="flex justify-between ml-12 mr-12 pt-[20px] ">
          <h1 className=" text-3xl font-bold">TOP CREATORS OF THE WEEK</h1>
          <div className=" flex gap-2">
            <div className=" h-[150px] w-2 bg-slate-400 border rounded-full">
              <div className=" h-[50px] w-2 bg-slate-950 mt-[98px] border rounded-full"></div>
            </div>
            <div className="flex flex-col gap-3">
              <h4>Editorial</h4>
              <h4>Fashion</h4>
              <h4>Lifestyle</h4>
              <h4>Blueprint</h4>
            </div>
          </div>
        </div>

        <p className=" mt-[70px] ml-12 font-sans w-[30%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          deserunt dolore. Illo, autem, aspernatur necessitatibus
          <br />
          laborum itaque excepturi architecto mollitia iusto non placeat <br />
          dolorum impedit exercitationem rerum esse ab nulla?
        </p>
        <h4 className=" font-bold text-9xl ml-[800px]">#985</h4>
      </div>
    </div>
  );
};

export default Boxicon;
