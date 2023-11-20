import React, { useState } from "react";
import CustomerOrder from "./CustomerOrder";
import { Order } from "../models/Order";

interface CustomerOrdersListProps {}

const CustomerOrdersList: React.FC<CustomerOrdersListProps> = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      orderID: 1,
      orderType: "delivery",
      from: "A",
      to: "B",
      date: new Date(),
      price: 50,
      status: "in progress",
    },
    {
      orderID: 2,
      orderType: "pick",
      from: "C",
      to: "D",
      date: new Date(),
      price: 30,
      status: "in progress",
    },
    {
      orderID: 3,
      orderType: "customer order",
      from: "E",
      to: "F",
      date: new Date(),
      price: 40,
      status: "in progress",
    },
    {
      orderID: 4,
      orderType: "delivery",
      from: "G",
      to: "H",
      date: new Date(),
      price: 60,
      status: "finished",
    },
    {
      orderID: 5,
      orderType: "pick",
      from: "I",
      to: "J",
      date: new Date(),
      price: 25,
      status: "not delivered",
    },
    // .
  ]);

  const handleFinish = (orderId: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderID === orderId
          ? { ...order, status: "finished" as const }
          : order
      )
    );
  };

  const handleCancel = (orderId: number) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderID === orderId
          ? { ...order, status: "not delivered" }
          : order
      )
    );
  };

  const handleDelete = (orderId: number) => {
    // Usuń zamówienie o podanym orderId
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.orderID !== orderId)
    );
  };

  return (
    <div>
      {orders.map((order) => (
        <CustomerOrder
          key={order.orderID}
          order={order}
          onFinish={handleFinish}
          onCancel={handleCancel}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CustomerOrdersList;
