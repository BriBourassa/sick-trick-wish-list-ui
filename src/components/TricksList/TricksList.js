import React from "react";
import Trick from "../Trick/Trick";
import './TricksList.css'

const TricksList = ({tricks}) => {
  const trickCards = tricks.map((trick) => {
    return (
      <Trick
        name={trick.name}
        obstacle={trick.obstacle}
        stance={trick.stance}
        tutorial={trick.tutorial}
        key={trick.id}
      />
    );
  });

console.log({tricks})

  return (
    <div className="tricks-list">
        {trickCards}
    </div>
  )
};

export default TricksList;
