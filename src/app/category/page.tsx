/* eslint-disable prettier/prettier */
"use client";
import PostCards from "@/src/components/pages/posts/PostCards";
import { useGetAllPostQuery } from "@/src/redux/features/post/post.api";
import { Tpost } from "@/src/types";

const CategoryPost = ({ params }: any) => {
  const { data, isLoading } = useGetAllPostQuery({
    category: params?.categoryName,
  });
  const post = data?.data;

  return (
    <>
      <h1 className="text-3xl font-bold text-center py-5 underline">
        All Categories Data
      </h1>

      <div className="container mx-auto my-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {post?.map((item: Tpost, idx: number) => (
              <PostCards key={idx} post={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryPost;
