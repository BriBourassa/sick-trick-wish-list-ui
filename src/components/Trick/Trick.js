import React from "react";
import './Trick.css'

const Trick = ({name, obstacle, stance, tutorial, id}) => {
    return (
        <div className="trick">
            <h2>{name}</h2>
            <p>{obstacle}</p>
            <p>{stance}</p>
            <p>Link to Tutotial:</p>
            <p>{tutorial}</p>
        </div>
    )
};

export default Trick