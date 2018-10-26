import React, { Component } from "react";
import {Button} from 'react-bootstrap';

class Prueba extends Component {
  constructor(props) {
    super(props);
    console.log('aqui props', props.menu.desayunos);
    }

    state = {
      count: 0,
      lista: ""
    };
    
    probando = (el) => {
      console.log(el.dish.food)
      this.setState({count: this.state.count + el.dish.price})
      this.setState({lista: this.state.lista + el.dish.food})
    }  

    render() {

        const menuDesayuno = this.props.menu.desayunos.map(dish => {
          return (
              <Button key={dish.id} onClick={() => this.probando({dish})}>{dish.food}</Button>
          );
        });

        const menuComida = this.props.menu.comida.map(dish => {
          return (
            <Button key={dish.id} onClick={() => this.probando({dish})}>{dish.food}</Button>
          );
        });
    
        return (
          <div className="container">
            <h2>Desayuno</h2>
            <div className="row">{menuDesayuno}</div>
            <h2>Comida</h2>
            <div className="row">{menuComida}</div>
            <h2>Resultado</h2>
            <p>{this.state.count}</p>
            <p>{this.state.lista}</p>
          </div>
        );
      }
}

export default Prueba;
