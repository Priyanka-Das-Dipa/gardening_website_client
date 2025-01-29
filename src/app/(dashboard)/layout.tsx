/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Sidebar from "@/src/components/dashboardLayOut/Sidebar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={`sm:flex bg-white w-full top-0 left-0`}>
        <Sidebar />
        <div className="flex-1 sm:p-3 md:p-5 overflow-y-auto">{children}</div>
      </div>
    </>
  );
};

export default layout;
