import React from "react";
import "./App.css";
import UsuarioComponente from "./UsuarioComponente";
import FormularioUsuario from "./FormularioUsuario";

class App extends React.Component {
  constructor() {
    super();
    this.seleccionarUsuarioAEditar = this.seleccionarUsuarioAEditar.bind(this);
    this.state = {
      usuarioAEditar: {
        nombre: "",
        email: "",
        telefono: ""
      },
      usuarios: [
        {
          nombre: "usuario0",
          email: "usuario0@gmail.com",
          telefono: "2342354345435"
        },
        {
          nombre: "usuario1",
          email: "usuario1@gmail.com",
          telefono: "2342354345435"
        },
        {
          nombre: "usuario2",
          email: "usuario2@gmail.com",
          telefono: "2342354345435"
        },
        {
          nombre: "usuario3",
          email: "usuario3@gmail.com",
          telefono: "2342354345435"
        },
        {
          nombre: "usuario4",
          email: "usuario4@gmail.com",
          telefono: "2342354345435"
        }
      ]
    };
  }

  seleccionarUsuarioAEditar(usuario) {
    this.setState({ usuarioAEditar: usuario });
  }

  onUsuarioChange = evento => {
    const namedelinput = evento.target.name;
    console.log("namedelinput", namedelinput);

    let { usuarioAEditar } = this.state;
    let newUsuario = { ...usuarioAEditar };

    const valordelinput = evento.target.value;
    console.log("valordelinput", valordelinput);

    newUsuario[namedelinput] = valordelinput;

    this.setState(estadoActual => ({
      ...estadoActual,
      usuarioAEditar: newUsuario
    }));

    console.log(this.state);
  };

  crearNuevoUsuario = evento => {
    evento.preventDefault();
    fetch("http://localhost:3001/usuarios", {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.usuarioAEditar) // body data type must match "Content-Type" header
    })
      .then(respuestaStream => respuestaStream.json())
      .then(usuarioRecienCreado => {
        let { usuarios } = this.state;
        let nuevosUsuarios = [...usuarios, usuarioRecienCreado];
        this.setState({
          usuarios: nuevosUsuarios
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h1>Usuarios</h1>
        <div className="special-thanks">
          Estilos por nikhil8krishnan en{" "}
          <a
            href="https://codepen.io/nikhil8krishnan/pen/WvYPvv"
            target="_blank"
          >
            codepen
          </a>
        </div>
        <div className="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>email</th>
                <th>telefono</th>
                <th>Editar</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              {this.state.usuarios.map((unUsuarioDelArray, indice) => (
                <UsuarioComponente
                  key={indice}
                  {...unUsuarioDelArray}
                  seleccionar={this.seleccionarUsuarioAEditar}
                />
              ))}
            </tbody>
          </table>
        </div>
        <FormularioUsuario
          {...this.state.usuarioAEditar}
          onUsuarioChange={this.onUsuarioChange}
          onUserCreate={this.crearNuevoUsuario}
        />
      </div>
    );
  }
}

export default App;
