import React, { Component } from 'react';
import Wall from '../Wall/';
import Login from '../Login/';
import Error from '../Error/Error';
import {fbsConfig} from '../../Config/ConfigFB';
import Slides from '../Slides/Slides'
import Principal from '../Principal/Principal'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fbsConfig.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        localStorage.setItem('photo', user.photoURL);
        localStorage.setItem('userName', user.displayName);
        localStorage.setItem('mail', user.email);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div>
     <BrowserRouter>
        <Switch>
          <Route path="/slides" component={Slides}/>
          <Route path="/login" component={Login} />       
        </Switch>
      </BrowserRouter>
     
     {this.state.user ?  (<Wall />) : (<Principal />)}</div>
    )};

}

 export default App;