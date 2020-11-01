import React from "react";
import GreenBtn from "./GreenBtn";
import Labels from "./Labels";
import Lists from "./Lists";
import MailBox from "./MailBox";
import User from "./User";
import createBtn from "../img/createBtn.png";

const SidePanel = (props) => {
  return (
    <div className="side-panel">
      <div className="side-panel-btn">
        <GreenBtn logo={createBtn} text={"Compose"} />
      </div>
      <MailBox />
      <Lists />
      <Labels />
      <User />
    </div>
  );
};

export default SidePanel;
