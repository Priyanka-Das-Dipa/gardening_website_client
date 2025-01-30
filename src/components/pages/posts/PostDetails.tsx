/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use client";

import { useGetPostByIdQuery } from "@/src/redux/features/post/post.api";

const PostDetails = ({ id }: { id: string }) => {
  const { data } = useGetPostByIdQuery(`${id}`);
  const post = data?.data;
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="items-center md:items-start gap-6">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              {post?.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: post?.post }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
