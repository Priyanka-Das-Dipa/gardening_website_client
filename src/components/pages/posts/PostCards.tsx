/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import user from "@/src/assets/images/user.jpeg";
import Link from "next/link";

const extractFirstImage = (html: string) => {
  const imgTagMatch = html.match(/<img[^>]+src="([^">]+)"/);
  console.log("Image Tag Match", imgTagMatch);
  return imgTagMatch ? imgTagMatch[1] : null;
};

interface Post {
  _id: string;
  title: string;
  post: string;
  userId: any;
  category: {
    category: string;
  };
}

interface PostSection4Props {
  post: Post;
}

const extractTextFromHTML = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const truncateText = (text: string, limit: number) => {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
};

const PostCards: React.FC<PostSection4Props> = ({ post }) => {
  const firstImage = extractFirstImage(post?.post);
  const postOwner = post?.userId;
  const plainText = extractTextFromHTML(post?.post);
  const shortText = truncateText(plainText, 400);

  return (
    <div>
    
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex min-h-[300px] h-auto">
        <div className="w-full p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{post?.title}</h2>
            <p className="text-gray-700 mb-4 line-clamp-3">{shortText}</p>
          </div>

          {plainText.length > 100 && (
            <Link href={`/post/${post._id}`}>
              <button className="text-blue-500 font-medium hover:underline mb-4">
                Read More
              </button>
            </Link>
          )}

          <div className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">Category:</span>{" "}
            {post?.category?.category}
          </div>

          <div className="flex items-center">
            <Image
              alt="Author"
              className="w-14 h-14 rounded-full mr-3"
              height={30}
              src={postOwner?.profilePhoto || user}
              width={30}
            />
            <div className="text-sm">
              <p className="font-medium">{postOwner?.name}</p>
              <p className="text-gray-500">
                {postOwner?.createdAt
                  ? new Date(postOwner.createdAt).toDateString()
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
