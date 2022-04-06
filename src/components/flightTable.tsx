import React, { useEffect, useState } from "react";
import "./component.css";
import Table from "../common/table";
import axios from "axios";
import Paginate from "../common/pagination";

export default function FlightTable() {
  const [startDate, setStartDate] = useState<string>("");

  const tableData = ["AIRPORT", "TIME", "Arriving", "Departing"];

  const [tableBody, setTableBody] = useState<any[]>([
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
            setTableBody(response.data);
          });
      } catch (error) {
        console.log(error);
      }
  }, [startDate]);

  return (
    <div>
      <small>
        <em>Only two hours time interval information will be shown</em>
      </small>
      <div>
        <label htmlFor="date">Select start time date : </label>
        <input
          type="datetime-local"
          name="date"
          id="date"
          onChange={(e) => setStartDate(e.currentTarget.value)}
        />
      </div>
      {tableBody[0].icao24 !== 0 && (
        <>
          <div className="flight-table">
            <Table
              data={tableData}
              body={tableBody}
              currentPage={currentPage}
              pageLimit={pageLimit}
            />
          </div>

          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={tableBody.length}
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
