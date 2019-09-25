import React from "react";
import "./App.css";
import UsuarioComponente from "./UsuarioComponente";
import FormularioUsuario from "./FormularioUsuario";

class App extends React.Component {
  constructor() {
    super();
    this.seleccionarUsuarioAEditar = this.seleccionarUsuarioAEditar.bind(this);
  }

  state = {
    usuarioAEditar: {},
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

  seleccionarUsuarioAEditar(usuario) {
    this.setState({ usuarioAEditar: usuario });
  }

  onUsuarioChange = evento => {
    const namedelinput = evento.target.name;
    console.log("namedelinput", namedelinput);

    const valordelinput = evento.target.value;
    console.log("valordelinput", valordelinput);

    this.setState({
      usuarioAEditar: {
        ...this.state.usuarioAEditar,
        [namedelinput]: valordelinput
      }
    });
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
        />
      </div>
    );
  }
}

export default App;
