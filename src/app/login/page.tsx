/* eslint-disable prettier/prettier */

import Login from "@/src/components/shared/Login";
import { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense>
        <Login />
      </Suspense>
    </div>
  );
};

export default page;
