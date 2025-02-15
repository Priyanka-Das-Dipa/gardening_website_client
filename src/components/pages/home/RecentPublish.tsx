/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import user from "@/src/assets/images/user.jpeg";
import vegetable from "@/src/assets/images/fruit.jpeg";
import Link from "next/link";
import { useGetAllPostQuery } from "@/src/redux/features/post/post.api";

const RecentPublish = () => {
  const { data } = useGetAllPostQuery({});

  // Get only the first 4 posts
  const recentPosts = data?.data?.slice(0, 4) || [];

  return (
    <div className="container mx-auto my-28">
      <div className="space-y-3 mb-10">
        <h1 className="text-4xl text-center font-bold text-green-600">
          Recent Highlights
        </h1>
        <p className="text-center text-xl">
          Be the first to know what&apos;s happening—check out our recent posts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8">
        {recentPosts.map((post: any) => (
          <div
            key={post._id}
            className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex"
          >
            <div className="w-1/2">
              <img
                src={post?.category?.image}
                className="w-full h-[325px] object-cover"
                alt="Post Thumbnail"
              />
            </div>
            <div className="w-2/3 p-4">
              <h2 className="text-2xl font-semibold mb-2">{post?.title}</h2>
              <p className="text-gray-700 mb-4 line-clamp-3">
                This is a brief description of the popular post. It gives a
                preview of the content. To learn more about this topic, click
                the read more button below.
              </p>
              <Link href={`/post/${post?._id}`}>
                <button className="text-blue-500 font-medium hover:underline mb-4">
                  Read More
                </button>
              </Link>
              <div className="text-sm text-gray-600 mb-4">
                <span className="font-semibold">Category:</span>{" "}
                {post?.category?.category}
              </div>
              <div className="flex items-center">
                <Image
                  src={post?.userId?.profilePhoto || "/user.jpeg"}
                  width={30}
                  height={30}
                  alt="Author"
                  className="w-14 h-14 rounded-full mr-3"
                />
                <div className="text-sm">
                  <p className="font-medium">{post?.userId?.name}</p>
                  <p className="text-gray-500">Jan 20, 2025</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPublish;
