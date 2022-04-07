import React from "react";

interface TableBodyProps {
  data: any[];
  currentPage: number;
  pageLimit: number;
}

export default function TableBody({
  data,
  currentPage,
  pageLimit,
}: TableBodyProps) {
  return (
    <tbody>
      {data &&
        data
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
  );
}

const toDate = (date: any) => {
  const newDate = new Date(date * 1000);
  return newDate.toUTCString();
};
