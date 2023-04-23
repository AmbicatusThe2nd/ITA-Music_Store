import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ItemService from '@src/services/ItemService';
import Item from '@src/models/Item';
import { IReq, IRes } from './types/express/misc';

async function getAll(_: IReq, res: IRes) {
  const items = await ItemService.getAllItems();
  return res.status(HttpStatusCodes.OK).json({ items });
}

export default {
    getAll,
} as const;