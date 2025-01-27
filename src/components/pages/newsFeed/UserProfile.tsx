/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import user from "@/src/assets/images/user.jpeg";
import Image from "next/image";
import { SlUserFollowing } from "react-icons/sl";
import { GiShadowFollower } from "react-icons/gi";
import { MdOutlinePostAdd } from "react-icons/md";

const UserProfile = () => {
  return (
    <div className="border-2 h-screen shadow-md">
      <div className="flex justify-center items-center py-16">
        <div>
          <Image
            src={user}
            alt="userImage"
            width={200}
            height={200}
            className="rounded-full object-cover"
          />
          <h1 className="text-center font-bold text-2xl">Priyanka Das Dipa</h1>
          <p className="text-center text-lg py-1">Akhaliya KaliBari, Sylhet</p>
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
