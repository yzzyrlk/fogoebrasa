import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface BannerProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  icon?: LucideIcon;
  children: ReactNode;
}

const variantStyles = {
  success: 'bg-green-600 text-white',
  error: 'bg-red-600 text-white',
  warning: 'bg-yellow-500 text-black',
  info: 'bg-blue-600 text-white'
};

export function Banner({ variant, icon: Icon, children }: BannerProps) {
  return (
    <div className={`w-full py-2 px-4 text-center text-sm font-medium ${variantStyles[variant]}`}>
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </div>
    </div>
  );
}