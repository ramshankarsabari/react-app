import React,{Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent'; //presentational component //for the view purpose only
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import {DISHES} from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import {Route,Redirect,Switch} from 'react-router-dom';

class Main extends Component{ //Container component // for the purpose for storing data/state
  constructor(props) {
    super(props); // this is reqiured when you define a class component
    // to store objects/data within a class component use state, which is usually declared inside constructor
    // cannot directly change this.state data instead use setState() method to set state

    // to pass data to child components use props
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  };


  render(){
    
    const DishViewComponent = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    }

    const HomePage = () => {
      return(
          <Home 
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
    return (
      <div >
        <Header />
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />}/>
            <Route path="/menu/:dishId" component={DishViewComponent} />
            <Route path='/contactus' component={Contact} />} />
            <Route path='/aboutus' component={()=> <About leaders={this.state.leaders} />} />
            <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;