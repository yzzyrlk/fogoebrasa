export interface BusinessHours {
  open: string;
  close: string;
}

export interface DeliveryInfo {
  minimumOrder: number;
  deliveryFee: number;
  estimatedTime: string;
  deliveryArea: string[];
}

export interface RestaurantConfig {
  name: string;
  whatsapp: string;
  address: string;
  businessHours: {
    weekday: BusinessHours;
    weekend: BusinessHours;
    sunday: BusinessHours;
  };
  deliveryInfo: DeliveryInfo;
}