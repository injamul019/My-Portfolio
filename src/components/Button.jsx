import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-dark";

  const variants = {
    primary:
      "bg-brand hover:bg-brand-hover text-white shadow-lg shadow-brand/25",
    outline:
      "border border-border hover:border-brand text-slate-300 hover:text-white bg-transparent",
    ghost: "text-slate-400 hover:text-white hover:bg-slate-800",
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
