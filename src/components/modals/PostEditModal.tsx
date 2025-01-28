/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use client";

import { useLocalUser } from "@/src/context/user.provider";
import { useGetCategoryQuery } from "@/src/redux/features/category/category.api";
import { useUpdatePostMutation } from "@/src/redux/features/post/post.api";
import { Tpost } from "@/src/types";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import { useRef, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import GForm from "../allInputs/Form";
import GInput from "../allInputs/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidation } from "@/src/validation/validationSchema";
import JoditEditor from "jodit-react";

export default function EditPostModal({ post }: { post?: Tpost }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [updatePost] = useUpdatePostMutation();

  const editor = useRef(null);
  const [content, setContent] = useState("");
  const { data, isLoading } = useGetCategoryQuery({});
  const [category, setCategory] = useState();
  const { user } = useLocalUser();
  const categories = data?.data;

  const config = {
    loadExternalConfig: false,
    askBeforePasteHTML: false,

    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
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

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating...");
    const postData = {
      title: data?.title || post?.title,
      post: content ? content : post?.post,
      category: category ? category : post?.category?._id,
      userId: user?._id,
    };
    try {
      const postInfo = { postId: post?._id, postData };
      const res = (await updatePost(postInfo)) as any;
      if (res?.data?.success) {
        toast.success(res?.data?.message, { id: toastId });
      } else {
        toast.error(
          res?.error?.message ||
            res?.error?.data?.message ||
            "Something went wrong",
          { id: toastId }
        );
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <>
      <Button onPress={onOpen}>Edit</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="p-0 max-w-[900px] overflow-scroll max-h-[750px]"
      >
        <ModalContent className="py-0 m-0 max-w-[1200px]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div className="pb-10 px-2 md:px-0">
                  <GForm
                    onSubmit={handleSubmit}
                    resolver={zodResolver(postValidation)}
                  >
                    <GInput
                      label="Post Title"
                      name="title"
                      clasName="mb-0"
                      size="sm"
                      defaultValue={post?.title}
                    />
                    <div className="flex md:gap-2 w-full justify-start flex-col gap-4 mb-2 mt-1">
                      <div className="flex min-w-[120px] md:min-w-[500px] flex-wrap md:flex-nowrap gap-4">
                        <Select
                          isDisabled={isLoading}
                          label="Select an animal"
                          selectedKeys={[post?.category?._id] as any}
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
                              <SelectItem key={category?._id}>
                                {category?.category}
                              </SelectItem>
                            )
                          )}
                        </Select>
                      </div>
                      {/* {user?.role === "ADMIN" && <CreateCategory />} */}
                    </div>
                    <div className="overflow-y-scroll max-h-[600px]">
                      <JoditEditor
                        ref={editor}
                        value={content ? content : post?.post!}
                        config={config as any} // tabIndex of textarea
                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        // onChange={newContent => { console.log(newContent) }}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="mt-4 bg-secondary text-white"
                    >
                      Submit Post
                    </Button>
                  </GForm>
                </div>
                <Button
                  color="primary"
                  variant="light"
                  className="bg-primary text-white"
                  onPress={onClose}
                >
                  Close
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
