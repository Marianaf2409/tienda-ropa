import React from "react";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  // Suma total de cantidades en el carrito
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <nav className="nav-bar">
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>

      <Link to="/carrito">
        Carrito{totalItems > 0 ? ` (${totalItems})` : ""}
      </Link>
    </nav>
  );
}

export default Navbar;
