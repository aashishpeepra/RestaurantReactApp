import React from 'react';
import './modal.css';


const modal=(props)=>{
    return(
        <div className="Modal">
            {props.children}
        </div>
    );
}

export default modal;