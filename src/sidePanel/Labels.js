import React from "react";
import style from "./mailBox.module.css";
import blueLogo from "../img/labels/circle_blue.png";
import d_blueLogo from "../img/labels/circle_d_blue.png";
import redLogo from "../img/labels/circle_red.png";
import yellowLogo from "../img/labels/circle_yellow.png";

const Labels = (props) => {
  return (
    <div className="labels">
      <p className="side_panel_header">LABELS</p>
      <div className="labels-list">
        <div className={`personal ${style.label}`}>
          <img src={d_blueLogo} alt="blueLogo" />
          <span className={style.italic}>Personal (2)</span>
        </div>
        <div className={`clients ${style.label}`}>
          <img src={redLogo} alt="redLogo" />
          <span className={style.italic}>Clients</span>
        </div>
        <div className={`work ${style.label}`}>
          <img src={yellowLogo} alt="yellowLogo" />
          <span className={style.italic}>Work</span>
        </div>
        <div className={`friends ${style.label}`}>
          <img src={blueLogo} alt="blueLogo" />
          <span className={style.italic}>Friends</span>
        </div>
      </div>
      <hr className="side_panel_hr" />
    </div>
  );
};

export default Labels;
