import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import Productlist from './Components/Productlist';
import Modal from './Components/Modal'
// This is where all the routes are kept
class App extends Component {
  render(){
    
    return(
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Productlist}/>
          <Route path='/details' component={Details}/>
          <Route path='/cart' component={Cart}/>
          {/* <Route path='/join' component={Join}/> */}
          <Route component={Default}/>
        </Switch>
        {/* <Modal/> */}
      </React.Fragment>
      
    );
  }
}

export default App;
