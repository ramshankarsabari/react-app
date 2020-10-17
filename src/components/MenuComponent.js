import React from 'react';
import { Card,  CardImg ,  CardTitle, CardImgOverlay } from 'reactstrap';

function MenuCard({dish, onClick}){
    return(
        <Card key={dish.id} onClick={() => onClick(dish.id)}>
            <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle >{dish.name}</CardTitle>
                </CardImgOverlay>
        </Card>
    );
}


    const Menu = ({dishes,onClick}) => { 
        const menu = dishes.map((dish) => { 
            return(
            <div key={dish.id} className="col-12 col-md-5 mt-1">
                <MenuCard dish={dish} onClick={onClick} />
            </div>
            );}
        );
        return (
            
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
            
        );
    }

export default Menu;