import React from "react";

const Person = props => {
  return (
    <div>
      <h3>
        Hi I'm {props.name} and I am {props.age} year old
      </h3>
    </div>
  );
};

export default Person;