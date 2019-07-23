import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";

import Persons from "../components/Persons/Persons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      otherState: "some other value",
      showPerson: false
    };
  }

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

  nameChangeHandler = (event, index) => {
    const person = {
      ...this.state.persons[index]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: true
    });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "10px auto",
      curson: "pointer",
      ":hover": {
        backgroundColor: "ligthgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            persons={this.state.persons}
          />
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "ligthgreen",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.persons.length < 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello I'm a React App.</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={style} onClick={this.togglePersonHandler}>
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}
export default Radium(App);
