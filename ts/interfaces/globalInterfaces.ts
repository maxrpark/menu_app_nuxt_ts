export interface OrderInterface {
  id: number | string;
  comida: string;
  price: number;
  amount: number;
  isCompleted?: boolean;
}
export interface TableInterface {
  id: string;
  available: boolean;
  name: string;
  image: string;
  desc: string;
  number_of_seats: string;
  order: OrderInterface[] | any; //fix
  number_of_guests: number;
  total_amount: number; //fix
  total: number;
}

export interface Menu {
  id: number;
  name: string;
  price: number;
  category: string;
  tags: string[];
  url: string;
  desc: string;
}
