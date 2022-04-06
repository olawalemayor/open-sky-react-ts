import React from "react";
import TableHeader from "./tableHeader";

interface TableProps {
  data: string[];
  body: any[];
  currentPage: number;
  pageLimit: number;
}

export default function Table({
  data,
  body,
  currentPage,
  pageLimit,
}: TableProps) {
  return (
    <table>
      <TableHeader data={data} />
      <tbody>
        {body &&
          body
            .slice(
              (currentPage - 1) * pageLimit,
              (currentPage - 1) * pageLimit + pageLimit
            )
            .map(
              ({
                icao24,
                lastSeen,
                estArrivalAirport,
                departureAirportCandidatesCount,
                arrivalAirportCandidatesCount,
              }) => (
                <tr key={icao24 + lastSeen}>
                  <td>{estArrivalAirport}</td>
                  <td>{toDate(lastSeen)}</td>
                  <td>{arrivalAirportCandidatesCount}</td>
                  <td>{departureAirportCandidatesCount}</td>
                </tr>
              )
            )}
      </tbody>
    </table>
  );
}

const toDate = (date: any) => {
  const newDate = new Date(date * 1000);
  return newDate.toUTCString();
};
