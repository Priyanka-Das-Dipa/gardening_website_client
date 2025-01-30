/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
"use client";
import { Tpost } from "@/src/types";
import Loading from "../../shared/Loading";
import NoDataFound from "../../shared/NoDataFound";
import {
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import Link from "next/link";

const UsersPosts = ({
  postData,
  isLoading,
}: {
  postData: Tpost[];
  isLoading: boolean | undefined;
}) => {
  const post = postData;

  return (
    <div>
      <h2 className="my-5 text-lg md:text-xl text-center font-bold">
        Your Posts
      </h2>
      <Divider className="mb-5" />
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
            </TableHeader>
            <TableBody>
              {post?.map((item: Tpost, idx: number) => (
                <TableRow key={`${idx}`}>
                  <TableCell className="font-semibold">{idx + 1}</TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default UsersPosts;
