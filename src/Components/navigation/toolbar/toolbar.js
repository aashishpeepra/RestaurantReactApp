import React, { Component } from 'react';
import "./toolbar.css";
import Backdrop from '../backdrop/backdrop';
import { Container, Row, Col } from 'reactstrap';
import menu from '../../../Assests/icons/menu.png';
import home from '../../../Assests/icons/home.png';
import delivery from '../../../Assests/icons/delivery.png';
import contact from '../../../Assests/icons/contact.png';
import offer from '../../../Assests/icons/offer.png';
import cart from '../../../Assests/icons/cart.png';
import convo from '../../../Assests/icons/convo.png';
import icon from './menu.png';
import { Link } from 'react-router-dom';
class toolbar extends Component {
    state = {
        show: false,
        short: ["contentTool"]
    }
    render() {
        let count;
        if (this.props.count === undefined) {
            count = 0;
        }
        else {
            count = this.props.count;
        }
        let ext = "";
        if (this.props.back) {
            ext = " back";
        }
        const onTouch = () => {
            if (this.state.short.length > 1) {
                this.setState({ short: ["contentTool"], show: false });
            }
            else {
                this.setState({ short: ["contentTool", "contentShow"], show: true });
            }

        }
        const t_ext = "t-ext" + ext;
        return (
            <header>
                <nav>
                    <div className={t_ext}>
                        <Container>
                            <Row>
                                <Col>
                                    <div className="toolbar">
                                        <img src={home} alt="Home Menu Icon" />
                                        <Link to="/"><p>Home</p></Link>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="toolbar">
                                        <img src={menu} alt="Menu Opening Icon" />
                                        <Link to="/menu"><p>Menu</p></Link>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="toolbar">
                                        <img src={delivery} alt="Menu Opening Icon" />
                                        <Link to="/order"><p>Order Online</p></Link>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="toolbar">
                                        <img src={offer} alt="Menu Opening Icon" />
                                        <Link to="/offers"><p>Offer</p></Link>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="toolbar">
                                        <img src={contact} alt="Menu Opening Icon" />
                                        <Link to="#footer"><p>Contact</p></Link>
                                    </div>
                                </Col>
                                <Col xs="4">
                                    <Row>
                                        <Col xs="8">
                                            <div className="toolbar" >

                                                <p className="number"><img className="convo" src={convo} alt="Conversation " />9936657710</p>
                                            </div>
                                        </Col>
                                        <Col >
                                            <div className="toolbar" >
                                                <img src={cart} alt="Menu Opening Icon" />
                                                <Link to="/cart"><p>Cart <span className="count" >{count}</span></p></Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="short" >
                    
                        <img src={icon} onClick={() => onTouch()} alt="Icon" />
                        <div className={this.state.short.join(" ")}>
                        
                        <div className="items">
                        
                            <Container>
                                <Link to="/home">
                            <div className="eachOne">
                                <Row>
                                    <Col>
                                    
                                        <div className="smallImgBox">
                                            <img src={home} alt="An Icon" />
                                        </div>
                                    </Col>
                                    <Col>
                                    <div className="linkContainer">
                                        <Link to="/home">Home</Link>
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                                </Link>
                                <Link to="/menu">
                                <div className="eachOne">
                                <Row>
                                    
                                    <Col>
                                        <div className="smallImgBox">
                                            <img src={menu} alt="An Icon" />
                                        </div>
                                    </Col>
                                    <Col>
                                    <div className="linkContainer">
                                        <Link to="/menu">Menu</Link>
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                                </Link>
                                <Link to="/order">
                                <div className="eachOne">
                                <Row>
                                    
                                    <Col>
                                        <div className="smallImgBox">
                                            <img src={offer} alt="An Icon" />
                                        </div>
                                    </Col>
                                    <Col>
                                    <div className="linkContainer">
                                        <Link to="/order">Order</Link>
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                                </Link>
                                <Link to="/offers">
                                <div className="eachOne">
                                <Row>
                                    
                                    <Col>
                                        <div className="smallImgBox">
                                            <img src={contact} alt="An Icon" />
                                        </div>
                                    </Col>
                                    <Col>
                                    <div className="linkContainer">
                                        <Link to="/offers">Offers</Link>
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                                </Link>
                                <Link to="/cart">
                                <div className="eachOne">
                                <Row>
                                    
                                    <Col>
                                        <div className="smallImgBox">
                                            <img src={cart} alt="An Icon" />
                                        </div>
                                    </Col>
                                    <Col>
                                    <div className="linkContainer">
                                        <Link to="/cart">Cart</Link>
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                                </Link>
                                <Link to="/footer">
                                <div className="eachOne">
                                <Row>
                                    
                                    <Col>
                                        <div className="smallImgBox">
                                            <img src={contact} alt="An Icon" />
                                        </div>
                                    </Col>
                                    <Col>
                                    <div className="linkContainer">
                                        <Link to="#footer">Contact</Link>
                                        </div>
                                    </Col>
                                </Row>
                                </div>
                                </Link>
                            </Container>
                            
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default toolbar;