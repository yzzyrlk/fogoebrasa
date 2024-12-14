import React, { useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import type { Reservation } from '../types';

export default function Reservations() {
  const [reservation, setReservation] = useState<Reservation>({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 2
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a chamada real para API
    console.log('Reservation submitted:', reservation);
    // Limpar formulário após sucesso
    setReservation({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: 2
    });
  };

  return (
    <section id="reservations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Calendar className="w-12 h-12 mx-auto text-red-700 mb-4" />
            <h2 className="text-4xl font-bold mb-4">Faça sua Reserva</h2>
            <p className="text-gray-600">
              Reserve sua mesa e garanta uma experiência gastronômica inesquecível
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={reservation.name}
                  onChange={(e) => setReservation({...reservation, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={reservation.email}
                  onChange={(e) => setReservation({...reservation, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Data
                </label>
                <input
                  type="date"
                  required
                  value={reservation.date}
                  onChange={(e) => setReservation({...reservation, date: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Horário
                </label>
                <input
                  type="time"
                  required
                  value={reservation.time}
                  onChange={(e) => setReservation({...reservation, time: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Pessoas
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  required
                  value={reservation.guests}
                  onChange={(e) => setReservation({
                    ...reservation, 
                    guests: parseInt(e.target.value)
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                    focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold 
                hover:bg-red-800 transition-colors"
            >
              Confirmar Reserva
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}