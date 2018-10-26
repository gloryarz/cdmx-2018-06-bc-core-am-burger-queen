import React, { Component } from "react";
import {Button, Col, Table} from 'react-bootstrap';
import { fbsConfig } from "../../Config/ConfigFB";
import "firebase/database";
import "./main.css"

class Prueba extends Component {
  constructor(props) {
    super(props);
    console.log('aqui props', props.menu.desayunos);
    this.db = fbsConfig
      .database()
      .ref()
      .child("pedidos");
    }

    state = {
      count: 0,
      lista: "",
      fantastic: ""
    };
    
    addPost = () => {
      this.db.push().set({ 
        postContent: this.state.lista, 
        userUid: localStorage.getItem('user'),
        mail: localStorage.getItem('mail'),
        date: new Date().toDateString(),
        hour: new Date().toLocaleTimeString()
      })
      this.setState({count: this.state.count = 0});
      this.setState({lista: this.state.lista = ""});
      this.setState({fantastic: this.state.fantastic = ""});
    };

    cancel = () => {
      this.setState({count: this.state.count = 0})
      this.setState({lista: this.state.lista = ""})
      this.setState({fantastic: this.state.fantastic = ""})
    }

    probando = (el) => {
      console.log(el.dish.food)
      this.setState({count: this.state.count + el.dish.price})
      this.setState({lista: this.state.lista + el.dish.food})
      this.setState({fantastic: this.state.fantastic + el.dish.price})
    }; 

    render() {
        const menuDesayuno = this.props.menu.desayunos.map(dish => {
          return (
              <Button bsSize="large" key={dish.id} className="buttonsMenu" onClick={() => this.probando({dish})}>{dish.food}</Button>
          );
        });

        const menuComida = this.props.menu.comida.map(dish => {
          return (
            <Button bsSize="large" key={dish.id} className="buttonsMenu" onClick={() => this.probando({dish})}>{dish.food}</Button>
          );
        });


    
        return (
          <div className="container">
            <Col xs={5}>
              <h2>Desayuno</h2>
              <div className="row">{menuDesayuno}</div>
              <h2>Comida</h2>
              <div className="row">{menuComida}</div>
            </Col>
            <Col xs={5} xsOffset={1}>
            <h2>Pedidos</h2>
              <Table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                    {this.state.lista}
                    </td>
                    <td>
                    {this.state.fantastic}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Total
                    </td>
                    <td>
                      ${this.state.count}
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Button onClick={this.cancel} bsStyle="danger" bsSize="large" className="buttons">Cancelar</Button>
              <Button onClick={this.addPost} bsStyle="success" bsSize="large" className="buttons">Enviar</Button>
            </Col>
          </div>
        );
      }
}

export default Prueba;
