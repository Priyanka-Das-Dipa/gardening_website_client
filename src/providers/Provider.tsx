/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
"use client"
import { HeroUIProvider } from "@heroui/system";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <HeroUIProvider>
          <Toaster />
          {children}
        </HeroUIProvider>
      </Provider>
    </>
  );
};

export default MainProvider;
