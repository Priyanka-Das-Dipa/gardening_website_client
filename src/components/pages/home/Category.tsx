/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import { useGetCategoryQuery } from "@/src/redux/features/category/category.api";
import Link from "next/link";

const Category = () => {
  const { data, isLoading } = useGetCategoryQuery({});
  const categories = data?.data;

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle case where categories is undefined or empty
  if (!categories || categories.length === 0) {
    return <div>No categories available.</div>;
  }

  return (
    <div className="container mx-auto my-20">
      <div className="space-y-5 mb-6">
        <h1 className="text-4xl text-center text-green-600">Categories</h1>
        <div className="flex justify-center items-center">
          <ul className="flex gap-5 font-bold flex-wrap">
            <li className=" text-black hover:text-green-800">Fruit</li>
            <li className=" text-black hover:text-green-800">Vegetable</li>
            <li className=" text-black hover:text-green-800">Herb</li>
            <li className=" text-black hover:text-green-800">Flower</li>
            <li className=" text-black hover:text-green-800">Tropical</li>
            <li className=" text-black hover:text-green-800">Culinary</li>
          </ul>
        </div>
      </div>
      <Link href="/category">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
          {categories.map((item: any, index: number) => (
            <div
              key={index}
              className="relative group w-full h-64 overflow-hidden rounded-lg"
            >
              <Image
                alt="Category Image"
                src={item?.image || "/culinary.JPG"}
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 flex items-center justify-center text-white font-bold text-3xl">
                {item?.category || "Category"}
              </div>
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Category;
