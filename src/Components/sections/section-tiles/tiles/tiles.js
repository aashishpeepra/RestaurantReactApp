import React from 'react';
import Tile from '../tile/tile';
import {Container,Row,Col} from 'reactstrap';

const tiles=(props)=>{
    let temp;
    const extractor=(obj)=>{
         temp=Object.keys(obj).map(name=>obj[name]);
    }
    extractor(props.data);
    return(
    <Container>
        <Row>
        {temp.map(offer=><Col key={offer.head}><Tile head={offer.head} url="/offers" button="See More" key={offer.head} content={offer.content} back={offer.back} /></Col>)}
        </Row>
    </Container>
    );
}

export default tiles;