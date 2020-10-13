import React, { Component} from 'react';
import { Card, CardBody, CardImg , CardText, CardTitle} from 'reactstrap';


class DishDetail extends Component {


    renderSelectedDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderDishComments(dish){
        if(dish != null){
            let item=0;
            const dishCmt = dish.comments.map((cmt) => { 
                return(
                    <div key={cmt.id}>
                        <p><span>{++item}. </span>{cmt.comment}</p>
                        <p>Ratings - {cmt.rating}</p>
                        <p>{cmt.author}<span> - {cmt.date}</span></p> 
                    </div>
                );}
            );

            return (
                <div className="container">
                    <div className="row">
                    <Card>
                        <CardBody>

                        {dishCmt}
                        </CardBody>
                    </Card>
                    </div>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderSelectedDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderDishComments(this.props.dish)}
                    </div>
                </div>
            );
    }
}

export default DishDetail;