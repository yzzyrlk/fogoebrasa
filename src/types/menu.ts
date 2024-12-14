export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export type MenuCategory = 'all' | 'carnes' | 'acompanhamentos' | 'bebidas';

export interface OrderItem extends MenuItem {
  quantity: number;
  observations?: string;
}