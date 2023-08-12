import React from "react";
import Image from "next/image";
import { STIX_Two_Text } from "next/font/google";
const STIX = STIX_Two_Text({ subsets: ["latin"] });

const Holdcon = ({ item, i }) => {
  const styles = {
    itemOrder: {
      order: i % 2 == 0 ? "2" : "1",
    },
  };
  return (
    <div>
      <hr className="mb-5 mt-3 p-6" />
      <div className="flex justify-between gap-8 ">
        <div style={{ order: i % 2 == 0 ? "2" : "1" }}>
          <Image src={item.imageUrl} alt="" width={610} height={305} />
        </div>
        <div style={{ order: i % 2 == 0 ? "1" : "2" }}>
          <h1 className={`mb-3 text-[20px] ${STIX.className}`}>{item.title}</h1>
          <p className="max-jw-[540px] mb-10">{item.primarytest}</p>

          <div
            style={{ justifyContent: i % 2 == 0 ? "2" : "1" }}
            className="flex justify-between items-center"
          >
            <div className="flex relative ">
              <div className="relative w-[51px] h-[51px]  hover:border:none hover:z-30">
                <Image
                  src="/images/Elite/E1.png"
                  alt=""
                  width={51}
                  height={51}
                />
              </div>
              <div
                className=" relative hover:border:none hover:z-30"
                style={{ left: "-20px" }}
              >
                <Image
                  src="/images/Elite/E2.png"
                  alt=""
                  width={51}
                  height={51}
                />
              </div>
              <div
                className="relative  hover:border:none hover:z-30"
                style={{ left: "-40px" }}
              >
                <Image
                  src="/images/Elite/E3.png"
                  alt=""
                  width={51}
                  height={51}
                />
              </div>
              <div
                className=" relative  hover:border:none hover:z-30"
                style={{ left: "-60px" }}
              >
                <Image
                  src="/images/Elite/E4.png"
                  alt=""
                  width={51}
                  height={51}
                />
              </div>
            </div>
            <p className="">64 major creators</p>
            <div className="border border-gray border-5 rounded-full w-10 h-10 text-[30px] flex items-center justify-center pb-2">
              &rarr;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdcon;
