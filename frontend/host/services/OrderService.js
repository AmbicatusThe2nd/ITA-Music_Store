import axios from 'axios';

const api_url = "http://localhost:3000/api/orders/add";

export async function CompleteOrder(order) {
    const result = axios.post(api_url, order).then((response) => {
        return response;
    });

    return result;
}