import React, { Component } from "react";
import { fbsConfig } from "../../Config/ConfigFB";
import firebase from "firebase";
import {
  Row,
  Form,
  Col,
  FormControl,
  Button,
  Grid,
  Image
} from "react-bootstrap";
import logo from "../Login/logo.svg";
import "../Login/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(el) {
    this.setState({ [el.target.name]: el.target.value });
  }

  login(el) {
    el.preventDefault();
    fbsConfig
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {console.log(u)})
      .catch(error => {
        console.log(error);
      });
  }

  forgottenPass(){
    alert("Recupera tu password")
  }

  render() {
    return (
      <div className="Login">
        <Grid>
          <Row>
            <Col className="all logo lessMg">
              <Image src={logo} alt="bee" className="bee" responsive></Image>
            </Col>
          </Row>
          <Form horizontal className="lessMg">
                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <FormControl value={this.state.email} onChange={this.handleChange} 
                  type="email" name="email" id="exampleInputEmail1" placeholder="Email" 
                  className="social inputs"/>
                </Col>

                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <FormControl value={this.state.password} onChange={this.handleChange} 
                  type="password" name="password" id="exampleInputPassword1" placeholder="Password"
                  className="social inputs"/>
                </Col>
  
                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <Button type="submit" className="pink fontSize" onClick={this.login}>
                    Iniciar Sesión
                  </Button>
                </Col>

                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <p className="all social pass"
                  onClick={this.forgottenPass}>
                    ¿Olvidaste tu password?
                  </p>
                </Col>

            </Form>
        </Grid>
      </div>
    );
  }
}
export default Login;
