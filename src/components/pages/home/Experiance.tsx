/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import left from "@/src/assets/images/plants-left.png";
import right from "@/src/assets/images/plants-right.png";
import Link from "next/link";
const Experiance = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="space-y-5 ">
        <h1 className="text-4xl font-bold text-center text-green-600">
          Crafting Green Spaces for a Better Tomorrow!
        </h1>
        <p className="text-center text-xl pt-3">
          At The Gardeny, we combine creativity and sustainability to <br />
          design outdoor environments that align with your goals and
          nature&apos;s harmony.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 justify-center items-center pt-14">
        <div className="p-6 text-center relative ">
          <h1 className="text-7xl text-green-600">40</h1>
          <h3 className="text-xl font-bold mb-2">YEARS</h3>
          <h3 className="text-lg font-bold mb-2">Experience</h3>
          <p className="text-gray-600 text-lg mb-4">
            Delivering solutions for your garden.
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <Image
            alt="leaf_image"
            className="object-contain" // Ensure the image fits within the container
            height={120}
            src={left}
            width={120}
          />
        </div>
        <div className="p-6 text-center relative ">
          <h1 className="text-7xl text-green-600">30</h1>
          <h3 className="text-xl font-bold mb-2">SPECIALISTS</h3>
          <h3 className="text-lg font-bold mb-2">In landscaping design</h3>
          <p className="text-gray-600 text-lg mb-4">
            We gather the best talent, creating the best specialist team.
          </p>
          <Link href="/about">
            <button className="border border-green-600 px-4 rounded-lg py-1">
              About Us
            </button>
          </Link>
        </div>
        <div className=" flex justify-center items-center">
          <Image
            alt="leaf_image"
            className="object-contain"
            height={120}
            src={right}
            width={120}
          />
        </div>
        <div className="p-6 text-center relative ">
          <h1 className="text-7xl text-green-600">10</h1>
          <h3 className="text-xl font-bold mb-2">AWARDS</h3>
          <h3 className="text-lg font-bold mb-2">Winning Company</h3>
          <p className="text-gray-600 text-lg mb-4">
            Best garden designs works for your inspiration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
