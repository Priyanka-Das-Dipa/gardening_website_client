/* eslint-disable prettier/prettier */
import { FaUserGear } from "react-icons/fa6";
import { MdOutlinePostAdd, MdPayments } from "react-icons/md";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

export const MenuItems = [
  // {
  //   name: "Home",
  //   url: "/",
  // },
  {
    name: "Post",
    url: "post",
  },
  {
    name: "News Feed",
    url: "news-feed",
  },
  {
    name: "About Us",
    url: "about",
  },
  {
    name: "Contact Us",
    url: "contact",
  },
  {
    name: "Gallery",
    url: "gallery",
  },
];

export const SidebarItemsAdmin = [
  {
    name: "User Management",
    url: "users",
    icon: <FaUserGear />,
  },
  {
    name: "Post Management",
    url: "posts",
    icon: <MdOutlinePostAdd />,
  },
  {
    name: "All Posts",
    url: "/all-post",
    icon: <BsFileEarmarkPostFill />,
  },
  {
    name: "Payments",
    url: "payment",
    icon: <MdPayments />,
  },
];

export const SideBarItemsUser = [
  {
    name: "My Profile",
    url: "/myProfile",
    icon: <CgProfile />,
  },
  {
    name: "Post Management",
    url: "/create-post",
    icon: <MdOutlinePostAdd />,
  },
];
