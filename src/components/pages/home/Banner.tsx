/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import banner from "@/src/assets/images/banner.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBuilding, FaCalendarAlt, FaLeaf, FaTools } from "react-icons/fa";

const Banner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full" style={{ height: "70vh" }}>
        {/* Background Image */}
        <Image
          src={banner}
          alt="banner_image"
          layout="fill"
          objectFit="cover"
        />
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Welcome to GrowGenius
          </h1>

          {/* Paragraph */}
          <p
            className={`text-lg md:text-xl mb-6 transition-all duration-1000 delay-200 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Discover expert gardening tips, connect with fellow enthusiasts, and
            watch your garden thrive with GrowGenius.
          </p>
          <div
            className={`flex space-x-4 transition-all duration-1000 delay-500 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md font-semibold">
              Explore More
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-green-600 text-white px-6 py-3 rounded-md shadow-md font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative -mt-20 z-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 text-center relative">
              <FaLeaf className="text-green-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Gardens</h3>
              <p className="text-gray-600 text-lg mb-4">
                Get expert advice on how to design a garden.
              </p>
              <div className="inline-block">
                <Link href="#" className="text-green-500 font-semibold">
                  Read more
                </Link>
                <hr className="border-green-500 border-t-2 mt-1 w-full mx-auto" />
              </div>
              {/* Vertical Line */}
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300 hidden lg:block" />
            </div>

            {/* Card 2 */}
            <div className="p-6 text-center relative">
              <FaBuilding className="text-green-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Urban</h3>
              <p className="text-gray-600  text-lg mb-4">
                Plants are expensive and need to be looked after.
              </p>
              <div className="inline-block">
                <Link href="#" className="text-green-500 font-semibold">
                  Read more
                </Link>
                <hr className="border-green-500 border-t-2 mt-1 w-full mx-auto" />
              </div>
              {/* Vertical Line */}
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300 hidden lg:block" />
            </div>

            {/* Card 3 */}
            <div className="p-6 text-center relative">
              <FaTools className="text-green-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Maintenance</h3>
              <p className="text-gray-600  text-lg text- mb-4">
                Keep your green garden low maintenance.
              </p>
              <div className="inline-block">
                <Link href="#" className="text-green-500 font-semibold">
                  Read more
                </Link>
                <hr className="border-green-500 border-t-2 mt-1 w-full mx-auto" />
              </div>
              {/* Vertical Line */}
              <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300 hidden lg:block" />
            </div>

            {/* Card 4 */}
            <div className="p-6 text-center">
              <FaCalendarAlt className="text-green-500 text-4xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">Events</h3>
              <p className="text-gray-600  text-lg text- mb-4">
                Fun programs for adults, children, and families.
              </p>
              <div className="inline-block">
                <Link href="#" className="text-green-500 font-semibold">
                  Read more
                </Link>
                <hr className="border-green-500 border-t-2 mt-1 w-full mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
