import { RESTAURANT_CONFIG } from '../config/restaurant';

type DayType = 'weekday' | 'weekend' | 'sunday';

export function isBusinessOpen(): boolean {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  const day = now.getDay();

  // Determina o tipo do dia (weekend, weekday, sunday)
  let dayType: DayType;
  if (day === 0) dayType = 'sunday';
  else if (day === 5 || day === 6) dayType = 'weekend';
  else dayType = 'weekday';

  const { businessHours } = RESTAURANT_CONFIG;
  const { open, close } = businessHours[dayType];

  // Converte horários para minutos para comparação
  const currentMinutes = hour * 60 + minutes;
  const openMinutes = parseInt(open.split(':')[0]) * 60 + parseInt(open.split(':')[1]);
  const closeMinutes = parseInt(close.split(':')[0]) * 60 + parseInt(close.split(':')[1]);

  // Ajuste para horários após meia-noite
  if (dayType === 'weekend' && closeMinutes < openMinutes) {
    return currentMinutes >= openMinutes || currentMinutes <= closeMinutes;
  }

  return currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
}