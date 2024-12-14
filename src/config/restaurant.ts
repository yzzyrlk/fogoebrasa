import { RestaurantConfig } from '../types/config';

export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: 'Smash King',
  whatsapp: '5543984390754', // Substitua pelo número real
  address: 'Rua Example, 123 - São Paulo, SP',
  businessHours: {
    weekday: {
      open: '07:00',
      close: '23:00'
    },
    weekend: {
      open: '07:00',
      close: '01:00'
    },
    sunday: {
      open: '07:00',
      close: '12:00'
    }
  },
  deliveryInfo: {
    minimumOrder: 25.0,
    deliveryFee: 5.0,
    estimatedTime: '30-45',
    deliveryArea: ['Bairro 1', 'Bairro 2', 'Bairro 3'] // Lista de bairros atendidos
  }
};