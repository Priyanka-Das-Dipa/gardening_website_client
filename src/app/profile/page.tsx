/* eslint-disable prettier/prettier */
import dynamic from "next/dynamic";
import React from "react";

const Profile = () => {
  const ProfilePage = dynamic(
    () => import("@/src/components/pages/profile/ProfilePage")
  );

  return <div>
    <ProfilePage/>
  </div>;
};

export default Profile;
