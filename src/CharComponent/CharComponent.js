import React from 'react';
import Radium from 'radium';
import './CharComponent.css';

const charComponent = props => {

    const style = {
        ':hover': {
            backgroundColor: '#fffaaa'
        }
    };

    return (
        <div className="CharComponent" onClick={props.onClick} style={style}>
            {props.char}
        </div>
    )
};

export default Radium(charComponent);