/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useGetPaymentHistoryQuery } from "@/src/redux/features/auth/auth.api";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React from "react";
import moment from "moment";

const PaymentHistory = () => {
  const { data } = useGetPaymentHistoryQuery(undefined);
  const payments = data?.data;

  return (
    <div>
      <Table aria-label="Payment History" className="w-full">
        <TableHeader>
          <TableColumn>USER</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>TRANSACTION ID</TableColumn>
          <TableColumn>PAYMENT TIME</TableColumn>
        </TableHeader>
        <TableBody>
          {payments?.map((payment: any, idx: number) => (
            <TableRow key={idx}>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar
                    src={payment.userId.profilePhoto}
                    alt="Profile"
                    size="sm"
                  />
                  <div>
                    <p className="font-medium">{payment.userId.name}</p>
                    <p className="text-sm text-gray-500">
                      {payment.userId.role}
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>{payment.email}</TableCell>
              <TableCell>{payment.transactionId}</TableCell>
              <TableCell>
                {moment(new Date(payment.paymentTime)).format("MMM Do YY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentHistory;
