import React from "react";

import Auxillary from "../../hoc/Auxillary";
import classes from "./Layout.css";

const Layout = props => {
  return (
    <Auxillary>
      <div>Toolbr,SideDrawer,Brackdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Auxillary>
  );
};

export default Layout;
