import React from 'react';
import './Items.css';
import Item from './Item/item';
import {Container} from 'reactstrap';
import Button from '../../buttons/grab-offer/grab-btn';
const Items=(props)=>{
    let k=0;
    props.data.map(element=>k+=element.price*element.counter);
    return(<div className="Items">
    <p className="ItemsHead"> Cart Summary</p>
        <Container>
            {props.data.map(element=><Item key={element.head} name={element.head} counter={element.counter} price={element.price}/>)}
            <Item name="Your Total " price={k}/>
            <Button url="/cart" content="Manage in Cart"/>
        </Container>
    </div>
    );
}
export default Items;