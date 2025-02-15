/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import banner from "@/src/assets/images/contact.jpg";
import Image from "next/image";

const ContactBanner = () => {
  return (
    <div className="relative w-full" style={{ height: "70vh" }}>
      {/* Background Image */}
      <Image
        src={banner}
        alt="contact_image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Overlay */}
      <div className="absolute container mx-auto inset-0 flex items-center justify-start pl-8 text-white text-6xl font-bold uppercase">
        Contact US
      </div>
    </div>
  );
};

export default ContactBanner;
