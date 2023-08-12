import { Ysabeau } from "next/font/google";
import Slides from "./Slides";

const ysa = Ysabeau({
  subsets: ["latin"],
  weight: ["600"],
  style: "italic",
  display:"swap",
});
const Hero = () => {
  return (
    <>
      <section className="contain_fluid px-6 pt-14">
        <div>
          <h1 className={`${ysa.className} text-[80px] text-center`}>
            Photography is poetry <br /> & beautiful untold stories
          </h1>
          <p className="font-[500] text-[28px] mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            numquam rerum reiciendis ea ad dignissimos cum. Harum labore
            laboriosam iste?
          </p>
        </div>
      </section>
      <div className="pt-6">
        <Slides />
      </div>
    </>
  );
};

export default Hero;
