/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */

import PostDetails from "@/src/components/pages/posts/PostDetails";

const page = ({ params }: { params: any }) => {
  return (
    <div className="container mx-auto">
      <PostDetails id={params?.id} />
    </div>
  );
};

export default page;
