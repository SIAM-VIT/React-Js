import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <h3 onClick={props.Click}>
        Hi I'm {props.name} and I am {props.age} year old
      </h3>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
