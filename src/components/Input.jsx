import React, { useId } from "react";
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        className={`p-2 outline-none rounded-md font-medium bg-teal-950 text-white ${className}`}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
