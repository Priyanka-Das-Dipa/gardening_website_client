/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import UserAllPosts from "@/src/components/pages/dashboard/user/UserAllPosts";
import Link from "next/link";
import React from "react";

const CreatePost = () => {
  return (
    <div>
      <div className="flex justify-between items-center  text-black px-2 rounded-md">
        <h1 className="text-lg md:text-2xl font-semibold mb-2 text-center md:text-left mt-3">
          Post
        </h1>
        <Link
          className="px-3 bg-purple-700 text-white py-2 rounded-lg"
          href={`/user/create-post/create`}
        >
          Create A Post
        </Link>
      </div>
      <div className="border rounded-lg mt-3">
        <UserAllPosts />
      </div>
    </div>
  );
};

export default CreatePost;
