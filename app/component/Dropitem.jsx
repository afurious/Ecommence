import React from "react";
import Image from "next/image";

const Dropitem = () => {
  return (
    <div>
      <div>
        <div className=" flex justify-center items-center gap-7 m-9 mb-20">
          <div className=" relative w-fit ">
            <Image src="/images/hold/h1.png" width={500} height={400} alt="" />
            <div className=" flex justify-between bg-[rgba(255,255,255,0.1)] backdrop-blur-sm absolute bottom-3 left-6 min-w-[90%] text-white">
              <div className=" m-5 ">
                <p> Time remaining</p>
                <h3> 05 hrs: 45min: 22s</h3>
              </div>
              <button className=" m-5 font-serif w-[5rem] font-semibold h-[2rem] rounded-md bg-blue-500 hover:bg-sky-500 active:bg-blue-200 ">
                Join
              </button>
            </div>
          </div>
          <div>
            <button className="font-serif w-[10rem] font-semibold h-[2.5rem] rounded-md bg-blue-500  hover:bg-sky-500 active:bg-blue-200 mb-5 text-white">
              Upcoming
            </button>
            <p className=" text-sm mb-5">Noverber 21 </p>
            <h5 className=" font-bold text-xl mb-5"> Eyo: Eko For Show</h5>
            <p className=" mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              <br />
              eos ipsum quis eligendi repellat sequi maxime esse voluptatibus
              <br />
              neque tempora, rem sunt architecto. Voluptatibus asperiores
              <br />
              doloribus et, maiores ipsum sequi?
            </p>
            <h4 className=" font-semibold mb-5">
              Creator: <span className=" text-blue-500 ">Da-furious</span>
            </h4>
            <h3 className=" text-blue-500 underline"> Get Notified </h3>
          </div>
        </div>

        {/* new */}

        <div className=" flex justify-center items-center gap-7 m-9 mb-20">
          <div className=" relative w-fit ">
            <Image src="/images/hold/h2.png" width={500} height={400} alt="" />
            <div className=" flex justify-between bg-[rgba(255,255,255,0.1)] backdrop-blur-sm absolute bottom-3 left-6 min-w-[90%] text-white">
              <div className=" m-5 ">
                <p> Time remaining</p>
                <h3> 05 hrs: 45min: 22s</h3>
              </div>
              <button className=" m-5 font-serif w-[5rem] font-semibold h-[2rem] rounded-md bg-blue-500  hover:bg-sky-500 active:bg-blue-200">
                Join
              </button>
            </div>
          </div>
          <div>
            <button className="font-serif w-[10rem] font-semibold h-[2.5rem] rounded-md bg-green-500 hover:bg-green-300 active:bg-green-200 mb-5 text-white">
              Live Now
            </button>
            <p className=" text-sm mb-5">Noverber 21 </p>
            <h5 className=" font-bold text-xl mb-5"> Eyo: Eko For Show</h5>
            <p className=" mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              <br />
              eos ipsum quis eligendi repellat sequi maxime esse voluptatibus
              <br />
              neque tempora, rem sunt architecto. Voluptatibus asperiores
              <br />
              doloribus et, maiores ipsum sequi?
            </p>
            <h4 className=" font-semibold mb-5">
              Creator: <span className=" text-blue-500 ">Da-furious</span>
            </h4>
            <h3 className=" text-blue-500 underline"> Get Notified </h3>
          </div>
        </div>

        {/* new */}
        <div className=" flex justify-center items-center gap-7 m-9 mb-20">
          <div className=" relative w-fit ">
            <Image src="/images/hold/h3.png" width={500} height={400} alt="" />
            <div className=" flex justify-between bg-[rgba(255,255,255,0.1)] backdrop-blur-sm absolute bottom-3 left-6 min-w-[90%] text-white">
              <div className=" m-5 ">
                <p> Time remaining</p>
                <h3> 05 hrs: 45min: 22s</h3>
              </div>
              <button className=" m-5 font-serif w-[5rem] font-semibold h-[2rem] rounded-md bg-gray-500 hover:bg-gray-300 active:bg-gray-100">
                Veiw
              </button>
            </div>
          </div>
          <div>
            <button className="font-serif w-[10rem] font-semibold h-[2.5rem] rounded-md bg-gray-500 hover:bg-gray-300 active:bg-gray-200 mb-5 text-white">
              Ended
            </button>
            <p className=" text-sm mb-5">Noverber 21 </p>
            <h5 className=" font-bold text-xl mb-5"> Eyo: Eko For Show</h5>
            <p className=" mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              <br />
              eos ipsum quis eligendi repellat sequi maxime esse voluptatibus
              <br />
              neque tempora, rem sunt architecto. Voluptatibus asperiores
              <br />
              doloribus et, maiores ipsum sequi?
            </p>
            <h4 className=" font-semibold mb-5">
              Creator: <span className=" text-blue-500 ">Da-furious</span>
            </h4>
            <h3 className=" text-blue-500 underline"> Get Notified </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropitem;
