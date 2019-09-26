import React from "react";

const UsuarioComponente = ({
  nombre = "vacio",
  email,
  telefono,
  seleccionar = () => {}
}) => (
  <tr>
    <td>{nombre}</td>
    <td>{email}</td>
    <td>{telefono}</td>
    <td>
      <button onClick={() => seleccionar({ nombre, email, telefono })}>
        editar
      </button>
    </td>
  </tr>
);

export default UsuarioComponente;
