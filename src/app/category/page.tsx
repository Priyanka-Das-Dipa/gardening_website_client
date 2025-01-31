"use client";
import PostCards from "@/src/components/pages/posts/PostCards";
import { useGetAllPostQuery } from "@/src/redux/features/post/post.api";
import { Tpost } from "@/src/types";

const CategoryPost = ({ params }: any) => {
  const { data, isLoading } = useGetAllPostQuery({
    category: params?.categoryName,
  });
  const post = data?.data;
  console.log(post);

  return (
    <div className="container mx-auto my-20">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {post?.map((item: Tpost, idx: number) => (
            <PostCards post={item} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPost;
