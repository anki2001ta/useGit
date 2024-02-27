"use client";
import React from "react";
import TableComponent from "@/components/ui/table";

const buyersData = [
  {
    name: "Samanta Legend",
    phoneNumber: "(307) 555-0133",
    address: "pratha@gmail.com",
    roomName: "Ehsaas",
    Diamonds: "250000",
    Beans: "3456789",
    status: "Accepted",
  },
  {
    name: "Samanta Legend",
    phoneNumber: "(307) 555-0133",
    address: "pratha@gmail.com",
    roomName: "Ehsaas",
    Diamonds: "250000",
    Beans: "3456789",
    status: "Accepted",
  },
];

const headers = [
  "name",
  "address",
  "phoneNumber",
  "roomName",
  "Diamonds",
  "Beans",
  "status",
  "Actions",
];

const DBCustomersBuyers = () => {
  return (
    <TableComponent data={buyersData} headers={headers} title="View Users" />
  );
};

export default DBCustomersBuyers;
