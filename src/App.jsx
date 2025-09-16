import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./features/shared/Header";
import ProductsPage from "./features/products/ProductsPage";
import CartPage from "./features/cart/CartPage";
import Navbar from "./features/shared/Navbar";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
        return updatedCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/productos" element={<ProductsPage addToCart={addToCart} />} />
        <Route path="/carrito" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
