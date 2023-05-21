import axios from "axios";
import Order from "../models/Order";

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
require("dotenv").config();

async function getAllOrders(): Promise<Order[]> {
  // eslint-disable-next-line node/no-process-env
  const response = await axios.get(process.env.ORDER_SERVICE_URL as string);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data;
}

async function addOrder(order: Order): Promise<Order> {
  const response = await axios.post(
    // eslint-disable-next-line node/no-process-env
    process.env.ORDER_SERVICE_URL as string,
    order
  );
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response.data;
}

export default { getAllOrders, addOrder } as const;
