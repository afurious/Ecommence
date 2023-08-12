import React from "react";

const Dropbody = () => {
  return (
    <div>
      <div className="flex gap-2 justify-center items-center flex-col">
        <h2 className=" font-serif font-semibold text-[30px] mb-1">
          Upcoming drops
        </h2>
        <h4 className=" font-serif">
          Turn on notification so that no drops will miss you
        </h4>
        <button
          type="reset"
          className=" font-serif border border-slate-600 hover:bg-slate-500 active:bg-slate-300 w-[10rem] font-semibold h-[2.5rem] rounded-md"
        >
          Notify me
        </button>
      </div>
    </div>
  );
};

export default Dropbody;
