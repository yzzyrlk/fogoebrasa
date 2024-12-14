import React, { useState } from 'react';
import { Utensils, ShoppingBag } from 'lucide-react';
import { CategoryButton } from './buttons/CategoryButton';
import MenuItem from './MenuItem';
import OrderModal from './OrderModal';
import { useMenu } from '../hooks/useMenu';
import { useCart } from '../hooks/useCart';
import { ActionButton } from './buttons/ActionButton';

export default function Menu() {
  const { category, setCategory, items } = useMenu();
  const { orderItems, addToCart, clearCart, totalItems } = useCart();
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handleFinishOrder = () => {
    setShowOrderModal(true);
  };

  const handleCloseModal = () => {
    setShowOrderModal(false);
    clearCart();
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Utensils className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-4xl font-bold mb-4">Nosso Menu</h2>
          <p className="text-gray-600">Escolha seu hambúrguer favorito</p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {['all', 'burgers', 'sides', 'drinks'].map((cat) => (
              <CategoryButton
                key={cat}
                category={cat}
                isActive={category === cat}
                onClick={() => setCategory(cat as any)}
              />
            ))}
          </div>

          {orderItems.length > 0 && (
            <ActionButton
              text={`Finalizar Pedido (${totalItems})`}
              onClick={handleFinishOrder}
              className="bg-green-600 hover:bg-green-700 text-white"
              icon={true}
            />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onAddToOrder={addToCart}
            />
          ))}
        </div>

        {showOrderModal && (
          <OrderModal
            items={orderItems}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </section>
  );
}