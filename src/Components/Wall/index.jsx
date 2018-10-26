import React, { Component } from 'react';
import NavBar from '../Nav/'
import { Col, Row, Grid } from 'react-bootstrap';
import Pedidos from '../Pedidos/';
import Prueba from '../Prueba/';
import {Menu} from '../../Data/menu2';

class Wall extends Component {
    constructor(props){
        super(props);

        this.state = {
            menu: Menu
        }
    }

    render() {
        return (
            <div>
            <NavBar />
            <Grid>
                <Pedidos />
                <Prueba menu={this.state.menu}/>
            </Grid>
            </div>
        );

    }

}

export default Wall;