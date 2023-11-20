export interface Order {
  orderID: number;
  orderType: "delivery" | "pick" | "customer order";
  from: string;
  to: string;
  date: Date;
  price: number;
  status: "in progress" | "finished" | "not delivered";
}
