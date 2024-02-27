import React from "react";
import { Button, Pagination, Title } from "@/components/atomics";
import { SortAscendingIcon } from "@/assets/icons";
import Image from "next/image";

interface TableProps {
  data: {
    [key: string]: string | JSX.Element | any;
  }[];
  headers: Header[];
  title: string;
}

interface Header {
  key: string;
  label: string;
  renderCell?: (rowData: any) => JSX.Element | null;
}

const TableComponent: React.FC<TableProps> = ({ data, headers, title }) => {
  const convertToCSV = () => {
    if (!data) return;

    const csv = [
      headers.map((header) => header.label).join(","),
      ...data.map((item) =>
        headers.map((header) => item[header.key] ?? "").join(",")
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.csv");

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const renderCell = (rowData: any, header: Header) => {
    if (header.renderCell) {
      return header.renderCell(rowData);
    }
    return rowData[header.key];
  };

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <div className="relative p-6 space-y-6">
      <section className="relative p-6 bg-white rounded-lg-10">
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
        <div className="mb-6 overflow-x-auto mt-10">
          <table className="w-full table-auto">
            <thead className="font-semibold uppercase bg-netral-15 text-body-sm">
              <tr>
                {headers.map((header) => (
                  <th
                    key={header.key}
                    className={`px-3 py-4 text-left whitespace-nowrap`}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="pt-4 text-sm divide-y divide-netral-20">
              {data.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  {headers.map((header) => (
                    <td
                      key={header.key}
                      className={`px-3 py-5 text-left whitespace-nowrap`}
                    >
                      {header.renderCell
                        ? renderCell(item, header)
                        : item[header.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TableComponent;
