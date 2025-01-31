/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use client";
import dynamic from "next/dynamic";

const page = () => {
  const CreatePost = dynamic(
    () => import("@/src/components/pages/posts/CreateAPost"),
    {
      ssr: false,
    }
  );
  return <CreatePost />;
};

export default page;

