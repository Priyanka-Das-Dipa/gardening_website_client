/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import { useAppDispatch } from "@/src/redux/hooks";
import { uploadImageToCloudinary } from "@/src/utilis/uploadImageToCLudinary";
import { verifiyToken } from "@/src/utilis/verifyToken";
import { registerValidationSchema } from "@/src/validation/validationSchema";
import { Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";
import { setUser } from "@/src/redux/features/auth/authSlice";
import { useRegisterMutation } from "@/src/redux/features/auth/auth.api";
import GInput from "@/src/components/allInputs/Input";
import GForm from "@/src/components/allInputs/Form";

const RegistrationPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [register, { isLoading }] = useRegisterMutation();
  const [imageFile, setImageFile] = useState<any>();
  // const [profilePhoto, setProfilePhoto] = useState("");

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Register processing...");
    let profilePhoto;

    if (imageFile) {
      profilePhoto = await uploadImageToCloudinary(imageFile);
      // console.log(imageURL);
      // setProfilePhoto(imageURL);
    }
    const name = data?.name.trim();
    const registerData = {
      ...data,
      name,
      profilePhoto,
    };

    const res = (await register(registerData)) as any;

    if (res?.data?.success) {
      // set cookies refresh token
      Cookies.set("refreshToken", res?.data?.data?.refreshToken);
      Cookies.set("accessToken", res?.data?.data?.accessToken);
      const user = verifiyToken(res?.data?.data?.accessToken);
      
      dispatch(setUser({ user, token: res?.data?.data?.accessToken }));
      toast.success(res?.data?.message, { id: toastId });
      router.push("/");
    } else {
      toast.error(
        res?.error?.message ||
          res?.error?.data?.message ||
          "Something went wrong",
        { id: toastId }
      );
    }
  };

  const onChangeFile = (file: any) => {
    setImageFile(file[0]);
  };

  return (
    <div className="bg-slate-100 md:min-h-screen md:pt-10">
      {isLoading && <p>Loading.....</p>}
      <div className="">
        <div className="max-w-[600px] bg-white mx-auto md:mt-10 border p-3 md:p-6 rounded-lg shadow-inner font-roboto_slab">
          <div className="space-y-1">
            <h4 className="text-lg md:text-xl font-semibold">Registration</h4>
            <p className="text-sm">Hi, Welcome👏</p>
          </div>
          <GForm
            className="mt-6 space-y-5"
            resolver={zodResolver(registerValidationSchema)}
            onSubmit={onSubmit}
          >
            <GInput label="Name" name="name" type="text" />
            <GInput clasName="" label="Email" name="email" type="email" />
            <GInput clasName="" label="Address" name="addressa" type="address" />
            <GInput
              clasName=""
              label="Phone"
              name="phoneNumber"
              type="number"
            />
            <div className="relative">
              <GInput
                label="Password"
                name="password"
                type={showPassword ? "password" : "text"}
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-1/2 -translate-y-[50%] cursor-pointer"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            {/* file upload */}
            <input
              className="w-full bg-gray-100 p-2 rounded-lg"
              type="file"
              onChange={(e) => onChangeFile(e.target.files)}
            />
            {
              <Button
                className="w-full bg-green-700 text-white disabled:bg-disable"
                disabled={!imageFile}
                type="submit"
              >
                Sign Up
              </Button>
            }
          </GForm>
          <div className="flex items-center mt-4 flex-wrap">
            <p>Do you have account?</p>
            <Link
              className="ml-3 font-semibold text-primary flex items-center gap-2"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
