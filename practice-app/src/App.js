import React, { Component } from "react";
import "./App.css";

import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends Component {
  state = {
    username: "Adhikansh",
    content: "He is really very handsome."
  };

  UsernameHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          UsernameHandler={this.UsernameHandler}
          username={this.state.username}
        />
        <UserOutput
          username={this.state.username}
          content={this.state.content}
        />
      </div>
    );
  }
}
export default App;
