/* eslint-disable prettier/prettier */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api",
  baseUrl: "https://gardening-website-server.vercel.app/api",

  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    // console.log(token);
    if (token) {
      headers.set(`authorization`, `bearer ${token}`);
    }
    return headers;
  },
  // prepareHeaders: (headers, { getState }) => {
  //   const token = (getState() as RootState).auth;

  //   if (token) {
  //     headers.set(`authorization`, `${token.token}`);
  //   }
  //   return headers;
  // },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["user", "post", "category", "payment"],
  endpoints: () => ({}),
});
