import React from "react";

interface THeaderProps {
  headers: string[];
}

export default function TableHeader({ headers }: THeaderProps) {
  return (
    <thead>
      <tr>
        {headers.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
