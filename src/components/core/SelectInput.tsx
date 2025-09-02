import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";

// In selectInput.tsx
interface SelectInputProps {
  name: string;
  options: { id: string; label: string; value: string }[] | string[];
  label: string;
  placeholder?: string;
  value?: string; // Changed this to expect just the string value
  onChange?: (value: string) => void; // Changed to pass just the value
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  error?: any;
  required?: boolean;
  className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  options,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  required,
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <span className="text-sm text-black font-medium">
        {label}
        {required && <span className="text-red-800">*</span>}
      </span>
      <div className="relative w-full bg-white">
        <select
          name={name}
          value={value || ""} // Add value prop
          className="appearance-none w-full p-2 border text-xs border-gray-300 rounded-sm outline-none focus:none"
          onChange={(e) => onChange?.(e.target.value)} // Pass just the value
          onBlur={onBlur}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) =>
            typeof option === "string" ? (
              <option key={option} value={option}>
                {option}
              </option>
            ) : (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            ),
          )}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
          <div className="flex flex-col justify-center items-enter">
            <ChevronUpIcon className="size-3 text-gray-500" />
            <ChevronDownIcon className="size-3 text-gray-500" />
          </div>
        </div>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
export default SelectInput;
