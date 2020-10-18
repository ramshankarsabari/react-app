import React from 'react';
import { Card, CardBody, CardImg , CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';


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

    function RenderDishComments({comments}){
        if(comments != null){
            let item=0;
            const dishCmt = comments.map((cmt) => { 
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

    const DishDetail = (props) =>{
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                
                    <RenderSelectedDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderDishComments comments={props.comments} />
                </div>
            </div>
            </div>
        );
    }


export default DishDetail;