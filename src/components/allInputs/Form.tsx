/* eslint-disable prettier/prettier */
"use client";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

interface IFormProps extends IFormConfig {
  onSubmit: SubmitHandler<any>;
  label?: string;
  children: ReactNode;
  className?: string;
}

interface IFormConfig {
  defaultValue?: Record<string, any>;
  resolver?: any;
}
const Form = ({
  resolver,
  defaultValue,
  onSubmit,
  children,
  className,
}: IFormProps) => {
  const formConfig: IFormConfig = {};

  if (!!defaultValue) {
    formConfig["defaultValue"] = defaultValue;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submitForm: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    methods.reset();
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitForm)}
          className={className && className}
        >
          {children}
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
