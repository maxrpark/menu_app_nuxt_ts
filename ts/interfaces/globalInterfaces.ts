export interface OrderInterface {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
}
export interface TableInterface {
  id: number | string;
  available: boolean;
  name: string;
  number_of_seats: string;
  order: any;
  // order: OrderInterface[] | any;
  number_of_guests: number;
  total_amount: number;
}
