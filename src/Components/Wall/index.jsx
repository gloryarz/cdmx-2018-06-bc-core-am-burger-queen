import React, { Component } from 'react';
import NavBar from '../Nav/'
import {Row, Grid } from 'react-bootstrap';
import Prueba from '../Prueba/';
import {Menu} from '../../Data/menu2';
import Cocina from '../Cocina/'

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
                <Row>
                    {localStorage.getItem("user") === "NWX6goAu0OTFMB6amLrkSIVxCTr2" ? ( 
                        <Cocina/>
                    ) : (
                        <Prueba menu={this.state.menu}/>   
                    )}
                </Row>
            </Grid>
            </div>
        );

    }

}

export default Wall;