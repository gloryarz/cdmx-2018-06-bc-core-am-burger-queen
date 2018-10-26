import React, { Component } from "react";
import {Button} from 'react-bootstrap';

class Prueba extends Component {
  constructor(props) {
    super(props);
    console.log('aqui props', props.menu.desayunos);
    }
    
    probando = (el) => {
      alert(el.target, 'sirve');
    }

    render() {
        const menuDesayuno = this.props.menu.desayunos.map(dish => {
          return (
              <Button id={dish.id} onClick={this.probando}>{dish.food}</Button>
          );
        });

        const menuComida = this.props.menu.comida.map(dish => {
          return (
            <Button id={dish.id} onClick={this.probando}>{dish.food}</Button>
          );
        });
    
        return (
          <div className="container">
            <h2>Desayuno</h2>
            <div className="row">{menuDesayuno}</div>
            <h2>Comida</h2>
            <div className="row">{menuComida}</div>
          </div>
        );
      }
}

export default Prueba;
