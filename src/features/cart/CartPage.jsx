import React from "react";
import "../../App.css";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <section className="cart">
      <h2>🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id || index}>
                <td>{item.title}</td> {/* Usamos title según API */}
                <td>${item.price.toLocaleString("es-CO")}</td>
                <td>{item.quantity || 1}</td>
                <td>${(item.price * (item.quantity || 1)).toLocaleString("es-CO")}</td>
                <td>
                  <button onClick={() => removeFromCart(index)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>
                Total:
              </td>
              <td colSpan="2" style={{ fontWeight: "bold" }}>
                ${total.toLocaleString("es-CO")}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </section>
  );
}

export default CartPage;
