"use client";
import React, { useEffect, useState } from "react";
import TableComponent from "@/components/ui/table";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Pagination } from "@/components/atomics";

interface UserData {
  images: string | any[] | StaticImport;
  name: string;
  email: string;
  mobile: string;
}

const PAGE_SIZE = 20;

const PageComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://techc2.be/user/topUser?page=${currentPage}&pageSize=${PAGE_SIZE}`
      );
      const data = await response.json();
      // Modify userData to add serial numbers and filter out invalid data
      const modifiedData = data.data
        .map((user: UserData, index: number) => ({
          ...user,
          "sr.no": (currentPage - 1) * PAGE_SIZE + index + 1,
        }))
        .filter((user) => user.name && user.email && user.mobile);
      setUserData(modifiedData);
      setTotalPages(Math.ceil(data.totalItems / PAGE_SIZE));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderImageCell = (rowData: UserData) => {
    if (Array.isArray(rowData.images)) {
      return rowData.images.map((image: string, index: number) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={image}
            alt="User"
            width={50}
            height={50}
            style={{ marginRight: "5px" }}
          />
        </div>
      ));
    } else if (typeof rowData.images === "string") {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={rowData.images}
            alt="User"
            width={50}
            height={50}
            style={{ marginRight: "5px", borderRadius: "50px" }}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  const headerData = [
    {
      key: "sr.no",
      label: "Sr no",
    },
    {
      key: "images",
      label: "Image",
      renderCell: renderImageCell,
    },
    {
      key: "name",
      label: "Username",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "mobile",
      label: "Phone Number",
    },
  ];

  return (
    <div>
      <h1>User Data</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TableComponent
            data={userData}
            headers={headerData}
            title="User Data"
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default PageComponent;
