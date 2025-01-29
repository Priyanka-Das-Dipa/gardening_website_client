/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
// import dynamic from "next/dynamic";

// const PostCreatPage = () => {
//   const CreatePost = dynamic(
//     () => import("@/src/components/pages/posts/CreateAPost"),
//     {
//       ssr: false,
//     }
//   );
//   return <CreatePost />;
// };

// export default PostCreatPage;


const CreatePostPage = () => {
    return (
        <div>
            <h1>This is Create post page</h1>
        </div>
    );
};

export default CreatePostPage;
