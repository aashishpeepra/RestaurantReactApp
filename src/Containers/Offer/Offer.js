import React, { Component } from 'react';
import './Offer.css';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import { NavLink } from 'react-router-dom';
import {Container,Row,Col} from 'reactstrap';
import Tile from '../../Components/sections/section-tiles/tile/tile';
import Flip from '../../Components/miscelleous/flip-card/flip-card';
import Footer from '../../Components/navigation/footer/footer';

class Offer extends Component {
    render() {
        let temp;
    const extractor=(obj)=>{
         temp=Object.keys(obj).map(name=>obj[name]);
    }
    extractor(this.props.data.cards);
        return (
            <div className="Offer">
                <section className="Offers">
                    <Toolbar count={this.props.count} />
                    <p className="OffersHead">Offers</p>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink exact to="/menu">Menu</NavLink>
                        <NavLink to="/offers">Offers</NavLink>
                    </div>
                </section>
                <section style={{marginTop:"40px"}}>
                    <Container>
                        <Row>
                           {temp.map(each=><Col key={each.head}><Tile url="/menu" button="Visit Menu" head={each.head} content={each.content} key={each.head} back={each.back} /></Col>)}
                        </Row>
                    </Container>
                </section>
                <section style={{marginTop:"40px"}}>
                    <Flip lis={this.props.board}/>
                </section>
                <Footer count={this.props.count}/>
            </div>
        );
    }
}

export default Offer;