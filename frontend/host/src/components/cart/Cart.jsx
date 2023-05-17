import { useContext } from "react";
import { CartContext } from "../../../context/Store";
import { Navigate, Link } from "react-router-dom";

const Cart = () => {

    const { cartItems, removeItemFromCart } = useContext(CartContext);

    const handleCheckout = () => {
        return <Navigate to="/checkout" />;
    };

    return (
        <div className="min-h-80 max-w-2xl my-4 sm:my-8 mx-auto w-full">
            <div className="flex flex-col items-center">
                <table className="mx-auto">
                    <thead>
                        <tr className="uppercase text-xs sm:text-sm text-palette-primary border-b border-palette-light">
                            <th className="font-primary font-normal px-6 py-4">Product</th>
                            <th className="font-primary font-normal px-6 py-4">Quantity</th>
                            <th className="font-primary font-normal px-6 py-4 hidden sm:table-cell">Price</th>
                            <th className="font-primary font-normal px-6 py-4">Remove</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-palette-lighter">
                        {cartItems.map((item, index) => (
                            <tr key={index} className="text-sm sm:text-base text-gray-600 text-center">
                                <td className="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
                                    <img
                                        src={item.image}
                                        alt='alt'
                                        height={64}
                                        width={64}
                                        className={`hidden sm:inline-flex`}
                                    />
                                </td>
                                <td className="font-primary font-medium px-4 sm:px-6 py-4">
                                    <input
                                        type="number"
                                        inputMode="numeric"
                                        id="variant-quantity"
                                        name="variant-quantity"
                                        min="1"
                                        step="1"
                                        value={"1"}
                                        onChange={(e) => {
                                            console.log(e);
                                        }}
                                        className="text-gray-900 form-input border border-gray-300 w-16 rounded-sm focus:border-palette-light focus:ring-palette-light"
                                    />
                                </td>
                                <td className="font-primary text-base font-light px-4 sm:px-6 py-4 hidden sm:table-cell">
                                    { item.sale_price }
                                </td>
                                <td className="font-primary font-medium px-4 sm:px-6 py-4">
                                    <button
                                        aria-label="delete-item"
                                        className=""
                                        onClick={() => removeItemFromCart(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <Link to='/checkout'>
                    <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-full">
                        Checkout
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart;
