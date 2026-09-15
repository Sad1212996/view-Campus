export interface Stop {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export interface Driver {
  name: string;
  initials: string;
  rating: number;
  totalTrips: number;
  phoneMasked: string;
  licenseIdMasked: string;
  verified: boolean;
  memberSince: string;
}

export interface Vehicle {
  plate: string;
  model: string;
  color: string;
  capacity: number;
  verified: boolean;
  lastInspection: string;
}

export interface Route {
  id: string;
  code: string;
  name: string;
  accent: "red" | "blue" | "green" | "yellow";
  stops: Stop[];
  baseFare: number;
  perStopFare: number;
  departureIntervalMin: number;
  driver: Driver;
  vehicle: Vehicle;
}

export interface LiveState {
  secondsToDeparture: number;
  waiting: number;
  onboard: number;
}
