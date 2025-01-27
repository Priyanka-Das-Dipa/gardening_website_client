/* eslint-disable import/order */
/* eslint-disable padding-line-between-statements */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
"use client";

import { IInputs } from "@/src/types";
import { useFormContext } from "react-hook-form";
import { Input } from "@heroui/input";
interface inputprops extends IInputs {
  type?: string;
  isDisabled?: boolean;
  defaultValue?: string;
}

const GInput = ({
  size = "md",
  type = "text",
  variant = "flat",
  isRequired = true,
  clasName,
  defaultValue,
  name,
  label,
  isDisabled,
}: inputprops) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Input
        {...register(name)}
        defaultValue={defaultValue ? defaultValue : ""}
        size={size}
        type={type}
        isDisabled={isDisabled}
        label={label}
        variant={variant}
        isRequired={isRequired}
        className={clasName && clasName}
        errorMessage={errors[name] ? (errors[name].message as string) : ""}
        isInvalid={!!errors[name]}
      />
    </div>
  );
};

export default GInput;
