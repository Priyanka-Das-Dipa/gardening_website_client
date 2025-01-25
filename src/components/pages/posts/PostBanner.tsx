/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import { Input, Select, SelectItem } from "@heroui/react";
import Image from "next/image";
import banner from "@/src/assets/images/postBanner.jpg";

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];
const PostBanner = () => {
  return (
    <div className="relative w-full" style={{ height: "70vh" }}>
      <Image layout="fill" objectFit="cover" alt="banner_image" src={banner} />
      <div>
        <Input
          type="text"
          className="w-full max-w-lg p-3 rounded-lg shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search posts..."
        />
        <Select className="max-w-xs" label="Select an animal">
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default PostBanner;
