/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import banner from "@/src/assets/images/member.jpg";

const AboutBanner = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      <div
        className="w-full relative"
        style={{ height: "70vh", position: "relative" }}
      >
        {/* Background Image */}
        <Image
          src={banner}
          alt="banner_image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex  items-center justify-center text-center text-white pb-5">
          <div>
            <h1
              className={`text-4xl md:text-6xl font-extrabold mb-4 transition-all duration-1000 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Discover the Essence of Who We Are
            </h1>
            <p
              className={`text-lg md:text-xl font-medium mb-6 transition-all duration-1000 delay-200 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Explore our journey, values, and vision as we strive to make a
              meaningful impact in everything we do.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;
