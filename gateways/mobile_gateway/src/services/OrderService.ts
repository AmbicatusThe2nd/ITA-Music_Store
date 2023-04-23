import axios from "axios";
import Order from "../models/Order";

require("dotenv").config();

async function getAllOrders(): Promise<Order[]> {
    const response = await axios.get(process.env.ORDER_SERVICE_URL as string);
    return response.data;
}

export default { getAllOrders } as const;