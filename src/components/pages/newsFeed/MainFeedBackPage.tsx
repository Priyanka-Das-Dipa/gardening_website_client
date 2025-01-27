/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import NoDataFound from "../../shared/NoDataFound";
import UserProfile from "./UserProfile";
import user from "@/src/assets/images/user.jpeg";
import vegetable from "@/src/assets/images/vagitable.jpeg";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import "./custome.css";

const MainFeedBackPage = () => {
  return (
    <div className="flex px-6 gap-4 md:px-0 ">
      <div className="w-[300px]">
        <UserProfile />
      </div>
      <div className="mx-auto w-full min-h-screen overflow-auto flex-1">
        <>
          <h1 className="text-2xl font-bold text-center py-3 underline border rounded-md shadow-md ">
            All post
          </h1>
          <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex mt-5">
            {/* Left side: Image */}
            <div className="w-1/2">
              <Image
                width={500}
                height={500}
                src={vegetable}
                alt="Popular Post"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side: Content */}
            <div className="w-2/3 p-4">
              {/* Title */}
              <h2 className="text-2xl font-semibold mb-2">
                Popular Post Title
              </h2>

              {/* Description */}
              <p className="text-gray-700 mb-4">
                This is a brief description of the popular post. It gives a
                preview of the content. To learn more about this topic, click
                the read more button below.
              </p>

              {/* Read More Button */}
              <button className="text-blue-500 font-medium hover:underline mb-4">
                Read More
              </button>

              {/* Category Name */}
              <div className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Category:</span> Vegetable
              </div>

              {/* Author Profile */}
              <div className="flex items-center">
                <Image
                  src={user} // Replace with author profile image
                  width={30}
                  height={30}
                  alt="Author"
                  className="w-14 h-14 rounded-full mr-3"
                />
                <div className="text-sm">
                  <p className="font-medium">John Doe</p>
                  <p className="text-gray-500">Jan 20, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <div className="h-screen overflow-auto scroll-b w-[350px] hidden lg:block hide-scrollbar  px-5 border shadow-lg">
        <h3 className="font-semibold text-lg md:text-xl text-center py-3">
          Your Posts
        </h3>
        <div className="min-h-screen w-full">
          <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Image with zoom effect */}
            <div className="relative group">
              <Image
                width={500}
                height={500}
                src={vegetable}
                alt="Category"
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Card content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">Vegetable Category</h2>
              <hr className="my-2" />
              <div className="flex items-center space-x-3 mt-2">
                {/* Like and Dislike Buttons */}
                <button className="flex items-center text-sm text-gray-600">
                  <AiTwotoneLike className="text-2xl" />
                  120
                </button>
                <button className="flex items-center text-sm text-gray-600">
                  <AiTwotoneDislike className="text-2xl" />
                  15
                </button>
              </div>

              {/* User Profile and Date */}
              <div className="flex items-center mt-4">
                <Image
                  src={user}
                  width={50}
                  height={50}
                  alt="User Avatar"
                  className="w-15 h-15 rounded-full mr-3"
                />
                <div className="text-sm">
                  <p className="font-medium">John Doe</p>
                  <p className="text-gray-500">Jan 20, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeedBackPage;
