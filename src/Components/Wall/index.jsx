import React, { Component } from 'react';
import NavBar from '../Nav/'
import { Col, Row, Grid } from 'react-bootstrap';
import Pedidos from '../Pedidos/';

class Wall extends Component {

    render() {
        return (
            <div>
            <NavBar />
            <Grid>
                <Pedidos />
            </Grid>
            </div>
        );

    }

}

export default Wall;