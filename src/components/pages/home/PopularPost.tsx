/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import user from "@/src/assets/images/user.jpeg";
import vegetable from "@/src/assets/images/flower.jpeg";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";

const PopularPost = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="space-y-3 mb-10">
        <h1 className="text-4xl text-center text-green-600">
          Most Talked About
        </h1>
        <p className="text-center text-xl ">
          Explore the top-rated posts that are capturing everyone&apos;s
          attention.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6">
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

        {/* Later I will delete */}
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
  );
};

export default PopularPost;
