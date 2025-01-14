import React from "react";

interface RowProps {
  duration: number;
}

export const RowComponent = ({ duration }: RowProps) => {
  const days = Array.from({ length: duration }, (_, i) => i + 1);

  return (
    <div className="flex">
      {days.map((day) => (
        <div
          key={day}
          className="border border-gray-300 w-10 h-10 flex items-center justify-center"
        >
          {day}
        </div>
      ))}
    </div>
  );
};
