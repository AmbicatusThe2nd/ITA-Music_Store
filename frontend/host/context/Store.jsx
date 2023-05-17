import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart items from local storage when component mounts
        const items = localStorage.getItem("cartItems");
        return items ? JSON.parse(items) : [];
    });

    useEffect(() => {
        // Update local storage whenever cart items change
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    const addItemToCart = (item) => {
        setCartItems((prevCartItems) => [...prevCartItems, item]);
        console.log(cartItems);
    };

    const removeItemFromCart = (itemId) => {
        setCartItems((prevCartItems) =>
            prevCartItems.filter((item) => item.id !== itemId)
        );
    };

    const contextValues = {
        cartItems,
        addItemToCart,
        removeItemFromCart
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;