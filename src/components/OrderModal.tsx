import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { OrderItem } from '../types/menu';
import { formatOrderMessage, generateWhatsAppLink } from '../utils/whatsapp';
import { RESTAURANT_CONFIG } from '../config/restaurant';
import { isBusinessOpen } from '../utils/businessHours';

interface OrderModalProps {
  items: OrderItem[];
  onClose: () => void;
}

export default function OrderModal({ items, onClose }: OrderModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [isDelivery, setIsDelivery] = useState(true);
  const [validationError, setValidationError] = useState('');

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = isDelivery ? RESTAURANT_CONFIG.deliveryInfo.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isBusinessOpen()) {
      setValidationError('Desculpe, estamos fechados no momento. Confira nosso horário de funcionamento.');
      return;
    }

    if (subtotal < RESTAURANT_CONFIG.deliveryInfo.minimumOrder) {
      setValidationError(`O pedido mínimo é R$ ${RESTAURANT_CONFIG.deliveryInfo.minimumOrder.toFixed(2)}`);
      return;
    }

    const message = formatOrderMessage(items, customerName, address, isDelivery);
    const whatsappLink = generateWhatsAppLink(message);
    window.open(whatsappLink, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Finalizar Pedido</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {validationError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p>{validationError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Tipo de Pedido
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={isDelivery}
                  onChange={() => setIsDelivery(true)}
                  className="mr-2"
                />
                Entrega
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  checked={!isDelivery}
                  onChange={() => setIsDelivery(false)}
                  className="mr-2"
                />
                Retirada
              </label>
            </div>
          </div>

          {isDelivery && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Endereço Completo
              </label>
              <textarea
                required={isDelivery}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={3}
              />
            </div>
          )}

          <div className="border-t pt-4">
            <h4 className="font-semibold mb-2">Resumo do Pedido:</h4>
            {items.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.quantity}x {item.name}</span>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between mb-1">
                <span>Subtotal:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
              </div>
              {isDelivery && (
                <div className="flex justify-between mb-1">
                  <span>Taxa de entrega:</span>
                  <span>R$ {deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold 
              hover:bg-green-700 transition-colors"
          >
            Enviar Pedido pelo WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}