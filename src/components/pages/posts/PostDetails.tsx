/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use client";

import { useGetPostByIdQuery } from "@/src/redux/features/post/post.api";
import PostComment from "./PostComment";

const PostDetails = ({ id }: { id: string }) => {
  const { data } = useGetPostByIdQuery(`${id}`);
  const post = data?.data;
  return (
    <div className="">
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="w-full md:w-1/2 text-center shadow-lg rounded-lg p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {post?.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: post?.post }} />
        </div>
      </div>

      <div className="p-3 md:p-5 border mt-5 rounded-lg mx-auto max-w-3xl mb-5">
        <PostComment
          activity={post?.activity}
          postId={post?._id}
          upVotes={post?.upVotes?.length}
          downVotes={post?.downVotes?.length}
        />
      </div>
    </div>
  );
};

export default PostDetails;
