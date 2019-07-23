import React from "react";

import Person from "./Person/Person";

const Persons = props => {
  return props.persons.map((person, index) => {
    return (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        ClickMe={() => props.clicked(index)}
        changed={event => props.changed(event, index)}
      />
    );
  });
};
export default Persons;
