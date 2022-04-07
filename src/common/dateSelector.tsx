import React from "react";

interface DateSelectorProps {
  setDate: any;
}

export default function DateSelector({ setDate }: DateSelectorProps) {
  return (
    <div className="date-selector">
      <label htmlFor="date">Select start time date : </label>
      <input
        type="datetime-local"
        name="date"
        id="date"
        onChange={(e) => setDate(e.currentTarget.value)}
      />
    </div>
  );
}
