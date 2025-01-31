/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
"use client";
import Loading from "@/src/components/shared/Loading";
import NoDataFound from "@/src/components/shared/NoDataFound";
import { useLocalUser } from "@/src/context/user.provider";
import {
  useDeletePostMutation,
  useGetPostByUserIdQuery,
} from "@/src/redux/features/post/post.api";
import { Tpost } from "@/src/types";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";

const UserAllPosts = () => {
  const [deletePost] = useDeletePostMutation();
  const EditPostModal = dynamic(
    () => import("@/src/components/modals/PostEditModal"),
    {
      ssr: false,
    }
  );

  const { user, isLoading } = useLocalUser();
  const { data: postData } = useGetPostByUserIdQuery(`${user?._id}`);
  const post = postData?.data;

  const handleDeletePost = (postId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = (await deletePost(postId)) as any;
        if (res?.data?.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: `${res?.error?.data?.message || "something went wrong"}`,
            text: "Items not deleted",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex-1 md:border-l p-2 md:p-5  bg-gray-300 rounded-lg">
          <div>
            <h2 className="font-semibold text-lg md:text-xl my-3">
              Your Posts
            </h2>
            {isLoading ? (
              <Loading />
            ) : post?.length < 1 ? (
              <NoDataFound />
            ) : (
              <div>
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn className="">NO</TableColumn>
                    <TableColumn className="">Title</TableColumn>
                    <TableColumn className="">Up votes</TableColumn>
                    <TableColumn className="">Down Votes</TableColumn>
                    <TableColumn className="">View</TableColumn>
                    <TableColumn className="text-center">Actions</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {post?.map((item: Tpost, idx: number) => (
                      <TableRow key={`${idx}`}>
                        <TableCell className="font-semibold">
                          {idx + 1}
                        </TableCell>
                        <TableCell className="font-semibold">
                          {item.title.slice(0, 30)}
                        </TableCell>
                        <TableCell className="md:pl-10">
                          {item?.upVotes?.length}
                        </TableCell>
                        <TableCell className="md:pl-10">
                          {item?.downVotes?.length}
                        </TableCell>
                        <TableCell>
                          <Link
                            href={`/post/${item?._id}`}
                            className="bg-gray-100 px-2 py-1 rounded-md hover:bg-gray-300"
                          >
                            View
                          </Link>
                        </TableCell>
                        <TableCell className="flex justify-center gap-4">
                          <EditPostModal post={item} />
                          <Button onPress={() => handleDeletePost(item?._id)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserAllPosts;
