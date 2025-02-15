/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useLocalUser } from "@/src/context/user.provider";
import {
  useHandleCommentMutation,
  useHandleVotesMutation,
} from "@/src/redux/features/post/post.api";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Swal from "sweetalert2";
import GForm from "../../allInputs/Form";
import GTaxtArea from "../../allInputs/TaxtArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentValidationSchema } from "@/src/validation/validationSchema";
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

const PostComment = ({
  postId,
  activity,
  upVotes,
  downVotes,
}: {
  downVotes: number;
  upVotes: number;
  postId: string;
  activity: { userId: string; comments: string[]; votes: boolean }[];
}) => {
  const [handlevotes] = useHandleVotesMutation();
  const [addComment] = useHandleCommentMutation();
  const { user: localUser } = useLocalUser();
  // const myActivity = activity.find(
  //   (item: any) => item?.userId?._id == localUser?._id
  // );
  // console.log(localUser);
  const router = useRouter();
  // handle Like Button
  const handleVotes = async (votes: boolean) => {
    if (!localUser) {
      Swal.fire({
        title: "You Have to login first",
        text: "If you want to interact with this post? Please login You can cancel as well",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
    } else {
      const res = (await handlevotes({
        postId: postId,
        userId: localUser?._id,
        votes,
      })) as any;

      if (res?.data?.success) {
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.error?.data?.message);
      }
    }
  };

  const handleComment: SubmitHandler<FieldValues> = async (data) => {
    if (!localUser) {
      Swal.fire({
        title: "You Have to login first",
        text: "If you want to interact with this post? Please login You can cancel as well",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
    } else {
      const toastId = toast.loading("Commenting...");
      // check if the user is logged in

      console.log("Posting comment:", {
        postId,
        userId: localUser?._id,
        comment: data?.comment,
      });
      const res = (await addComment({
        postId: postId,
        userId: localUser?._id,
        comment: data?.comment,
      })) as any;
      console.log("From Comment ", res);

      if (res?.data?.success) {
        toast.success("Your comment added Successfully", { id: toastId });
      } else if (res?.error) {
        toast.error("Somethin went wrong", { id: toastId });
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col space-x-8">
        <h3 className="mb-4 font-roboto_slab text-center md:text-lg">
          We appreciate your valuable feedback, which enables us to create even
          better experiences.
        </h3>

        <div className="flex flex-col gap-5">
          {/* Input for typing a comment */}
          <GForm
            onSubmit={handleComment}
            resolver={zodResolver(commentValidationSchema)}
          >
            <GTaxtArea
              type="text"
              className="flex-grow border rounded-l-md p-2 w-full text-gray-700 focus:outline-none bg-white"
              placeholder="Write a comment..."
              label="Comment"
              name="comment"
            />
            {/* Button to submit the comment */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full mt-5"
              // onClick={handleAddComment}
            >
              Comment
            </button>
          </GForm>
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-stretch gap-2 mb-5 ml-5">
              <button
                className="flex items-center text-black text-opacity-50 hover:text-blue-600 disabled:text-secondary"
                onClick={() => handleVotes(true)}
              >
                <AiOutlineLike className="mr-2" size={40} />
              </button>

              <button
                className="flex items-center text-black text-opacity-50 hover:text-blue-600 disabled:text-secondary"
                onClick={() => handleVotes(false)}
              >
                <AiOutlineDislike className="mr-2" size={40} />
              </button>
            </div>
            <div className="flex items-center justify-stretch gap-2 mb-5 ml-5">
              <button className="flex items-center  text-opacity-50 text-blue-700 disabled:text-secondary">
                <AiFillLike className="mr-2" size={40} />
              </button>
              {upVotes}

              <button className="flex items-center  text-opacity-50 text-blue-700 disabled:text-secondary">
                <AiFillDislike className="mr-2" size={40} />
              </button>
              {downVotes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
