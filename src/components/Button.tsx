import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
