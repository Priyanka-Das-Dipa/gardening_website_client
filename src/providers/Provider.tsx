/* eslint-disable prettier/prettier */
import { HeroUIProvider } from "@heroui/system";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const Provider = ({ children }: { children: ReactNode }) => {
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

export default Provider;
