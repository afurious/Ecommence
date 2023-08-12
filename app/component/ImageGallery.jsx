import Link from "next/link";
import React from "react";
import ImagePrice from "./ImagePrice";

const ImageGallery = () => {
  return (
    <div>
      <div className="flex gap-2 contain_fluid">
        {/* <Link href="https://home.com/">Home /</Link>
        <Link href="https://MarketPlace/">MarketPlace /</Link>
        <Link href="https://Editorials/">Editorial /</Link>
        <Link href="https://PHILOMENA ‘22">PHILOMENA ‘22 </Link> */}
      </div>
      <ImagePrice />
    </div>
  );
};

export default ImageGallery;
