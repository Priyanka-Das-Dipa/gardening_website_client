"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React, { useState } from "react";
import { toast } from "sonner";

import { useLocalUser } from "@/src/context/user.provider";
import { useCreateCategoryMutation } from "@/src/redux/features/category/category.api";
import { uploadImageToCloudinary } from "@/src/utilis/uploadImageToCLudinary";

const CreateCategory = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user } = useLocalUser();
  const [categroy, setCategory] = useState<string>();
  const [createCategory] = useCreateCategoryMutation();
  const [file, setFile] = useState<any>();

  const handleCreateCategory = async () => {
    if (categroy) {
      if (file) {
        const image = await uploadImageToCloudinary(file);
        const datas = { category: categroy, image };
        const res = (await createCategory(datas)) as any;

        if (res?.data?.success) {
          toast.success(res?.data?.message);
        } else if (res?.error) {
          toast.error(res?.error?.data?.message || "something went wrong");
        }
      } else {
        const datas = { category: categroy };
        const res = (await createCategory(datas)) as any;

        if (res?.data?.success) {
          toast.success(res?.data?.message);
        } else if (res?.error) {
          toast.error(res?.error?.data?.message || "something went wrong");
        }
      }
    } else {
      toast.error("Category name missing");
    }
  };

  return (
    <div className="flex-1">
      <Button
        className="min-fit px-4 py-6 bg-secondary text-white"
        isDisabled={
          user?.role === "ADMIN"
            ? false
            : user?.verified === true
              ? false
              : true
        }
        onPress={onOpen}
      >
        Create a new Category?
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add a Categroy
              </ModalHeader>
              <ModalBody>
                <Input
                  errorMessage={!categroy}
                  label="Category Name"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label
                  className="mt-3 rounded-lg block border p-3 cursor-pointer"
                  htmlFor="categoryimage"
                >
                  image suggested(400*250) px
                </label>
                <Input
                  className="hidden"
                  id="categoryimage"
                  isInvalid={!file}
                  type="file"
                  onChange={(e: any) => setFile(e.target.files[0])}
                />
                <Button
                  className="mt-5"
                  color="primary"
                  isDisabled={!categroy}
                  onClick={handleCreateCategory}
                  onPress={onClose}
                >
                  Create
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreateCategory;
