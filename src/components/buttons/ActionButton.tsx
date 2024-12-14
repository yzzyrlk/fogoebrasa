import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ActionButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
  className?: string;
}

export function ActionButton({ 
  text, 
  onClick, 
  variant = 'primary',
  icon = false,
  className = ''
}: ActionButtonProps) {
  const baseStyles = "px-8 py-3 rounded-lg font-bold transform hover:scale-105 transition-all";
  const variants = {
    primary: "bg-yellow-500 hover:bg-yellow-400 text-black",
    secondary: "border-2 border-white hover:bg-white hover:text-black text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} flex items-center`}
    >
      {text}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
}