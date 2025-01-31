/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import { Input, Select, SelectItem } from "@heroui/react";
import { useGetCategoryQuery } from "@/src/redux/features/category/category.api";
import { useEffect } from "react";

const PostBanner = ({
  setSearchTerm,
  setCategory,
  setPremium,
  srcValue,
  category,
}: {
  category: string;
  srcValue: string;
  setSearchTerm: any;
  setCategory: any;
  setPremium: any;
}) => {
  const { data, isLoading } = useGetCategoryQuery({});
  const categories = data?.data;

  console.log(categories);

  useEffect(() => {
    setPremium(false);
  }, [srcValue, category]);

  return (
    <div className="container mx-auto py-1">
      <div className=" ">
        <div className="flex justify-center items-center">
          <Input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            className="w-full max-w-lg p-3 rounded-lg row-span-2 text-gray-800"
            placeholder="Search posts..."
          />
        </div>
        <div className="flex justify-center items-center">
          <Select
            isDisabled={isLoading}
            label="Select an animal"
            size="sm"
            className="max-w-xs"
            onChange={(e: any) => setCategory(e.target.value)}
          >
            <SelectItem key={""} value="">
              All
            </SelectItem>
            {categories?.map(
              (category: { category: string; image: string; _id: string }) => (
                <SelectItem key={category?._id} value={category?._id}>
                  {category?.category}
                </SelectItem>
              )
            )}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
