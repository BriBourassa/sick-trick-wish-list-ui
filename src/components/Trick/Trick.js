import React from "react";
import './Trick.css'

const Trick = ({name, obstacle, stance, tutorial, id}) => {
    return (
        <div className="trick">
            <h3>trick card!!</h3>
            <h2>{name}</h2>
            <p>{obstacle}</p>
            <p>{stance}</p>
            <p>{tutorial}</p>
        </div>
    )
};

export default Trick