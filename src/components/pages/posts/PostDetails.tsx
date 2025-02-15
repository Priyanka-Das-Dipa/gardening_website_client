/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use client";

import { useGetPostByIdQuery } from "@/src/redux/features/post/post.api";
import PostComment from "./PostComment";
import Image from "next/image";
import { Accordion, AccordionItem } from "@heroui/react";

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
      <div className=" max-w-3xl container mx-auto">
        <h2 className="font-semibold md:text-xl mb-3">Comments</h2>
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="View All Comments"
            title="View All Comments"
            className="border px-5"
          >
            <div>
              {post?.activity?.map(
                (item: any) =>
                  item?.comment?.length > 0 &&
                  item?.comment?.map((comment: string, idx: number) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-lg p-3 mt-4 flex gap-4"
                    >
                      <Image
                        src={item?.userId?.profilePhoto}
                        height={100}
                        width={100}
                        alt={item?.userId?.name}
                        className="border p-[1px] size-20 rounded-full"
                      />
                      <div className="w-full">
                        <h2 className="font-semibold md:text-lg">
                          <span>{item?.userId?.name}</span>
                        </h2>
                        <h2 className="font-base md:text-lg">
                          <span>{item?.userId?.role}</span>
                        </h2>
                        <div className="p-1 bg-gray-50">
                          <p className="mt-1 text-lg">{comment}</p>
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </AccordionItem>
        </Accordion>
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
