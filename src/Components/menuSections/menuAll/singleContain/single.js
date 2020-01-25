import React from 'react';
import './single.css';

const single=(props)=>{
    return(
        <div className="single" onClick={()=>props.click(props.name)} >
            <p onClick={()=>props.click(props.name)}>{props.name}</p>
        </div>
    );
}

export default single;