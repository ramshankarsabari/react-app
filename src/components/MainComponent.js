import React,{Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent'; //presentational component //for the view purpose only
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import {Route,Redirect,Switch} from 'react-router-dom';

class Main extends Component{ //Container component // for the purpose for storing data/state
  constructor(props) {
    super(props); // this is reqiured when you define a class component
    // to store objects/data within a class component use state, which is usually declared inside constructor
    // cannot directly change this.state data instead use setState() method to set state

    // to pass data to child components use props
    this.state = {
      dishes: DISHES
    };
  };


  render(){
    const HomePage = () => {
        return(
            <Home />
        );
    }
    return (
      <div >
        <Header />
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />}/>
            <Redirect to="/home"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;