import { useState, useCallback } from 'react';
import { OrderItem, MenuItem } from '../types/menu';

export function useCart() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const addToCart = useCallback((item: MenuItem, quantity: number, observations?: string) => {
    setOrderItems(prev => [...prev, { ...item, quantity, observations }]);
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    setOrderItems(prev => prev.filter(item => item.id !== itemId));
  }, []);

  const clearCart = useCallback(() => {
    setOrderItems([]);
  }, []);

  const updateQuantity = useCallback((itemId: number, quantity: number) => {
    setOrderItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  }, []);

  const totalItems = orderItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return {
    orderItems,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    totalItems,
    totalPrice
  };
}