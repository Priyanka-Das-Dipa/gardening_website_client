/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import { useLocalUser } from "@/src/context/user.provider";
import { useGetUserByEmailQuery } from "@/src/redux/features/auth/auth.api";
import { useGetPostByUserIdQuery } from "@/src/redux/features/post/post.api";
import { Tpost } from "@/src/types";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../../shared/Loading";
import Image from "next/image";
import moment from "moment";
import UsersPosts from "./UsersPosts";

const stripePromise = loadStripe(process.env.NEXT_Publishable_Key as string);
const ProfilePage = () => {
  const { user, isLoading } = useLocalUser();
  console.log("USer", user);
  const { data: postData } = useGetPostByUserIdQuery(`${user?._id}`);
  const { data } = useGetUserByEmailQuery(`${user?.email}`);
  console.log(data);
  const userData = data?.data;
  console.log("Helllo I am on USerdata", userData);
  const post = postData?.data;

  const isUpVotesTrue = post?.some(
    (item: Tpost) => item.upVotes > item?.downVotes
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto">
          <div className=" flex flex-col md:flex-row gap-8 min-h-screen font-roboto_slab pb-10">
            <div className="md:w-[30%]  px-2 lg:px-5 pt-4 rounded-md relative">
              <div className="flex flex-col">
                <div className="flex justify-center items-center mt-5">
                  <Image
                    src={`${data?.data?.profilePhoto || ""}`}
                    alt="user Image"
                    width={400}
                    height={500}
                    className="md:size-[250px] size-[150px] object-bottom rounded-full border-2 p-2 shadow-lg"
                  />
                </div>
                {/* more info */}
                <div className="p-3 md:p-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm md:text-lg font-medium">
                      Name: {userData?.name}
                    </span>
                    <span className="text-sm md:text-lg font-medium">
                      Email: {userData?.email}
                    </span>
                    <span className="text-sm md:text-lg font-medium">
                      Role: {userData?.role}
                    </span>
                    <span className="text-sm md:text-lg font-medium">
                      Phone: {userData?.phoneNumber}
                    </span>
                    <h5 className="text-sm md:text-lg font-medium">
                      Address: {userData?.address}
                    </h5>
                    <span className="text-sm md:text-lg font-medium">
                      Follower: {userData?.follower?.length}
                    </span>
                    <span className="text-sm md:text-lg font-medium">
                      Following: {userData?.following?.length}
                    </span>
                    <span className="text-sm md:text-lg font-semibold">
                      Joined: {moment(userData?.createdAt).format("MMM Do YY")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-md md:border-l p-2 md:p-5">
              <UsersPosts postData={post} isLoading={isLoading} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
