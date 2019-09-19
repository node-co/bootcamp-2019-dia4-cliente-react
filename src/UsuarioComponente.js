import React from "react";

const UsuarioComponente = ({
  nombre = "vacio",
  email,
  telefono,
  seleccionar = () => {}
}) => (
  <div className="usuario">
    <span className="nombre">{nombre}</span>
    <span className="email">{email}</span>
    <span className="telefono">{telefono}</span>
    <button onClick={() => seleccionar({ nombre, email, telefono })}>
      editar
    </button>
  </div>
);

export default UsuarioComponente;
