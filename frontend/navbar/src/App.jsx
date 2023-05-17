import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar/Navbar";

import "./index.scss";

const App = () => (
  <div className="navbar">
    <Navbar />
  </div>
);


const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
root.render(<App />);
