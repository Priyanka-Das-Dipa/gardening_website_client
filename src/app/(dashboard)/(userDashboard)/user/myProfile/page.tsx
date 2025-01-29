/* eslint-disable import/order */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
"use client";
import ProfilePage from "@/src/components/pages/profile/ProfilePage";
import React from "react";

const MyProfilePage = () => {
  return (
    <div className="max-h-screen overflow-y-auto hide-scrollbar">
      <ProfilePage />
    </div>
  );
};

export default MyProfilePage;
