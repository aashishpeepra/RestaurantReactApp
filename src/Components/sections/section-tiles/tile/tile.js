import React from 'react';
import './tile.css';
import Button from '../../../buttons/grab-offer/grab-btn';

const tile=(props)=>{
    let classnm=["tile"];
    switch(props.back){
        case 1:
        classnm.push("nd1");
        break;
        case 2:
        classnm.push("nd2");
        break;
        case 3:
        classnm.push("nd3");
        break;
        case 4:
        classnm.push("of1");
        break;
        case 5:
        classnm.push("of2");
        break;
        case 6:
        classnm.push("of3");
        break;
        default:
        classnm=["tile"];
    }
    return(
        <div className={classnm.join(" ")}>
            <p className="titleHead">{props.head}</p>
            <p className="titleContent">{props.content}</p>
            <div className="titleButton">
                <Button url={props.url} content={props.button}/>
            </div>
        </div>
    );
}

export default tile;