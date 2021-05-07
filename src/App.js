import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Nav, Navbar, NavbarBrand, NavLink} from 'reactstrap';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
