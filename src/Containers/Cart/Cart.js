import React, { Component } from 'react';
import Toolbar from '../../Components/navigation/toolbar/toolbar';
import { NavLink } from 'react-router-dom';
import './Cart.css';
import Items from '../../Components/Cart/Items/Items';
import Button from '../../Components/buttons/grab-offer/grab-btn';
import Footer from '../../Components/navigation/footer/footer';

class Cart extends Component {
    state={
        price:0,
        items:{}
    }
    addCartHandler(obj){
        var copy=this.state.items;
        this.setState({items:{...copy}});
    }
    render() {
        let k=0;
        let count;
        if(this.props.data.length===undefined){
            count=0;
        }
        else{
            count=this.props.data.length;
        }
        this.props.data.map(element=>k+=element.price*element.counter);
        return (
               <div>
                    <section className="Cart">
                        <Toolbar count={count} />
                        <p className="CartHead">Cart</p>
                        <div>
                            <NavLink to="/">Home</NavLink>
                            <NavLink exact to="/menu">Menu</NavLink>
                            <NavLink to="/order">Cart</NavLink>
                        </div>
                    </section>
                    <section>
                        <Items remove={this.props.remove()} data={this.props.data} adding={this.props.adding()}/>
                        
                    </section>
                    <section className="cartTotal">
                    <p >You Total : &#8377; {k}</p>
                    <Button url="/order" content="Order Now"/>
                    </section>
                    <Footer />
            </div>
        );
    }
}

export default Cart;