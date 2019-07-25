import React from "react";

import Auxillary from "../../hoc/Auxillary";

const Layout = props => {
  return (
    <Auxillary>
      <div>Toolbr,SideDrawer,Brackdrop</div>
      <main>{props.children}</main>
    </Auxillary>
  );
};

export default Layout;
