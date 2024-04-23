import React from "react";

import { useId } from "react";

const Select = ({ options, label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className="text-blue-600"></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black border border-gray-200 focus:bg-gray-50  ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);
