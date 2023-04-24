import axios from "axios";
import Item from "../models/Item";
import https from "https";

require("dotenv").config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const instance = axios.create({
  httpAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

async function getAllItems(): Promise<Item[]> {
  const response = await instance.get(process.env.ITEM_SERVICE_URL as string);
  return response.data;
}

async function getOneItem(id: string): Promise<Item[]> {
  const response = await instance.get(`${process.env.ITEM_SERVICE_URL}/${id}`);
  return response.data;
}

export default { getAllItems, getOneItem } as const;
