import React from "react";
import "./Concepts.css";

const Concepts = (props) => {
  return (
    <div>
      <ul id="concepts">
        <li className="concept">
          <img src="TODO: IMAGE" alt="TODO: TITLE" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
      </ul>
    </div>
  );
};

export default Concepts;
