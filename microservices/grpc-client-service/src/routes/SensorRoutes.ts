import HttpStatusCodes from "@src/constants/HttpStatusCodes";

import SensorService from "@src/services/SensorService";
import SensorModel from "@src/models/SensorModel";
import { IReq, IRes } from "./types/express/misc";

async function getAll(_: IReq, res: IRes) {
  const sensorData = await SensorService.getSensorData();
  return res.status(HttpStatusCodes.OK).json({ sensorData });
}

export default { getAll } as const;
