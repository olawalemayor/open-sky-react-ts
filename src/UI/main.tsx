import React from "react";
import { Route, Routes } from "react-router-dom";
import { EmptyRoute, Dashboard } from "../routes";

export default function MainContent() {
  return (
    <main>
      <Routes>
        <Route path="/empty" element={<EmptyRoute />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  );
}
