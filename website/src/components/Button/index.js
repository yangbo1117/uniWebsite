import React from 'react';
import './index.css';
function Buttonresize(props){
return(<div className="button-tab-backgrounds"><div className="sim-button-resize" data-text={props.text}><span>{props.text}</span></div></div>)
}

export default Buttonresize;
