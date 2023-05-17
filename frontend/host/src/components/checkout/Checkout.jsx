import { useState, useContext } from "react";
import { CartContext } from "../../../context/Store";
import { CompleteOrder } from "../../../services/OrderService";
import { useNavigate } from "react-router-dom";


const Checkout = () => {

    const navigate = useNavigate();

    const { cartItems } = useContext(CartContext);

    const [info, setInfo] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInfo({ ...info, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const order = {
            customerName: info.name,
            costumerEmail: info.email,
            shippingAddress: {
                street: info.street,
                city: info.city,
                state: info.state,
                zip: info.zip,
                country: info.country,
            },
            billingAddress: {
                street: info.street,
                city: info.city,
                state: info.state,
                zip: info.zip,
                country: info.country,
            },
            items: [],
            total: 200,
            shippingCost: 5,
            shippingMethod: "Standard"
        }

        cartItems.map((cartItem) => {
            order.items.push({
                _id: cartItem.id,
                name: cartItem.name,
                price: parseFloat(cartItem.price.replace("€", "").replace(",", ".")),
                quintity: 1
            });
        })

        console.log(order);
        CompleteOrder(order).then((response) => {
            console.log(response);
            navigate('/');
        }).catch(() => {
            console.log('The api failed');
        })
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-lg font-bold mb-4"> Give us your shipping information </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        onChange={handleChange}
                        value={info.name}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="johndoe@example.com"
                        required
                        onChange={handleChange}
                        value={info.email}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="message"
                    >
                        Street
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        id="street"
                        name="street"
                        type="street"
                        placeholder="bevkova"
                        required
                        onChange={handleChange}
                        value={info.street}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="message"
                    >
                        City
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        id="city"
                        name="city"
                        type="city"
                        placeholder="Maribor"
                        required
                        onChange={handleChange}
                        value={info.city}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="message"
                    >
                        State
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        id="state"
                        name="state"
                        type="state"
                        placeholder="Styria"
                        required
                        onChange={handleChange}
                        value={info.state}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="message"
                    >
                        Zip
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        id="zip"
                        name="zip"
                        type="zip"
                        placeholder="2000"
                        required
                        onChange={handleChange}
                        value={info.zip}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="message"
                    >
                        Country
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        id="country"
                        name="country"
                        type="country"
                        placeholder="Slovenia"
                        required
                        onChange={handleChange}
                        value={info.country}
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}

export default Checkout;