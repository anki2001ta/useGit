import React from "react";
import { Button, Pagination, Title } from "@/components/atomics";
import { SortAscendingIcon } from "@/assets/icons";

interface UserData {
  name: string;
  email: string;
  bio: string;
  status: string;
  user_type: string;
  roomName: string;
  diamonds: string;
  beans: string;
  coins: string;
  likes: string;
  comments: string;
  views: string;
}

// TableComponent props interface
interface TableProps {
  data: UserData[] | null | undefined;
  headers: (keyof UserData)[];
  title: string;
}

const TableComponent: React.FC<TableProps> = ({ data, headers, title }) => {
  console.log("Data in TableComponent:", data); // csv file
  const convertToCSV = () => {
    if (!data) return; // Guard against null or undefined data

    const csv = [
      headers.join(","),
      ...data.map((item) => headers.map((key) => item[key] ?? "").join(",")),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.csv");

    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Space Insertion
  const insertSpaceBetweenWords = (word: string) => {
    return word
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
  };

  if (!data) {
    return <p>No data available</p>; // Render a message if data is null or undefined
  }

  return (
    <div className="relative p-6 space-y-6">
      <section className="relative p-6 bg-white rounded-lg-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <Title size="sm" variant="default" className="text-netral-25">
            {title}
          </Title>
          <Button size="sm" variant="primary-bg" onClick={convertToCSV}>
            Export CSV
            <SortAscendingIcon className="w-4 h-4 stroke-2" />
          </Button>
        </nav>
        <div className="flex justify-between">
          <input
            type="text"
            autoComplete="email"
            required
            placeholder="Search Here"
            className="block w-[30%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-netral-25 sm:text-sm sm:leading-6"
          />
        </div>

        {/* Table */}
        <div className="mb-6 overflow-x-auto mt-10">
          <table className="w-full table-auto">
            <thead className="font-semibold uppercase bg-netral-15 text-body-sm">
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className={`px-3 py-4 text-left whitespace-nowrap ${
                      index === 0 ? "first:pl-5" : ""
                    } ${index === headers.length - 1 ? "last:pr-5" : ""}`}
                  >
                    {/* Insert space between words */}
                    {insertSpaceBetweenWords(header)}
                  </th>
                ))}
                <th className="px-3 py-4 text-left whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="pt-4 text-sm divide-y divide-netral-20">
              {data.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-3 py-5 text-left whitespace-nowrap ${
                        colIndex === 0 ? "first:pl-5" : ""
                      } ${colIndex === headers.length - 1 ? "last:pr-5" : ""}`}
                    >
                      <span className="font-medium text-body-base text-netral-80">
                        {typeof item[header] === "object"
                          ? JSON.stringify(item[header])
                          : item[header]}
                      </span>
                    </td>
                  ))}
                  <td className="px-3 py-5 text-left whitespace-nowrap first:pl-5 last:pr-5">
                    <Button
                      size="md"
                      variant="primary-nude"
                      href="/customers/buyers/detail"
                    >
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination />
      </section>
    </div>
  );
};

export default TableComponent;
