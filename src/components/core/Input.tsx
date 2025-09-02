import React from "react";

type InputProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  required?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
};
const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  label,
  required,
}) => {
  return (
    <div className="flex flex-col justify-center items-start gap-1">
      <span className="text-sm text-black font-medium">
        {label}
        {required && <span className="text-red-800">*</span>}
      </span>
      <input
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full p-2 border text-xs border-gray-300 rounded-sm outline-none focus:border-gray-800 focus:ring-0"
      />
    </div>
  );
};

export default Input;
