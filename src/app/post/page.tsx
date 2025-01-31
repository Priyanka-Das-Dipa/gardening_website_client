/* eslint-disable prettier/prettier */

import AllPost from "@/src/components/pages/posts/AllPost";
import PostBanner from "@/src/components/pages/posts/PostBanner";
import { useGetAllPostQuery } from "@/src/redux/features/post/post.api";

const Postpage = () => {
  // const {data} = useGetAllPostQuery()
  // console.log(data);
  return (
    <div>
      {/* <PostBanner/> */}
      <AllPost />
    </div>
  );
};

export default Postpage;
