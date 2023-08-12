import ImageGallery from "@/app/component/ImageGallery";
import React from "react";

async function getData() {
  const res = await fetch("http://localhost:8000/api/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = () => {
  const data = getData();
  console.log(data);

  return (
    <div>
      <ImageGallery />
    </div>
  );
};

export default page;
