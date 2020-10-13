import React, { Component} from 'react';
import { Card,  CardImg ,  CardTitle, CardImgOverlay } from 'reactstrap';
import DishDetail from './DishDetailComponent';


class Menu extends Component {

    constructor(props) {
        super(props); // this is reqiured when you define a class component
        // to store objects/data within a class component use state, which is usually declared inside constructor
        // cannot directly change this.state data instead use setState() method to set state

        // to pass data to child components use props
        this.state = {
            selectedDish : null
        };
    }
    setSelectedDish(dish){
        this.setState({ selectedDish: dish});
    }


    render() { // this render() method returns corresponding view of the component
        const menu = this.props.dishes.map((dish) => { 
            return(
            <div key={dish.id} className="col-12 col-md-5 mt-1">
            <Card onClick={() => this.setSelectedDish(dish)}>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle >{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
            );}
        );
        return (
            // here, we are returning view for the component
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                 <DishDetail dish={this.state.selectedDish} />
            </div>
            
        );
    }
}

export default Menu;