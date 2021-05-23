
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Nav, Navbar, NavbarBrand, NavLink} from 'reactstrap';
import MenuComponent from './components/menu/MenuComponent'
import {dishes} from './shared/dishes';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      dishes
    }
  }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Facades React.js Test</NavbarBrand>
            <NavLink href="/about" style={{"color": "white"}}>About</NavLink>
          </div>
        </Navbar><br/>
        <div className="container">
          <h1 className="center">Facades React.js Test</h1>
          <h3>A Facabe Website built during a Cousera React Frontend Course</h3>
        </div>
        <br/>
        <MenuComponent dishes={this.state.dishes}/>
      </div>
    );
  }
  
}

export default App;
