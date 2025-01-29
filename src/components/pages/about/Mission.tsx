/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import member from "@/src/assets/images/member.jpg";
import mission from "@/src/assets/images/mission.png";

const Mission = () => {
  return (
    <div className="">
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 pb-10">
          {/* Top-right: Image */}
          <div className="">
            <Image
              src={`${mission}`}
              width={300}
              height={300}
              alt="Top-right Image"
              className="w-full h-full object-cover rounded-l-2xl"
            />
          </div>
          {/* Top-left: Text */}
          <div className="flex justify-center items-center bg-white rounded-r-2xl">
            <div className="p-5 space-y-3">
              <h2 className="text-green-600 font-semibold text-center text-5xl">
                Our Mission
              </h2>
              <p className="text-gray-600 mt-2 text-center">
                Our mission is to inspire, empower, and connect individuals
                through innovative solutions and meaningful experiences. We
                strive to create a platform that fosters growth, creativity, and
                community, enabling everyone to achieve their goals and make a
                positive impact in the world.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 pt-16">
          {/* Top-left: Text */}
          <div className="flex justify-center items-center bg-white rounded-l-2xl">
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
              <div className="flex justify-center items-center">
                <button className="text-green-600 border border-green-700 px-4 py-2 rounded-lg">
                  More About us
                </button>
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
              className="w-full h-full object-cover rounded-r-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
