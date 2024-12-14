import React from 'react';
import { Clock } from 'lucide-react';
import { isBusinessOpen } from '../utils/businessHours';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { Banner } from './ui/Banner';

export function BusinessHoursBanner() {
  const isOpen = isBusinessOpen();
  const { businessHours } = RESTAURANT_CONFIG;

  return (
    <Banner
      variant={isOpen ? 'success' : 'error'}
      icon={Clock}
    >
      {isOpen ? (
        <span>Estamos abertos! Faça seu pedido</span>
      ) : (
        <div>
          <span>Estamos fechados no momento. </span>
          <span className="font-semibold">
            Horário de funcionamento:
            <br />
            Seg-Qui: {businessHours.weekday.open} às {businessHours.weekday.close}
            <br />
            Sex-Sáb: {businessHours.weekend.open} à {businessHours.weekend.close}
            <br />
            Dom: {businessHours.sunday.open} às {businessHours.sunday.close}
          </span>
        </div>
      )}
    </Banner>
  );
}