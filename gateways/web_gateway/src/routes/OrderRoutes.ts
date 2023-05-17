import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import OrderService from "@src/services/OrderService";
import Order from "@src/models/Order";
import { IReq, IRes } from "./types/express/misc";

async function getAll(_: IReq, res: IRes) {
  const orders = await OrderService.getAllOrders();
  return res.status(HttpStatusCodes.OK).json({ orders });
}

async function addOrder(req: IReq, res: IRes) {
  console.log("addOrder");
  const order = req.body as unknown as Order;
  const newOrder = await OrderService.addOrder(order);
  return res.status(HttpStatusCodes.OK).json({ order: newOrder });
}

export default { getAll, addOrder } as const;
