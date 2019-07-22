import React, { useState, Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
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
    otherState: "some other value",
    showPerson: false
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
    // const persons = this.state.persons.slice();
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                ClickMe={this.deletePersonHandler.bind(this, index)}
                changed={event => this.nameChangeHandler(event, index)}
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            Click={this.switchNameHandler.bind(this, "Hero")}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
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
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes = ['red','bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello I'm a React App.</h1>
          <p className={classes.join(" ")}>This is really working!</p>
          <button
            style={style}
            // onClick={this.switchNameHandler.bind(this, "Hrihtik")}
            onClick={this.togglePersonHandler}
          >
            {/* onClick{() => this.switchNameHandler("Hrithik")} */}
            {/*This is can be used*/}
            Switch Name
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "Hi, I'm a React App!!!")
    // );
  }
}
export default Radium(App);
