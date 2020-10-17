import React,{Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent'; //presentational component //for the view purpose only
import DishDetail from './DishDetailComponent'; //presentational component //for the view purpose only
import {DISHES} from '../shared/dishes';

class Main extends Component{ //Container component // for the purpose for storing data/state
  constructor(props) {
    super(props); // this is reqiured when you define a class component
    // to store objects/data within a class component use state, which is usually declared inside constructor
    // cannot directly change this.state data instead use setState() method to set state

    // to pass data to child components use props
    this.state = {
      dishes: DISHES,
      selectedDishId: null
    };
  };

setSelectedDishId(dishId){
    this.setState({ selectedDishId: dishId});
}

  render(){
    return (
      <div >
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.setSelectedDishId(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]} />
      </div>
    );
  }
}

export default Main;