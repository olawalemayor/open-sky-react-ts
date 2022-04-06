import React from "react";

interface THeaderProps {
  data: string[];
}

export default function TableHeader({ data }: THeaderProps) {
  return (
    <thead>
      <tr>
        {data.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
