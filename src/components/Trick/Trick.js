import React from "react";
import './Trick.css'

const Trick = ({name, obstacle, stance, tutorial, id}) => {
    return (
        <div className="trick">
            <h2>{stance} {name}</h2>
            <p>Obstacle: {obstacle}</p>
            <p>Link to Tutotial:</p>
            <p>{tutorial}</p>
        </div>
    )
};

export default Trick