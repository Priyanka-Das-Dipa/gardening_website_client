/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { useGetCategoryQuery } from "@/src/redux/features/category/category.api";
import { useAppSelector } from "@/src/redux/hooks";
import Link from "next/link";

const PopularPost = () => {
  const { data, isLoading } = useGetCategoryQuery({});
  const categories = data?.data?.slice(-4);

  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="container mx-auto my-20">
      <div className="space-y-3 mb-10">
        <h1 className="text-4xl font-bold text-center text-green-600">
          Most Talked About
        </h1>
        <p className="text-center text-xl ">
          Explore the top-rated posts that are capturing everyone&apos;s
          attention.
        </p>
      </div>
      {isLoading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6">
          {categories?.map((category: any, index: number) => (
            <div
              key={index}
              className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image with zoom effect */}
              <div className="relative group">
                <Link href={"post"}>
                  <Image
                    width={500}
                    height={500}
                    src={category?.image}
                    alt="Category Image"
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>

              {/* Card content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">{category?.category}</h2>
                <hr className="my-2" />
                <div className="flex items-center space-x-3 mt-2">
                  {/* Like and Dislike Buttons */}
                  <button className="flex items-center text-sm text-gray-600">
                    <AiTwotoneLike className="text-2xl" />
                    {category.likes || 5}
                  </button>
                  <button className="flex items-center text-sm text-gray-600">
                    <AiTwotoneDislike className="text-2xl" />
                    {category.dislikes || 0}
                  </button>
                </div>
                <div className="flex items-center mt-4">
                  <Image
                    src={user?.profilePhoto || "/user.jpeg"}
                    width={50}
                    height={50}
                    alt="User Avatar"
                    className="size-12 rounded-full mr-3"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{user?.name || "John Doe"}</p>
                    <p className="text-gray-500">
                      {category.date || "Jan 20, 2025"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularPost;
