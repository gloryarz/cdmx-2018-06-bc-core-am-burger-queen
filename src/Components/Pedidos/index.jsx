import React, { Component } from "react";
import {Button, Col} from "react-bootstrap";

class Pedidos extends Component {
  constructor(props){
    super(props);
    console.log('pedidos', props)
  }

  render() { 
    return (  
      <Col xs={6}>
        <h2>Pedidos</h2>
      </Col>
    );
  }
}
 
export default Pedidos;
