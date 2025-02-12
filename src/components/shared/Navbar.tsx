/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { MenuItems } from "@/src/menuItems/MenuItems";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { logOut } from "@/src/redux/features/auth/authSlice";
import Image from "next/image";

const NavigateBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // const { user, isLoading } = useLocalUser();
  const user = useAppSelector((state) => state.auth.user);
  // console.log("user navbar", user);

  const dispatch = useAppDispatch();

  // const userEmail = user?.email;

  // const { data: user, isSuccess } = useGetUserByEmailQuery(
  //   `${user?.email}`
  // );

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    const toastId = toast.loading("processing...");

    Cookies.remove("accessToken");
    dispatch(logOut());
    toast.success("Logout successful", { id: toastId });
  };

  if (!isClient) {
    return null;
  }

  return (
    <Navbar
      className="shadow-lg"
      maxWidth="2xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <div className="flex justify-between w-full  items-center px-3 lg:px-0">
        {/* toggle and Icon */}
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/">
              <p className="font-bold text-green-700 text-xl"> GrowGenius</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        {/* Large screen menu */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {MenuItems?.map((item, idx: number) => {
            if (item?.url === "profile" && !user) {
              return null;
            }

            return (
              <NavbarItem key={idx} className="font-semibold text-secondary">
                <Link color="foreground" href={`/${item?.url}`}>
                  {item?.name}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        {/* Large screen end */}
        <NavbarContent justify="end">
          {user ? (
            <Dropdown>
              <DropdownTrigger>
                <div className="relative">
                  <Image
                    alt="Profile Image"
                    className="size-12 rounded-full shadow cursor-pointer"
                    height={300}
                    src={user?.profilePhoto || "/user.JPEG"}
                    width={300}
                  />
                </div>
              </DropdownTrigger>
              <DropdownMenu className="m-2">
                <DropdownItem key={""}>
                  <div className="space-y-2 mb-2 flex flex-col text-center">
                    <Link href="/profile">
                      <Button className="text-center w-full rounded-lg text-black text-md p-2">
                        Profile
                      </Button>
                    </Link>
                    <Link
                      href={`/${user?.role === "ADMIN" ? "admin" : "user"}`}
                    >
                      <Button className="text-center w-full rounded-lg text-black text-md p-2">
                        Dashboard
                      </Button>
                    </Link>
                  </div>
                  <Button
                    className="text-center py-2 w-full h-auto text-black"
                    onPress={handleLogout}
                  >
                    Log Out
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem>
              <Button className="bg-green-600">
                <Link className="text-black" href="/login">
                  Login
                </Link>
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>

        {/* mobile screen */}
        <NavbarMenu>
          {MenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === MenuItems?.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={`/${item?.url}`}
                size="lg"
              >
                {item?.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  );
};

export default NavigateBar;
