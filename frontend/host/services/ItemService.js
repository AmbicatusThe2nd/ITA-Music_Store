import axios from 'axios';


const api_url = 'http://localhost:3000/api/items/all'; // I know bad practice, but what can you do ?


export async function GetAllItems() {
    const response = await axios.get(api_url);
    return response.data;
}