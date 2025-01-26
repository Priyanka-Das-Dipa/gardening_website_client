/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  //   const accessToken = localStorage.getItem("accessToken");
  const accessToken = (await cookies()).get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken as string);
    return {
      _id: decodedToken?._id,
      name: decodedToken?.name,
      email: decodedToken?.email,
      phoneNumber: decodedToken?.phoneNumber,
      role: decodedToken?.role,
      profilePhoto: decodedToken?.profilePhoto,
      verified: decodedToken?.verified,
    };
  }
  return decodedToken;
};
