import React from 'react';
import logo from './logo.svg';
import './App.css';
import home from './home';
import category from './category';
import products from './products';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Nav from './nav';
import adminArea from './adminArea'
import Loged from './loged'
function App() {
  return (
  <Router>
    <div>
      <Nav />
    <Route path="/home" component={home}/>
    <Route path="/category" component={category}/>
    <Route path="/products" component={products} />
    <Route path="/adminArea" exact component={adminArea}/>
    <Route path="/adminArea/loged" exact component={Loged}/>
   
    </div>
  </Router>
  );
}

export default App;
