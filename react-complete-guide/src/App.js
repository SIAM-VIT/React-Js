import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const App = () => {
  const [personsState, setPersonState] = useState({
    persons: [
      {
        name: "Adhikansh",
        age: 28
      },
      {
        name: "Vidushi",
        age: 20
      },
      {
        name: "Harshita",
        age: 20
      }
    ],
    otherState: "some other value"
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        {
          name: "Adhi",
          age: 28
        },
        {
          name: "Akansha",
          age: 20
        },
        {
          name: "Harsho",
          age: 20
        }
      ]
    });
  };

  return (
    <div>
      <h1>Hello I'm a React App.</h1>
      <button onClick={switchNameHandler}>Swicth Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Hi, I'm a React App!!!")
  // );
};

export default App;

// state = {
//   persons: [
//     {
//       name: "Adhikansh",
//       age: 28
//     },
//     {
//       name: "Vidushi",
//       age: 20
//     },
//     {
//       name: "Harshita",
//       age: 20
//     }
//   ],
//   otherState: "some other value"
// };

// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       {
//         name: "Adhi",
//         age: 28
//       },
//       {
//         name: "Akansha",
//         age: 20
//       },
//       {
//         name: "Harsho",
//         age: 20
//       }
//     ]
//   });
// };
