/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import user from "@/src/assets/images/user.jpeg";
import vegetable from "@/src/assets/images/fruit.jpeg";

const RecentPublish = () => {

  
  return (
    <div className="container mx-auto my-28">
      <div className="space-y-3 mb-10">
        <h1 className="text-4xl text-center text-green-600">
          Recent Highlights
        </h1>
        <p className="text-center text-xl">
          Be the first to know what&apos;s happening—check out our recent posts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
        
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
          {/* Left side: Image */}
          <div className="w-1/2">
            <Image
              alt="Popular Post"
              className="w-full h-full object-cover"
              height={500}
              src={vegetable} // Replace with your image
              width={500}
            />
          </div>

          {/* Right side: Content */}
          <div className="w-2/3 p-4">
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2">Popular Post Title</h2>

            {/* Description */}
            <p className="text-gray-700 mb-4">
              This is a brief description of the popular post. It gives a
              preview of the content. To learn more about this topic, click the
              read more button below.
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
                alt="Author"
                className="w-14 h-14 rounded-full mr-3"
                height={30}
                src={user} // Replace with author profile image
                width={30}
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

export default RecentPublish;
