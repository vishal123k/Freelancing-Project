import React from "react";
import clsx from "clsx";

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  secondary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-700",
  outline: "bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
  ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-200",
};

const sizes = {
  sm: "px-4 py-1 text-sm",
  md: "px-6 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
