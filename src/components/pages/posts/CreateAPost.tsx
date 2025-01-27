/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";

import { useLocalUser } from "@/src/context/user.provider";
import { useGetCategoryQuery } from "@/src/redux/features/category/category.api";
import { useMakePostMutation } from "@/src/redux/features/post/post.api";
import JoditEditor from "jodit-react";
import GForm from "../../allInputs/Form";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import GInput from "../../allInputs/Input";
import { Button, Checkbox, Select, SelectItem } from "@heroui/react";
import { postValidation } from "@/src/validation/validationSchema";

const CreateAPost = () => {
  const router = useRouter();
  const [createPost] = useMakePostMutation();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const [category, setCategory] = useState();
  const { user } = useLocalUser();
  const categories = data?.data;
  const [isPremium, setIsPremium] = useState<boolean>(false);

  console.log(content);

  const config = {
    loadExternalConfig: false,
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    defaultActionOnPaste: "insert_only", // Keep the formatting intact on paste
    askBeforePasteHTML: false,
    uploader: {
      url: "https://xdsoft.net/jodit/finder/?action=fileUpload",
    },
    filebrowser: {
      ajax: {
        url: "https://xdsoft.net/jodit/finder/",
      },
      height: 450,
    },
  };
  //   handle submit
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const postData = {
      ...data,
      post: content,
      category,
      userId: user?._id,
      isPremium,
    };
    const res = (await createPost(postData)) as any;
    if (res?.data?.success) {
      toast.success(res?.data?.message, { id: toastId });
      router.push("/post");
    } else {
      toast.error(
        res?.error?.message ||
          res?.error?.data?.message ||
          "Something went wrong",
        { id: toastId }
      );
    }
  };

  return (
    <>
      <div className="pb-10 px-2 md:px-0">
        <GForm onSubmit={handleSubmit} resolver={zodResolver(postValidation)}>
          <GInput label="Post Title" name="title" clasName="mb-0" size="sm" />
          <div className="flex md:gap-2 w-full justify-between items-center flex-col md:flex-row gap-4 mb-2 mt-1 ">
            <div className="flex min-w-[120px] md:min-w-[500px] flex-wrap md:flex-nowrap gap-4 md:my-5">
              <Select
                isDisabled={isLoading}
                label="Select an animal"
                size="sm"
                className="max-w-xs"
                onChange={(e: any) => setCategory(e.target.value)}
              >
                {categories?.map(
                  (category: {
                    category: string;
                    image: string;
                    _id: string;
                  }) => (
                    <SelectItem key={category?._id} value={category?._id}>
                      {category?.category}
                    </SelectItem>
                  )
                )}
              </Select>
            </div>
            {/* <div>
              <CreateCategory />
            </div> */}
          </div>
          <div className="overflow-y-scroll max-h-[600px]">
            <JoditEditor
              ref={editor}
              value={content}
              config={config as any} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              // onChange={newContent => { console.log(newContent) }}
            />

            <Button
              isDisabled={user?.verified !== true}
              className="my-3 font-semibold py-2 inline-block px-2 shadow-md border border-gray-400 rounded bg-white cursor-pointer md:px-10 disabled:bg-gray-300"
            >
              <Checkbox onValueChange={() => setIsPremium((prev) => !prev)}>
                Is Premium?
              </Checkbox>
            </Button>
          </div>
          <Button
            type="submit"
            className="mt-4 bg-secondary text-white md:px-20"
          >
            Submit Post
          </Button>
        </GForm>
      </div>
    </>
  );
};

export default CreateAPost;
