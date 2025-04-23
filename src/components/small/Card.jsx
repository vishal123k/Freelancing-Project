import React from "react";

export default function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}