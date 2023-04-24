import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import OrderService from '@src/services/OrderService';
import Order from '@src/models/Order';
import { IReq, IRes } from './types/express/misc';

async function getAll(_: IReq, res: IRes) {
  const orders = await OrderService.getAllOrders();
  return res.status(HttpStatusCodes.OK).json({ orders });
}
    
export default { getAll } as const;