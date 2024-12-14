import { useState, useCallback } from 'react';
import { MenuItem } from '../types/menu';
import { menuItems } from '../data/menuItems';

type Category = 'all' | 'burgers' | 'sides' | 'drinks';

export function useMenu() {
  const [category, setCategory] = useState<Category>('all');

  const filteredItems = useCallback(() => {
    return category === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === category);
  }, [category]);

  return {
    category,
    setCategory,
    items: filteredItems(),
    allItems: menuItems
  };
}