import { OrderItem } from '../types/menu';
import { RESTAURANT_CONFIG } from '../config/restaurant';

export function formatOrderMessage(
  items: OrderItem[],
  customerName: string,
  address: string,
  isDelivery: boolean
): string {
  const itemsList = items
    .map(item => `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}${item.observations ? `\n  Obs: ${item.observations}` : ''}`)
    .join('\n');

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = isDelivery ? RESTAURANT_CONFIG.deliveryInfo.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  const message = `*Novo Pedido - ${RESTAURANT_CONFIG.name}*
Cliente: ${customerName}
Tipo: ${isDelivery ? 'Entrega' : 'Retirada'}
${isDelivery ? `Endereço: ${address}` : ''}

*Itens do Pedido:*
${itemsList}

*Subtotal: R$ ${subtotal.toFixed(2)}*
${isDelivery ? `Taxa de Entrega: R$ ${deliveryFee.toFixed(2)}` : ''}
*Total: R$ ${total.toFixed(2)}*

Tempo estimado: ${RESTAURANT_CONFIG.deliveryInfo.estimatedTime} minutos`;

  return encodeURIComponent(message);
}

export function generateWhatsAppLink(message: string): string {
  return `https://wa.me/${RESTAURANT_CONFIG.whatsapp}?text=${message}`;
}