import React from "react";
import { Order } from "../models/Order";

interface CustomerOrderProps {
  order: Order;
  onFinish: (orderId: number) => void;
  onCancel: (orderId: number) => void;
  onDelete: (orderId: number) => void;
}

const CustomerOrder: React.FC<CustomerOrderProps> = ({
  order,
  onFinish,
  onCancel,
  onDelete,
}) => {
  const handleFinishClick = () => {
    onFinish(order.orderID);
  };

  const handleCancelClick = () => {
    onCancel(order.orderID);
  };

  const handleDeleteClick = () => {
    onDelete(order.orderID);
  };

  return (
    <div>
      <div className="wrapper">
        <div>
          <p>Order ID: {order.orderID}</p>
          <p>Order Type: {order.orderType}</p>
          <p>From: {order.from}</p>
          <p>To: {order.to}</p>
          <p>Date: {order.date.toISOString()}</p>
          <p>Price: {order.price}</p>
          <p>Status: {order.status}</p>
        </div>
        <div>
          <button onClick={handleFinishClick}>Finish</button>
          <button onClick={handleCancelClick}>Cancel</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CustomerOrder;
