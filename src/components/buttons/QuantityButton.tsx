import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface QuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityButton({ quantity, onIncrease, onDecrease }: QuantityButtonProps) {
  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={onDecrease}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Diminuir quantidade"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="w-8 text-center font-bold">{quantity}</span>
      <button
        onClick={onIncrease}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Aumentar quantidade"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}