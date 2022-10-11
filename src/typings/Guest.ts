export interface Guest {
  id: string;
  name: string;
  address: {
    state: string;
    zip: string;
    timezone: string;
  };
  email: string;
  avatar: string;
  birthdate: string;
  registeredAt: string;
  visitCount: number;
  lifetimeSpend: number;
}
