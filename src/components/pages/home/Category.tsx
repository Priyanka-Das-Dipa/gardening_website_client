/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import vagitable from "@/src/assets/images/vagitable.jpeg";
import fruit from "@/src/assets/images/fruit.jpeg";
import flower from "@/src/assets/images/flower.jpeg";
import hurbs from "@/src/assets/images/hurbs.jpeg";
import Culinary from "@/src/assets/images/culinary.jpg";

const Category = () => {
  const data = [
    { src: vagitable, name: "Vegetables" },
    { src: fruit, name: "Fruits" },
    { src: vagitable, name: "Vegetables" },
    { src: flower, name: "Flowers" },
    { src: hurbs, name: "Herbs" },
    { src: Culinary, name: "Culinary" },
  ];

  return (
    <div className="container mx-auto my-20">
      <div className="space-y-5 mb-6">
        <h1 className="text-4xl text-center text-green-600">Categories</h1>
        <div className="flex justify-center items-center">
          <ul className="flex gap-5 font-bold">
            <li className=" text-black hover:text-green-800">Fruit</li>
            <li className=" text-black hover:text-green-800">Vegetable</li>
            <li className=" text-black hover:text-green-800">Herb</li>
            <li className=" text-black hover:text-green-800">Flower</li>
            <li className=" text-black hover:text-green-800">Tropical</li>
            <li className=" text-black hover:text-green-800">Culinary</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group w-full h-64 overflow-hidden rounded-lg"
          >
            <Image
              alt={item.name}
              src={item.src}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center text-white font-bold text-3xl">
              {item.name}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Category;
