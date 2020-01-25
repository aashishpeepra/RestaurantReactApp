import React from 'react';
import './grab-btn.css';
import {Link} from 'react-router-dom';

const grab_btn=(props)=>{
    var to=props.url===undefined?"/home":props.url;
    return(
        <div className="grab">
        <Link   to={to} >{props.content}</Link>
        </div>
        // <div className="grab">
        //     <p>{props.content}</p>
        // </div>
    );
}

export default grab_btn;