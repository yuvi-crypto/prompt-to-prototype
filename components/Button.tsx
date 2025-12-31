import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text' | 'white';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none rounded-sm";
  
  const variants = {
    primary: "bg-vis-primary hover:bg-vis-primaryDark text-white shadow-sm",
    outline: "border border-gray-300 text-gray-700 hover:border-vis-primary hover:text-vis-primary bg-transparent",
    text: "text-gray-700 hover:text-vis-primary",
    white: "bg-white text-vis-primary hover:bg-gray-50 shadow-sm"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;