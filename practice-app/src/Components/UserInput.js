import React from "react";

const UserInput = props => {
  return (
    <div>
      <h2>Enter your text here:</h2>
      <input
        type="text"
        onChange={props.UsernameHandler}
        placeholder={props.username}
      />
    </div>
  );
};

export default UserInput;
