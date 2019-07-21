import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello I'm a React App.</h1>
        <Person name="Adhikansh" age="18" />
        <Person name="Vidushi" age="20">
          My Hobbies:Drawing
        </Person>
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
