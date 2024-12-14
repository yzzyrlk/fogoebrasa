export function formatPrice(value: number): string {
  return value.toFixed(2);
}

export function calculateTotal(subtotal: number, deliveryFee: number): number {
  return subtotal + deliveryFee;
}