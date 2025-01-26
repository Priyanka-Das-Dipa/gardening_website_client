/* eslint-disable prettier/prettier */

import AllPost from "@/src/components/pages/posts/AllPost";
import PostBanner from "@/src/components/pages/posts/PostBanner";

const page = () => {
  return (
    <div>
      <PostBanner/>
      <AllPost />
    </div>
  );
};

export default page;
