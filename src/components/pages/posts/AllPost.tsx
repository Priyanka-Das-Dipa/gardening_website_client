/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import { useGetAllPostQuery } from "@/src/redux/features/post/post.api";
import { useState } from "react";
import { useDebounce } from "@/src/hooks/useDebounce";
import Image from "next/image";

const AllPost = () => {
  const [srcValue, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [premium, setPremium] = useState<boolean>(false);
  const searchTerm = useDebounce(srcValue, 1000);

  const { data } = useGetAllPostQuery({
    searchTerm,
    category,
    premium,
  });

  console.log(data?.data);

  return (
    <>
      <div className="container mx-auto py-12">
        <div className="py-2">
          <h1 className=" text-3xl "> All Recent Post</h1>
          <hr className=" w-[200px] h-1 bg-green-600 " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 pt-5 gap-10">
          {data?.data?.map((item: any, idex: number) => (
            <div
              key={idex}
              className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex"
            >
              <div className="w-1/2">{/* Image component */}</div>
              <div className="w-2/3 p-4">
                <h2 className="text-2xl font-semibold mb-2">{item?.title}</h2>
                <p className="text-gray-700 mb-4">
                  This is a brief description of the popular post. It gives a
                  preview of the content. To learn more about this topic, click
                  the read more button below.
                </p>
                <button className="text-blue-500 font-medium hover:underline mb-4">
                  Read More
                </button>
                <div className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold">Category:</span>{" "}
                  {item?.category?.category}
                </div>
                <div className="flex items-center">
                  <Image
                    src={item?.userId?.profilePhoto || "/user.jpeg"}
                    width={30}
                    height={30}
                    alt="Author"
                    className="w-14 h-14 rounded-full mr-3"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{item?.userId?.name}</p>
                    <p className="text-gray-500">Jan 20, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPost;
