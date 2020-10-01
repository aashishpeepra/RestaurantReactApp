import React,{Component} from 'react';
import './orderForm.css';
import {Container,Row,Col} from 'reactstrap';

class  orderForm extends Component{
    state={
        name:"",
        phone:"",
        houseNumber:"",
        locality:"",
        pincode:"",
        landmark:""
    }
    nameHandler=(e)=>{
        this.setState({name:e.target.value});
    }
    phoneHandler=(e)=>{
        this.setState({phone:e.target.value});
    }
    houseHandler=(e)=>{
        this.setState({houseNumber:e.target.value});
    }
    localityHandler=(e)=>{
        this.setState({locality:e.target.value});
    }
    pincodeHandler=(e)=>{
        this.setState({pincode:e.target.value});
    }
    landHandler=(e)=>{
        this.setState({landmark:e.target.value});
    }
    render(){
        var checkOut={
            name:this.state.name,
            phone:this.state.number,
            houseNumber:this.state.houseNumber,
            locality:this.state.locality,
            landmark:this.state.landmark,
            pincode:this.state.pincode
        };
        return(
        <div className="OrderForm">
        <p className="OrderFormHead">Fill Delivery Details</p>
            <form id="orderForm">
                <div className="form__container">
                <Container>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Name</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.name} onChange={this.nameHandler} id="CustomerName"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Address</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.houseNumber} onChange={this.houseHandler} id="HouseNumber"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Locality</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.locality} onChange={this.localityHandler} id="Locality"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Landmark</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.landmark} onChange={this.landHandler} id="LandMark"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Pin Code</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.pincode} onChange={this.pincodeHandler} id="PinCode"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4" xl="4">
                            <legend>
                                <p>Number</p>
                            </legend>
                        </Col>
                        <Col xs="8" xl="8">
                        <input type="text" value={this.state.phone} onChange={this.phoneHandler} id="Number"/>
                        </Col>
                    </Row>
                </Container>
                </div>
                <button type="button" onClick={()=>this.props.place({checkOut})}>Place Order</button>
            </form>
            
            <p className="OrderFormNotice">*Payment will be takes as Cash On delivery</p>
        </div>
    );
}
}

export default orderForm;