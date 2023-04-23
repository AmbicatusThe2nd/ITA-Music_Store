import HtppStatus from '@src/constants/HttpStatusCodes';

import SensorService from '@src/services/SensorService';
import SensorModel from '@src/models/SensorModel';
import { IReq, IRes } from './types/express/misc';

async function getAll(_: IReq, res: IRes) {
  const sensors = await SensorService.getAllSensors();
  return res.status(HtppStatus.OK).json({ sensors });
}

export default { getAll } as const;