/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
"use client";
import { useLocalUser } from "@/src/context/user.provider";
import { SidebarItemsAdmin, SideBarItemsUser } from "@/src/menuItems/MenuItems";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const { user } = useLocalUser();
  const [sideBarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <button
        className="fixed block z-50 md:hidden px-2 m-2 bg-white"
        onClick={() => setSidebarOpen(!sideBarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
      </button>
      <div
        className={`min-h-screen flex gap-3 pt-10 duration-200 w-[300px] flex-col sm:gap-4 fixed h-full md:static border-r-3 shadow-lg text-black p-2 ${sideBarOpen ? "-left-[300px] " : "z-40"}`}
      >
        {user?.role === "ADMIN"
          ? SidebarItemsAdmin?.map((item, idx) => {
              return (
                <Link
                  onClick={() => setSidebarOpen(!sideBarOpen)}
                  key={idx}
                  className="sm:text-lg font-medium bg-slate-500 bg-opacity-50 p-2 rounded"
                  href={`/admin/${item?.url}`}
                >
                  {item?.name}
                </Link>
              );
            })
          : SideBarItemsUser?.map((item, idx) => {
              return (
                <Link
                  onClick={() => setSidebarOpen(!sideBarOpen)}
                  key={idx}
                  className="sm:text-lg font-medium bg-slate-500 bg-opacity-50 p-2 rounded"
                  href={`/user/${item?.url}`}
                >
                  {item?.name}
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Sidebar;
