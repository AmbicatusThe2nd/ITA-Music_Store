import axios from "axios";
import SensorModel from "../models/SensorModel";

require("dotenv").config();

async function getAllSensors(): Promise<SensorModel[]> {
    const response = await axios.get(process.env.SENSOR_SERVICE_URL as string);
    return response.data;
}

export default { getAllSensors } as const;