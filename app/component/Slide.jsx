"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import Image from "next/image";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// import "swiper/css/autoplay";

// import "swiper/css";
const items = [
  <Image src="/images/slide/1.png" alt="" width={358} height={332} />,
  <Image src="/images/slide/2.png" alt="" width={358} height={332} />,
  <Image src="/images/slide/3.png" alt="" width={358} height={332} />,
  <Image src="/images/slide/4.png" alt="" width={358} height={332} />,
];

const Slide = ({ delay }) => {
  return (
    <div className="overflow-hidden">
      <AliceCarousel
        items={items}
        autoPlay={true}
        disableButtonsControls={true}
        disableDotsControls={true}
        infinite={true}
        animationDuration={2000}
        autoPlayInterval={delay}
        animationEasingFunction="ease-out"
      />
    </div>
  );
};

export default Slide;
