import React, { Component } from 'react';
import './menuAll.css';
import Single from './singleContain/single';
import Inoptions from '../menuAll/inOptions/inOptions';
import Modal from '../../navigation/modal/modal';
import Backdrop from '../../navigation/backdrop/backdrop';
import { Container, Row, Col } from 'reactstrap';
import {Button} from 'reactstrap';

class menuAll extends Component {
    state = {
        options: [],
        load:"Select From Above",
        showCustomize:false,
        sendData:{}
    }
    openCustomizeHandler=(obj)=>{
        this.setState({showCustomize:true});
    }
    closeCustomizationHandler=()=>{
        this.setState({showCustomize:false});
    }
    loadStateHandler=(name)=>{
        
        this.setState({load:name,sendData:this.props.data[name]});
      
    }
    render() {
        
        let opn = Object.keys(this.props.data).map(data => <Single  name={data} click={this.loadStateHandler}  key={data} />);
        let customize=(
            <div>
            <Backdrop click={this.closeCustomizationHandler} />
            <Modal >
                <div className="addCustomization">
                <p className="cross" onClick={this.closeCustomizationHandler}> X</p>
                    <p className="CustomizationHeader">Customize</p>
                    <p className="CustomizationSub">Add Topping</p>
                    <form>
                        <Container>
                            <Row>
                                <Col xs="2" xl="3">
                                    <label>
                                        <p className="xyz">Choose topping</p>
                                    </label>
                                </Col>
                                <Col xs="2" xl="3">
                                    <p>&#x20B9; {20}</p>
                                </Col>
                                <Col xs="8" xl="6">
                                    <select id="topping" name="topping">
                                        <option value={40} >Reg Cheese</option>
                                        <option value={60}>Reg. Cheese Blast</option>
                                        <option value={50}>Medium Cheese</option>
                                        <option value={70}>Medium Chese Blast</option>
                                        <option value={60}>Large Cheese</option>
                                        <option value={80}>Large Cheese Blast</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="2" xl="3">
                                    <label>
                                        <p className="xyz">Choose Size</p>
                                    </label>
                                </Col>
                                <Col xs="2" xl="3">
                                    <p>&#x20B9; {20}</p>
                                </Col>
                                <Col xs="8" xl="6">
                                    <select id="topping" name="topping">
                                        <option value={40} >Regular</option>
                                        <option value={60}>Medium</option>
                                        <option value={50}>Large</option>
                                    </select>
                                </Col>
                            </Row>
                        </Container>
                    </form>
                    <Button color="info">View Cart</Button>
                    <Button color="info">Order Now</Button>    
                </div>
            </Modal>
            </div>
        );
        let custResult=this.state.showCustomize?customize:null;
        let outPut=(
            <div className="menuAll">
            {opn}
            <Inoptions adding={this.props.adding} selected={this.state.load} data={this.state.sendData} customization={this.openCustomizeHandler} check={opn} />
            {custResult}
        </div>
        );
        return (
            <div>
            {outPut}
            </div>
           
        );
    }

}

export default menuAll;