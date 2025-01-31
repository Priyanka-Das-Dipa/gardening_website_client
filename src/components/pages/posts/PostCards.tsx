// /* eslint-disable prettier/prettier */
// "use client";

// import Image from "next/image";
// import vegetable from "@/src/assets/images/flower.jpeg";
// import user from "@/src/assets/images/user.jpeg";

// const extractFirstImage = (html: string) => {
//   const imgTagMatch = html.match(/<img[^>]+src="([^">]+)"/);

//   return imgTagMatch ? imgTagMatch[1] : null;
// };

// interface Post {
//   _id: string;
//   title: string;
//   post: string;
//   userId: any;
//   category: {
//     category: string;
//   };
// }

// interface PostSection4Props {
//   post: Post;
// }

// const PostCards: React.FC<PostSection4Props> = ({ post }) => {
//   const firstImage = extractFirstImage(post?.post);
//   const postOwner = post?.userId;

//   console.log(firstImage, postOwner);
//   console.log("this is coming from post page", post);

//   return (
//     <div>
//       <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
//         <div className="w-1/2">
//           <Image
//             width={500}
//             height={500}
//             src={vegetable}
//             alt="Popular Post"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div className="w-2/3 p-4">
//           <h2 className="text-2xl font-semibold mb-2">Popular Post Title</h2>
//           <p className="text-gray-700 mb-4">
//             This is a brief description of the popular post. It gives a preview
//             of the content. To learn more about this topic, click the read more
//             button below.
//           </p>
//           <button className="text-blue-500 font-medium hover:underline mb-4">
//             Read More
//           </button>
//           <div className="text-sm text-gray-600 mb-4">
//             <span className="font-semibold">Category:</span> Vegetable
//           </div>
//           <div className="flex items-center">
//             <Image
//               src={user}
//               width={30}
//               height={30}
//               alt="Author"
//               className="w-14 h-14 rounded-full mr-3"
//             />
//             <div className="text-sm">
//               <p className="font-medium">John Doe</p>
//               <p className="text-gray-500">Jan 20, 2025</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCards;
