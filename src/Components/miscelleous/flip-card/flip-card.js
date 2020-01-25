import React from 'react';
import './flip-card.css';

import {Link} from 'react-router-dom';
const flip_card = (props) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                {props.front}
                    <div>
                    <h1>The new trend of fooding in kanpur</h1>
                    <div style={{marginTop:"13%",backgroundColor:"#242424",opacity:0.8,display:"inline-block",padding:"10px 10px"}}>
                        <h2>Feel the taste like never before</h2>
                        
                        <h3>Brought at your doorsteps by 2 Brother</h3>
                        <h4>Click To take a look</h4>
                        </div>
                    </div>
                     </div>
                    <div className="flip-card-back">
                    {props.back}
                        <h1 style={{fontWeight:"300"}}>Whats Top on the board</h1>
                        <ul>
                            {Object.keys(props.lis).map(each=><li key={each}>{each}</li>)}
                        </ul>
                        <Link to="/home" >Happy Ordering</Link>            
                    </div>
                </div>
            </div>
            );
}
export default flip_card;