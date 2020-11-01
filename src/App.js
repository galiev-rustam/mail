import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import Inbox from "./mainContent/Inbox";
import SideContent from "./sideContent/SideContent";
import SidePanel from "./sidePanel/SidePanel";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SidePanel />
        <div className="main-content">
          <Route path="/inbox" component={Inbox} />
          <Route path="/inbox/message" component={SideContent} />
        </div>
        {/* <div className="side-content"> */}
        {/* <Route path="/inbox" component={SideContent} /> */}
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
