import React from "react";
import "./dashboard.css";
import FlightTable from "../components/flightTable";

export default function Dashboard() {
  return (
    <div>
      <small className="notice">
        <em>Only two hours time interval information will be shown</em>
      </small>
      <FlightTable />
    </div>
  );
}
