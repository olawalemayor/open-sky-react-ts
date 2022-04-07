import React, { useEffect, useState } from "react";
import "./component.css";
import axios from "axios";
import { Paginate, Table } from "../common";
import DateSelector from "../common/dateSelector";

export default function FlightTable() {
  const [startDate, setStartDate] = useState<string>("");

  const headers = ["AIRPORT", "TIME", "Arriving", "Departing"];

  const [tableData, setTableData] = useState<any[]>([
    {
      icao24: 0,
      lastSeen: 0,
      estArrivalAirport: "",
      departureAirportCandidatesCount: 0,
      arrivalAirportCandidatesCount: 0,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 10;

  useEffect(() => {
    const { newDate, endDate } = getDate(startDate);
    const begin = Number(Date.parse(newDate.toString())) / 1000;
    const end = Number(Date.parse(endDate.toString())) / 1000;

    if (begin)
      try {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/api/flights/all?begin=${begin}&end=${end}`
          )
          .then((response) => {
            setTableData(response.data);
          });
      } catch (error) {
        //just logging the errors for now
        console.log(error);
      }
  }, [startDate]);

  return (
    <div>
      <DateSelector setDate={setStartDate} />
      {tableData[0].icao24 !== 0 && (
        <>
          <div className="flight-table">
            <Table
              headers={headers}
              data={tableData}
              currentPage={currentPage}
              pageLimit={pageLimit}
            />
          </div>

          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={tableData.length}
            pageLimit={pageLimit}
          />
        </>
      )}
    </div>
  );
}

function addHours(date: any, hours: number) {
  const newDate = new Date(date);
  newDate.setHours(newDate.getHours() + hours);
  return newDate;
}

const getDate = (startDate: any) => {
  const newDate = new Date(Date.parse(startDate));
  const endDate = addHours(newDate, 2);
  return { newDate, endDate };
};
