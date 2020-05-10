import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './infoBar.css';

const infoBar = ({room})=>(
<div className="infoBar">
    <div className="leftInnerContainer">
     <img className="onlineIcon" src={onlineIcon}/>
     <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
    <a href="/"><img src={closeIcon} alt="close" /></a>
    </div>
  
</div>
)

export default infoBar;