import React from 'react';
import Header from './components/Header';
import { BusinessHoursBanner } from './components/BusinessHoursBanner';
import Hero from './components/Hero';
import Menu from './components/Menu';
import { DeliveryInfo } from './components/DeliveryInfo';
import Reservations from './components/Reservations';

function App() {
  return (
    <div className="min-h-screen">
      <BusinessHoursBanner />
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <DeliveryInfo />
      </div>
      <Menu />
    </div>
  );
}

export default App;