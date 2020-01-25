import React from 'react';
import Item from './Item/Item';
import {Container} from 'reactstrap';
const Items=(props)=>{
    return(
        <div className="Items">
            <Container>
                
            {props.data.map(element=>{
                return <Item key={element.head} decrement={props.remove} increment={props.adding} head={element.head} cnt={element.counter} price={element.price} url={element.url} content={element.content} />
        })}
            </Container>
            
        </div>
    );
}

export default Items;