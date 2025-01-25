/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import fruit from "@/src/assets/images/fruit.jpeg";
import flower from "@/src/assets/images/flower.jpeg";
import vegetable from "@/src/assets/images/vagitable.jpeg";

const Photos = () => {
  return (
    <div>
      <div className="grid grid-rows-2 grid-cols-4 gap-4 p-4">
        {/* Top-left large image */}
        <div className="row-span-2 col-span-2">
          <Image
            src={fruit} // Replace with your image
            alt="Large image"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>

        {/* Top-right small images */}
        <div className="row-span-1 col-span-1">
          <Image
            src={flower} // Replace with your image
            alt="Large image"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="row-span-1 col-span-1">
          <Image
            src={vegetable} // Replace with your image
            alt="Large image"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>

        {/* Bottom-right small images */}
        <div className="row-span-1 col-span-1">
          <Image
            src={fruit} // Replace with your image
            alt="Large image"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="row-span-1 col-span-1">
          <Image
            src={flower} // Replace with your image
            alt="Large image"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
