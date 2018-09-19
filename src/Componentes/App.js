import React, { Component } from 'react';
/**
 * import components
 */
import Header from './Header/Header'
import Formulario from './Formulario/Formulario'

class App extends Component {

  cotizarSeguro = infoAuto =>{
    console.log(infoAuto);
    
  }

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de Autos"/>
        <div className="contenedor-formulario">
        <Formulario
          cotizarSeguro={this.cotizarSeguro}
        />
        </div>
      </div>

    );
  }
}

export default App;
