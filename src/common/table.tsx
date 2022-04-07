import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

interface TableProps {
  headers: string[];
  data: any[];
  currentPage: number;
  pageLimit: number;
}

export default function Table({
  headers,
  data,
  currentPage,
  pageLimit,
}: TableProps) {
  return (
    <table>
      <TableHeader headers={headers} />
      <TableBody currentPage={currentPage} data={data} pageLimit={pageLimit} />
    </table>
  );
}
