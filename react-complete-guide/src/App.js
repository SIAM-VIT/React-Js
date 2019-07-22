import React, { useState, Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  // const [personsState, setPersonState] = useState({
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
  // });

  // const switchNameHandler = () => {
  //   setPersonState({
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

  state = {
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
  };

  switchNameHandler = newname => {
    this.setState({
      persons: [
        {
          name: newname,
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
  render() {
    return (
      <div>
        <h1>Hello I'm a React App.</h1>
        <button onClick={this.switchNameHandler.bind(this, "Hrihtik")}>
          Swicth Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          Click={this.switchNameHandler.bind(this, "Hero")}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "Hi, I'm a React App!!!")
    // );
  }
}
export default App;
