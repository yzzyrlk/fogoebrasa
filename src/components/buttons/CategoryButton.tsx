import React from 'react';

interface CategoryButtonProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

export function CategoryButton({ category, isActive, onClick }: CategoryButtonProps) {
  const displayName = {
    all: 'Todos',
    burgers: 'Hambúrgueres',
    sides: 'Acompanhamentos',
    drinks: 'Bebidas'
  }[category];

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full whitespace-nowrap ${
        isActive 
          ? 'bg-yellow-500 text-black font-bold' 
          : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
      }`}
    >
      {displayName}
    </button>
  );
}