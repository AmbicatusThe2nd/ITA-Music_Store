import axios from "axios";
import Order from "../models/Order";

require("dotenv").config();

async function getAllOrders(): Promise<Order[]> {
  const response = await axios.get(process.env.ORDER_SERVICE_URL as string);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data;
}

async function addOrder(order: Order): Promise<Order> {
  const response = await axios.post(
    process.env.ORDER_SERVICE_URL as string,
    order
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data;
}

export default { getAllOrders, addOrder } as const;
