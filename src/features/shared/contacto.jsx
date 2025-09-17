import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../App.css";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nfvbqa8",   // <-- Reemplaza aquí
        "template_vl7ydan",  // <-- Reemplaza aquí
        e.target,
        "I4CPCZIZaC2bP4ki3"    // <-- Reemplaza aquí
      )
      .then(
        (result) => {
          setEnviado(true);
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          alert("Error al enviar el mensaje. Intenta nuevamente.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contacto-container">
      <h2 className="contacto-title">Contáctanos</h2>

      {enviado ? (
        <p className="contacto-success">
          ✅ ¡Gracias por tu mensaje! Te responderemos pronto.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contacto-form">
          <label className="contacto-label">
            Nombre
            <input type="text" name="nombre" required className="contacto-input" />
          </label>

          <label className="contacto-label">
            Correo electrónico
            <input type="email" name="correo" required className="contacto-input" />
          </label>

          <label className="contacto-label">
            Mensaje
            <textarea name="mensaje" required className="contacto-textarea"></textarea>
          </label>

          <button type="submit" className="contacto-button">
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}

export default Contacto;
