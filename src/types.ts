export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface Reservation {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}