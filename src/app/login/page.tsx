/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client"
import GForm from "@/src/components/allInputs/Form";
import GInput from "@/src/components/allInputs/Input";
import { useLogInMutation } from "@/src/redux/features/auth/auth.api";
import { setUser } from "@/src/redux/features/auth/authSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import { verifiyToken } from "@/src/utilis/verifyToken";
import { loginValidationSchema } from "@/src/validation/validationSchema";
import { Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "sonner";

const LoginPage = () => {
  const [login, { isLoading, isSuccess }] = useLogInMutation();
  const redirect = useSearchParams().get("redirect");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging...");

    try {
      const res = (await login(data)) as any;

      if (res?.data?.success) {
        // set cookies refresh token
        Cookies.set("refreshToken", res?.data?.data?.refreshToken);
        Cookies.set("accessToken", res?.data?.data?.accessToken);
        const user = verifiyToken(res?.data?.data?.accessToken);

        dispatch(setUser({ user, token: res?.data?.data?.accessToken }));
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
      toast.error(error);
    }
  };

  if (!isLoading && isSuccess) {
    if (redirect) {
      router.push(redirect);
    } else {
      router.push("/");
    }
  }

  return (
    <div className="bg-white md:min-h-screen">
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <div className="md:mt-14">
          <div className="max-w-[500px] mx-auto md:mt-10 border p-3 md:p-6 rounded-lg shadow-inner font-roboto_slab">
            <div className="space-y-1">
              <h4 className="text-lg md:text-xl font-semibold">Login page</h4>
              <p className="text-sm">Hi, Welcome Back👏</p>
            </div>
            <GForm
              onSubmit={onSubmit}
              className="mt-6 space-y-5"
              resolver={zodResolver(loginValidationSchema)}
            >
              <GInput type="email" label="Email" name="email" clasName="" />
              <div className="relative">
                <GInput
                  type={showPassword ? "password" : "text"}
                  label="Password"
                  name="password"
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
              
              <Button className="w-full bg-green-700 text-white" type="submit">
                Login
              </Button>
            </GForm>
            <div className="flex items-center mt-4 flex-wrap">
              <p>Not Registered yet?</p>
              <Link
                className="ml-3 font-semibold text-primary flex items-center gap-2"
                href="/registration"
              >
                Create Account
              </Link>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
