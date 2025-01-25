/* eslint-disable react/jsx-sort-props */
/* eslint-disable padding-line-between-statements */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
"use client";
import { Input } from "@heroui/react";

const ContactFrom = () => {
  return (
    <>
      <div className="container mx-auto mb-16">
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold mb-4 text-green-600">
            Have a Question?
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Feel free to ask us anything! Just fill out the form, and we&apos;ll
            get back to you as soon as possible.
          </p>
        </div>
        <div className=" p-8">
          <div className="space-y-3">
            <div className="flex gap-5">
              <Input
                isReadOnly
                className="w-full"
                label="Name"
                type="name"
                variant="bordered"
              />
              <Input
                isReadOnly
                className="w-full"
                label="Email"
                type="email"
                variant="bordered"
              />
            </div>
            <div className="flex gap-5">
              <Input
                isReadOnly
                className="w-full"
                label="Address"
                type="address"
                variant="bordered"
              />
              <Input
                isReadOnly
                className="w-full"
                label="Phone"
                type="phone"
                variant="bordered"
              />
            </div>
            <Input
              isReadOnly
              className="w-full"
              label="Subject"
              type="subject"
              variant="bordered"
            />
            <div className="relative">
              <textarea
                name="message"
                rows={4}
                className="w-full shadow-md border-2 border-gray-200 p-2 rounded-lg "
                placeholder="Briefly Description "
              />
            </div>
          </div>
          <div className="flex justify-center items-center pt-6">
            <button className="rounded-full px-8 py-4 bg-green-600 text-white">Get in touch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
