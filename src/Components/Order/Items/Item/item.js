import React from 'react';
import './item.css';
import {Row,Col} from 'reactstrap';

const item=(props)=>{
    return(
        <div className="item">
                <Row>
                    <Col>
                    <p className="itemHead">{props.name} </p>
                    </Col>
                    <Col>
                    <p className="itemHead">{props.counter}</p>
                    </Col>
                    <Col>
                        <div className="itemData">
                            <p className="itemPrice">&#x20B9; {props.price}  </p>
                        </div>
                    </Col>
                </Row>
        </div>
    );
}
export default item;