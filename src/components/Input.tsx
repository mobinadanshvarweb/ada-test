import React from "react";

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`p-2 border border-gray-300 rounded ${className}`}
    />
  );
};

export default Input;
