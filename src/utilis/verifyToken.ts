/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { TUser } from "../redux/features/auth/authSlice";
import { jwtDecode } from "jwt-decode";

export const verifiyToken = (token: any): TUser => {
  return jwtDecode(token as string);
};
