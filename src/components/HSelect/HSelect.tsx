"use client";

import { useState } from "react";
import Typography from "../Typography";

interface HSelectProps {
  options: string[];
  initialValue: string;
}

export default function HSelect({ options, initialValue }: HSelectProps) {
  const [selected, setSelected] = useState(initialValue);

  const selectPreviousOption = () => {
    const index = options.indexOf(selected);
    if (index === 0) return;
    setSelected(options[index - 1]);
  };

  const selectNextOption = () => {
    const index = options.indexOf(selected);
    if (index === options.length - 1) return;
    setSelected(options[index + 1]);
  };

  return (
    <div className="flex items-center gap-4">
      <i
        className="fa-solid fa-arrow-left text-lg cursor-pointer text-white hover:text-red-900 transition-colors"
        onClick={selectPreviousOption}
      />
      <div className="flex flex-col items-center gap-4 w-48">
        <Typography variant="subheading" color="text-gray-200">
          {selected}
        </Typography>
        <div className="flex gap-4 justify-between items-center w-full">
          {options.map((option) => (
            <div
              className={`${
                selected === option ? "bg-white" : "bg-gray-600"
              } h-1 flex-1 cursor-not-allowed `}
              key={option}
            />
          ))}
        </div>
      </div>
      <i
        className="fa-solid fa-arrow-right text-lg cursor-pointer text-white hover:text-red-900 transition-colors"
        onClick={selectNextOption}
      />
    </div>
  );
}
