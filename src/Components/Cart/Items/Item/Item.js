import React from 'react';
import './Item.css';

import {Row,Col} from 'reactstrap';
import {Button} from 'reactstrap';

const Item=(props)=>{
    return(
        <div className="cartItem">
            <Row>
                <Col xs="5" xl="5">
                    <div className="image-Box">
                        <img src={props.url} alt="Wow"/>
                    </div>
                </Col>
                <Col xs="7" xl="7">
                    <div className="cartItemContent">
                        <p className="cartItemContentHead">{props.head}</p>
                        <p className="cartItemContentContent">{props.content}</p>
                        <p className="cartItemContentPrice">&#x20B9; {props.price}<span className="cartAmount">{props.cnt}</span> </p>
                        <Button onClick={()=>props.increment({head:props.head,counter:props.cnt,url:props.url,content:props.content,price:props.price})} >1+</Button>
                        <Button onClick={()=>props.decrement({head:props.head,counter:props.cnt,url:props.url,content:props.content,price:props.price})}>1-</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Item;