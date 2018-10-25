import React, { Component } from "react";
import {Menu} from "../../Data/menu";

class Pedidos extends Component {
  constructor(props) {
    super(props);
    this.clicki = this.clicki.bind(this)
  }

  clicki(){
      console.log("Aquí el menu", Menu)
      for (const comida in Menu){
          console.log(comida)
      }
  }

  render() {
    return (<h5 onClick={this.clicki}> Menu</h5>
        );
  }
}

export default Pedidos;
