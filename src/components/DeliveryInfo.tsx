import React from 'react';
import { Truck, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export function DeliveryInfo() {
  const { deliveryInfo } = RESTAURANT_CONFIG;

  return (
    <div className="bg-gray-100 p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4">Informações de Entrega</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Truck className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="font-medium">Taxa de entrega</p>
            <p className="text-gray-600">R$ {deliveryInfo.deliveryFee.toFixed(2)}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="font-medium">Tempo estimado</p>
            <p className="text-gray-600">{deliveryInfo.estimatedTime} minutos</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="font-medium">Área de entrega</p>
            <p className="text-gray-600">{deliveryInfo.deliveryArea.join(', ')}</p>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-100 rounded-md">
          <p className="text-sm font-medium">
            Pedido mínimo: R$ {deliveryInfo.minimumOrder.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}