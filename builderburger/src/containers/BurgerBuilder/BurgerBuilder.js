import React, { Component } from "react";

import Auxillary from "../../hoc/Auxilliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxillary>
        <Burger />
        <div>Burger Control</div>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
