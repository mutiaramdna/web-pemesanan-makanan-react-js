import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComps } from './components'
import Home from './pages/Home'
import Food from './pages/Food'
import FoodDetail from './pages/FoodDetail';
import Keranjang from './pages/Keranjang';
import Sukses from './pages/Sukses';

export default class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
          <NavbarComps />
          <main>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/food" component={Food} exact/>
              <Route path="/food/:id" component={FoodDetail} exact/>
              <Route path="/keranjang" component={Keranjang} exact/>
              <Route path="/sukses" component={Sukses} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}
