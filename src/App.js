import React,{Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  };
  render(){
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}/>
      </div>
    );
  }
}

export default App;


//React component lifecycle
//React component goes through the following life cycle changes
//1. MOUNTING 2.UPDATING 3.UNMOUNTING

//1.MOUNTING - methods (called when an instance of a component is being created and inserted into the DOM)
//       constructor(),getDerivedStateFromProps(),render(),componentDidMount()

//2.UPDATING-