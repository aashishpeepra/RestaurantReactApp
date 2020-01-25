import React from 'react';
import './inOptions.css';
import Inoption from './inOption/inOption';
import {Container,Row,Col} from 'reactstrap';
let toShow=[];
const inOptions =(props)=>{
    if(props.data!==undefined && props.data!==null){
        
        toShow=Object.keys(props.data).map(name=>{
            let cnt=props.data[name].content!==undefined?props.data[name].content:null;
            let img=props.data[name].image!==undefined?props.data[name].image:"https://media.timeout.com/images/103462914/image.jpg";
           return (<Col key={name}>
           <Inoption add={props.adding}  head={name} image={img} price={props.data[name].price} content={cnt} />
           </Col>
        )
        })
    }
    return(
        <div className="inOptions">
        <p className="inOptionsHead">{props.selected}</p>
        <Container>
        <Row>
            {toShow}
            </Row>
            </Container>
        </div>
    );
}

export default inOptions;