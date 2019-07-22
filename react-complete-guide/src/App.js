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

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Adhikansh", age: 18 },
        { name: event.target.value, age: 28 },
        { name: "harsho", age: 20 }
      ]
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPerson: true
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      margin: "10px auto"
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
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
    }

    return (
      <div>
        <h1>Hello I'm a React App.</h1>
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
    );
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "Hi, I'm a React App!!!")
    // );
  }
}
export default App;
