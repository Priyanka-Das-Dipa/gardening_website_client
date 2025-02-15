/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import { SlUserFollowing } from "react-icons/sl";
import { GiShadowFollower } from "react-icons/gi";
import { MdOutlinePostAdd } from "react-icons/md";
import { useAppSelector } from "@/src/redux/hooks";
import defaultImage from "@/src/assets/images/user1.jpeg";

const UserProfile = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="border-2 h-screen shadow-md">
      <div className="flex justify-center items-center py-16">
        <div>
          <Image
            alt="userImage"
            className="rounded-full size-48 object-cover"
            height={200}
            src={`${user?.profilePhoto || defaultImage}`}
            width={200}
          />
          <h1 className="text-center font-bold text-2xl">{user?.name}</h1>
          <p className="text-center text-lg py-1">
            {user?.address || "Akhaiya Kali Bari, Sylhet"}
          </p>
          <div className="space-y-2">
            <div className="border flex justify-center items-center gap-5 px-6 py-3 rounded-full shadow-md">
              <span className="flex justify-center items-center gap-1">
                <GiShadowFollower className="text-blue-600 text-xl" /> Followers
              </span>
              <span>12</span>
            </div>
            <div className="border flex justify-center items-center gap-5 px-6 py-3 rounded-full shadow-md">
              <span className="flex justify-center items-center gap-1">
                <SlUserFollowing className="text-blue-600 text-xl" /> Following
              </span>
              <span>12</span>
            </div>
            <div className="border flex justify-center items-center gap-5 px-6 py-3 rounded-full shadow-md">
              <span className="flex justify-center items-center gap-1">
                <MdOutlinePostAdd className="text-blue-600 text-xl" /> Followers
              </span>
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
