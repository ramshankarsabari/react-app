import React,{Component} from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent'; //presentational component //for the view purpose only
import DishDetail from './DishDetailComponent'; //presentational component //for the view purpose only
import Footer from './FooterComponent';
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
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.setSelectedDishId(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;