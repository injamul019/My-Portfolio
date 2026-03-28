import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-bg-dark";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#0a0d18] via-[#111429] to-[#1a2360] text-white shadow-lg shadow-[#111429]/40 hover:scale-105 hover:shadow-xl",
    outline:
      "border-2 border-[#0a0d18] text-[#0a0d18] hover:bg-[#0a0d18] hover:text-white hover:scale-105 transition-all",
    ghost:
      "text-white bg-transparent hover:bg-[#111429]/20 hover:text-[#3b4b87] hover:scale-105",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;