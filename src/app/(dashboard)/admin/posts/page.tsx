/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import UserAllPosts from "@/src/components/pages/dashboard/user/UserAllPosts";
import Link from "next/link";
import React from "react";

const AdminPosts = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center text-black px-2 rounded-md">
          <h1 className="text-lg md:text-2xl font-semibold mb-2 text-center md:text-left mt-3">
            Post
          </h1>
          <Link
            className="px-3 bg-gray-400 py-2 rounded-lg"
            href={`/admin/posts/create`}
          >
            Create A Post
          </Link>
        </div>
        <div className="border bg-gray-500 rounded-lg mt-3">
          <UserAllPosts />
        </div>
      </div>
    </div>
  );
};

export default AdminPosts;
