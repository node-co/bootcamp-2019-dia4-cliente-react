import React from "react";

const FormularioUsuario = ({
  nombre = "",
  email = "",
  telefono = "",
  onUsuarioChange = () => {}
}) => (
  <form>
    Nombre
    <input name="nombre" value={nombre} onChange={onUsuarioChange} />
    Email
    <input name="email" value={email} onChange={onUsuarioChange} />
    Telefono
    <input name="telefono" value={telefono} onChange={onUsuarioChange} />
    <button type="submit">Guardar</button>
  </form>
);

export default FormularioUsuario;
