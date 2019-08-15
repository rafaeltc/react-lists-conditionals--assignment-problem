import React from 'react';
import './ValidationComponent.css';

const validationComponent = props => {

    const style = {
        color: "rgb(255,250,00)",
        fontWeight: "bold"
    };

    let displayText = null;

    if(props.textLength < 5) {
        displayText = <p>Text too small!!!</p>;
    } else if (props.textLength > 15) {
        displayText = <p>Text too long!!!</p>;
    }

    return (
        <div className="ValidationComponent" style={style}>
           {displayText}
        </div>
    )
};

export default validationComponent;