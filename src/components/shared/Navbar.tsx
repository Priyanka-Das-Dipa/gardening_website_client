/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
"use client";
import React from "react";
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
} from "@heroui/react";
import { MenuItems } from "@/src/menuItems/MenuItems";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavigateBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out",
  // ];

  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="shadow-lg">
        <div className="flex justify-between w-full  items-center px-3 lg:px-0">
          {/* toggle and Icon */}
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <AcmeLogo />
              <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
          </NavbarContent>
          {/* Large screen menu */}
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {MenuItems?.map((item, idx: number) => {
              // if (item?.url === "profile" && !user) {
              //   return null;
              // }
              return (
                <NavbarItem key={idx} className="font-semibold text-secondary">
                  <Link color="foreground" href={`/${item.url}`}>
                    {item?.name}
                  </Link>
                </NavbarItem>
              );
            })}
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
          </NavbarContent>

          {/* mobile screen */}
          <NavbarMenu>
            {MenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === MenuItems?.length - 1
                        ? "danger"
                        : "foreground"
                  }
                  className="w-full"
                  href={`/${item.url}`}
                  size="lg"
                >
                  {item?.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </div>
      </Navbar>
    </div>
  );
};

export default NavigateBar;
