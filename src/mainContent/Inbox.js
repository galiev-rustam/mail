import React from "react";
import { connect } from "react-redux";
import style from "./mainContent.module.css";
import Message from "./Message";

const Inbox = ({ messages }) => {
  return (
    <div className={style.inbox_content}>
      <div className={style.search_input}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={style.header}>
        <h2>Inbox</h2>
        <div className={style.sort}>
          <span>Sort by:</span>
          <select name="sort">
            <option value="unread">Unread</option>
            <option value="resent">Resent</option>
          </select>
        </div>
      </div>
      <div className={style.messages}>
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.messages.message,
  };
};

export default connect(mapStateToProps, null)(Inbox);
