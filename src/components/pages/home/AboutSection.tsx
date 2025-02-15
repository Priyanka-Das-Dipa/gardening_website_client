/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import member from "@/src/assets/images/member.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="bg-red-50/25">
      <div className="container mx-auto py-24">
        <div className="space-y-3 mb-16">
          <h1 className="text-4xl font-bold text-center text-green-600">
            About Us
          </h1>
          <p className="text-center text-xl ">
            Explore the top-rated posts that are capturing everyone&apos;s
            attention.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Top-left: Text */}
          <div className="flex justify-between items-left">
            <div className="p-5 space-y-3">
              <h2 className="text-green-600 font-semibold text-center text-5xl">
                Why choose us?
              </h2>
              <p className="text-gray-600 mt-2 text-center">
                The GrowGenius is a full-service grounds care company. Our
                established systems allow us to deliver industry-leading lawn
                care and landscape solutions to commercial and residential
                clients. Built on a family tradition of caring, we are driven by
                a passion to exceed customer expectations and consistently
                deliver client satisfaction.
              </p>
              <p className="text-gray-600 mt-2 text-center">
                Built on a family tradition of caring, we are driven by a
                passion for excellence and a commitment to exceeding customer
                expectations. We take pride in offering personalized services,
                ensuring that every lawn, garden, and landscape we maintain
                thrives in beauty and health.
              </p>
              <p className="text-gray-600 mt-2 text-center">
                At GrowGenius, we believe that a well-maintained outdoor space
                enhances not only the property’s appeal but also its value and
                sustainability. Our team of skilled professionals uses advanced
                techniques and eco-friendly practices to create lush, vibrant
                landscapes that stand the test of time.
              </p>
              <div className="flex justify-center items-center">
                <Link href="/about">
                  <button className="text-green-600 border border-green-700 px-4 py-2 rounded-lg">
                    More About us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Top-right: Image */}
          <div className="">
            <Image
              src={member}
              width={300}
              height={300}
              alt="Top-right Image"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
