import React from "react";
import "./Person.css";
import Radium from "radium";

const Person = props => {
  const style = {
    "@media (min-width:500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person" style={style}>
      <h3 onClick={props.ClickMe}>
        Hi I'm {props.name} and I am {props.age} year old
      </h3>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
