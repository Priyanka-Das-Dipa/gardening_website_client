/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUser } from "../types";
import { getCurrentUser } from "../services";

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

type IUserProviderValues = {
  user: IUser | null | undefined;
  isLoading: boolean | undefined;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setUser: (user: IUser | null) => void;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = await getCurrentUser();
    console.log("from user Provider", user);
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, isLoading, setUser, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useLocalUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "useUser should be invoked inside the warper boundary or application"
    );
  }
  return context;
};
