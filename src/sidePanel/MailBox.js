import React from "react";
import { NavLink } from "react-router-dom";
import style from "./mailBox.module.css";
import inboxLogo from "../img/mailBox/inbox.png";
import sentLogo from "../img/mailBox/sent.png";
import draftLogo from "../img/mailBox/draft.png";
import trashLogo from "../img/mailBox/trash.png";
import attachLogo from "../img/mailBox/attach.png";
import moreLogo from "../img/mailBox/more.png";

const MailBox = (props) => {
  return (
    <div className="mail-box">
      <p className="side_panel_header">MAILBOX</p>
      <div className={style.actions}>
        <div className={style.left_panel}>
          <NavLink to="/inbox" activeClassName={style.active}>
            <img src={inboxLogo} alt="inbox" />
            <span>Inbox(200)</span>
          </NavLink>
        </div>
        <div className={style.left_panel}>
          <NavLink to="/sentmail" activeClassName={style.active}>
            <img src={sentLogo} alt="sent" />
            <span>Sent Mail</span>
          </NavLink>
        </div>
        <div className={style.left_panel}>
          <NavLink to="/drafts" activeClassName={style.active}>
            <img src={draftLogo} alt="draftLogo" />
            <span>Drafts</span>
          </NavLink>
        </div>
        <div className={style.left_panel}>
          <NavLink to="/trash" activeClassName={style.active}>
            <img src={trashLogo} alt="" />
            <span>Trash</span>
          </NavLink>
        </div>
        <div className={style.left_panel}>
          <NavLink to="/attachments" activeClassName={style.active}>
            <img src={attachLogo} alt="attachLogo" />
            <span>Attachments</span>
          </NavLink>
        </div>
        <div className={style.left_panel}>
          <img src={moreLogo} alt="moreLogo" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default MailBox;
