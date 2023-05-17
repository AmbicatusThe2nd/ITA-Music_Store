import React from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.scss";
import Home from "./components/home/Home";
import Navbar from "remote/Navbar";
import Cart from "./components/cart/Cart";
import CartContextProvider from "../context/Store";
import Checkout from "./components/checkout/Checkout";

const App = () => (
  <div className="app">
    <Navbar />
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={
            <CartContextProvider>
              <Cart />
            </CartContextProvider>
          } />
          <Route path="/checkout" element={
            <CartContextProvider>
              <Checkout />
            </CartContextProvider>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);


const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(<App />);
