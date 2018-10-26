import React, { Component } from "react";
import {Menu} from "../../Data/menu2";
import {Button} from "react-bootstrap";

class Pedidos extends Component {
  constructor(props) {
    super(props);
    this.clicki = this.clicki.bind(this)
  }

  clicki(){
      console.log("Aquí el menu", Menu)
      for (const comida in Menu){
        const horas = Menu[comida];
        console.log(horas)
        horas.forEach(element => {
          console.log(element.food)
        });
      }
  }
  
  desayuno = () => {
    for (const comida in Menu){
      const horas = Menu[comida];
      console.log(horas)
    }
  }

  render() {
    return (
    <div>
      <h5 onClick={this.clicki}> Menu</h5>
      <Button onClick={this.desayuno}>Desayuno</Button>
      <Button>Comida</Button>
    </div>
     );
  }
}

export default Pedidos;
