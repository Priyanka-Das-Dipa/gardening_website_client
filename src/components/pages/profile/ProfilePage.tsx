/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import { useGetUserByEmailQuery } from "@/src/redux/features/auth/auth.api";
import { useGetPostByUserIdQuery } from "@/src/redux/features/post/post.api";
import Image from "next/image";
import UsersPosts from "./UsersPosts";
import { useAppSelector } from "@/src/redux/hooks";

// const stripePromise = loadStripe(process.env.NEXT_Publishable_Key as string);
const ProfilePage = () => {
  const user = useAppSelector((state) => state.auth.user);
  const { data: postData } = useGetPostByUserIdQuery(`${user?._id}`);
  const { data } = useGetUserByEmailQuery(`${user?.email}`);
  const userData = data?.data;
  const post = postData?.data;

  return (
    <>
      <div className="container mx-auto">
        <div className=" flex flex-col md:flex-row gap-8 min-h-screen font-roboto_slab pb-10">
          <div className="md:w-[30%]  px-2 lg:px-5 pt-4 rounded-md relative">
            <div className="flex flex-col">
              <div className="flex justify-center items-center mt-5">
                <Image
                  alt="user Image"
                  className="md:size-[250px] size-[150px] object-bottom rounded-full border-2 p-2 shadow-lg"
                  height={500}
                  src={user?.profilePhoto || "/user.JPEG"}
                  width={400}
                />
              </div>
              {/* more info */}
              <div className="p-3 md:p-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm md:text-lg font-medium">
                    Name: {user?.name}
                  </span>
                  <span className="text-sm md:text-lg font-medium">
                    Email: {user?.email}
                  </span>
                  <span className="text-sm md:text-lg font-medium">
                    Role: {user?.role}
                  </span>
                  <span className="text-sm md:text-lg font-medium">
                    Phone: {user?.phoneNumber}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-md md:border-l p-2 md:p-5">
            <UsersPosts postData={post} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
