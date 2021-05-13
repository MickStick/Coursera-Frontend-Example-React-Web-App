import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Nav, Navbar, NavbarBrand, NavLink} from 'reactstrap';
import Menu from './components/menu/Menu'
import {employees} from './shared/employees';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      employees
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
          <h1 className="center" center>Facades React.js Test</h1>
          <h3>A Facabe Website built during a Cousera React Frontend Course</h3>
        </div>
        <br/>
        <Menu employees={this.state.employees}/>
      </div>
    );
  }
  
}

export default App;
