/* eslint-disable padding-line-between-statements */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import { IInputs } from "@/src/types";
import { Textarea } from "@heroui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

interface inputprops extends IInputs {
  type?: string;
  value?: string;
  isDisabled?: boolean;
  defaultValue?: string;
  className: string;
}

const GTaxtArea = ({
  size = "md",
  type = "text",
  variant = "flat",
  isRequired = true,
  clasName,
  name,
  label,
  value,
  isDisabled,
  defaultValue,
}: inputprops) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <Textarea
        {...register(name)}
        value={value && value}
        size={size}
        type={type}
        isDisabled={isDisabled}
        label={label}
        variant={variant}
        isRequired={isRequired}
        defaultValue={defaultValue && defaultValue}
        className={clasName && clasName}
        errorMessage={errors[name] ? (errors[name].message as string) : ""}
        isInvalid={!!errors[name]}
      />
    </div>
  );
};

export default GTaxtArea;
