import React, { useEffect, useState } from "react";
import "../../App.css";

function ProductsPage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Consumir API pública de productos
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section>
      <h2>Catálogo de Productos</h2>

      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p>Cargando productos...</p>
        </div>
      ) : (
        <div className="catalogo">
          {products.map((item) => (
            <div className="producto" key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p><em>{item.category}</em></p> {/* Aquí mostramos la categoría */}
              <p>${item.price.toLocaleString("es-CO")}</p>
              <button onClick={() => addToCart(item)}>Añadir al carrito</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductsPage;

