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
    <div className="container mx-auto py-1">
      <div className=" ">
        <div className="flex justify-center items-center">
          <Input
            type="text"
            className="w-full max-w-lg p-3 rounded-lg row-span-2 text-gray-800"
            placeholder="Search posts..."
          />
        </div>
        <div className="flex justify-center items-center">
          <Select className="max-w-xs" label="Select a category">
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
