import React from 'react';
import '../../App.css'; //Mantiene los estilos

function Dashboard({ cart }) {
  // Cantidad total de ítems sumando cantidades
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  // Total a pagar multiplicando precio * cantidad
  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <section className="dashboard">
      <h2>Resumen de la Tienda</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Productos en el carrito</h3>
          <p>{totalItems}</p>
        </div>
        <div className="card">
          <h3>Total a pagar</h3>
          <p>${total.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Promoción del día</h3>
          <p>¡Labiales al 20% de descuento!</p>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
