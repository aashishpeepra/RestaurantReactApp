import React from 'react';
import  './menuHeader.css';
import {NavLink} from 'react-router-dom';
import MenuAll from '../menuAll/menuAll';
import Footer from '../../navigation/footer/footer';
const menuHeader=(props)=>{
    return(
        <div>
        <section className="menuHeader">
        {props.children}
        <p className="menuTitle">MENU</p>
        <ul>
            <li>
                <NavLink  to="/">Home </NavLink>
            </li>
            <li>
                <NavLink  to="/menu">Menu </NavLink>
            </li>
        </ul>
        </section>
        <section className="menu-options">
            <MenuAll adding={props.adding} data={props.data}/>
        </section>
        <Footer/>
        </div>
    );
}

export default menuHeader;