/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use client";
import { useLocalUser } from "@/src/context/user.provider";
import {
  useGetAllUserQuery,
  useGetUserByEmailQuery,
} from "@/src/redux/features/auth/auth.api";
import { useGetTotalPostDocumentQuery } from "@/src/redux/features/post/post.api";
import { BsFillFilePostFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { RiUserSharedLine, RiUserStarLine } from "react-icons/ri";
import { GrLike } from "react-icons/gr";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";
import { PieChart } from "react-minimal-pie-chart";

const DashboardTable = () => {
  const { data: users } = useGetAllUserQuery({});
  const { data: totalPost } = useGetTotalPostDocumentQuery({});
  const { user } = useLocalUser();

  const { data } = useGetUserByEmailQuery(`${user?.email}`);
  const remoteUser = data?.data;

  const cartData = [
    { title: "User", value: 50, color: "#B38BDB" },
    { title: "Post", value: 15, color: "#C7A8E2" },
    { title: "Follower", value: 25, color: "#D9C2EB" },
  ];
  const RechartData = [
    {
      name: "User",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Follower",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Posts",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Liked",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Following",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-gradient-to-r shadow rounded-lg border-2 bg-white border-purple-700 text-black py-12 px-3 md:px-6">
          {
            <h2 className="md:text-lg font-semibold text-center flex justify-center items-center gap-2">
              <span>
                <FaUsers className="text-3xl text-purple-700" />
              </span>
              Total User - {users?.data?.length}
            </h2>
          }
        </div>
        <div className="bg-gradient-to-r shadow rounded-lg  border-purple-700 text-black border-2 bg-white py-12">
          {
            <h2 className="md:text-lg font-semibold text-center flex justify-center items-center gap-2">
              <span>
                <BsFillFilePostFill className="text-3xl text-purple-700" />
              </span>
              Total Post - {totalPost?.data}
            </h2>
          }
        </div>
        <div className="bg-gradient-to-r shadow rounded-lg  border-purple-700 text-black border-2 bg-white py-12">
          {
            <h2 className="md:text-lg font-semibold text-center  flex justify-center items-center gap-2">
              <span>
                <RiUserSharedLine className="text-3xl text-purple-700" />
              </span>
              Total Follower - {remoteUser?.follower?.length}
            </h2>
          }
        </div>
        <div className="bg-gradient-to-r shadow rounded-lg  border-purple-700 text-black border-2 bg-white py-12">
          {
            <h2 className="md:text-lg font-semibold text-center  flex justify-center items-center gap-2">
              <span>
                <RiUserStarLine className="text-3xl text-purple-700" />
              </span>
              Total Following - {remoteUser?.following?.length}
            </h2>
          }
        </div>
        <div className="bg-gradient-to-r shadow rounded-lg  border-purple-700 text-black border-2 bg-white py-12">
          {
            <h2 className="md:text-lg font-semibold text-center  flex justify-center items-center gap-2">
              <span>
                <GrLike className="text-2xl text-purple-700" />
              </span>
              Liked Items - {remoteUser?.upVotesItem?.length}
            </h2>
          }
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <div className=" flex-1 ">
          <PieChart className="max-w-96 pb-5 mx-auto" data={cartData} />
        </div>
        <div className="border flex-1 rounded py-5 border-basePrimary">
          <div className="space-y-6">
            <LineChart
              width={500}
              height={300}
              data={RechartData}
              className="max-h-[400px]"
            >
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
