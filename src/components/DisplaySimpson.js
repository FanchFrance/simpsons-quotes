import React from "react";
import "./DisplaySimpson.css"


function DisplaySimpson({ simpson }) {
  return (
    <div className="DisplaySimpson">
      <figcaption>
        <cite>{simpson.character}</cite>
        <blockquote>{simpson.quote}</blockquote>
      </figcaption>
      <img src={simpson.image} alt={simpson.character} />
    </div>
  );
}

export default DisplaySimpson;


 
 