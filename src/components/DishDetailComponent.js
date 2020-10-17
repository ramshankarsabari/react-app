import React from 'react';
import { Card, CardBody, CardImg , CardText, CardTitle} from 'reactstrap';


   function RenderSelectedDish({dish}){
        if(dish != null){
            return (
                <div >
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                </Card>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    function RenderDishComments  ({dish}){
        if(dish != null){
            let item=0;
            const dishCmt = dish.comments.map((cmt) => { 
                return(
                    <div key={cmt.id} >
                        <p><span>{++item}. </span>{cmt.comment}, Ratings - {cmt.rating}</p>
                        <p>{cmt.author}<span> - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</span></p> 
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

    const DishDetail = ({dish}) =>{
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        <RenderSelectedDish dish={(dish)}/>
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <RenderDishComments dish={(dish)}/>
                    </div>
                </div>
            </div>
        );
    }


export default DishDetail;